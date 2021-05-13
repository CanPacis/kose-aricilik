import React from "react";

class Bubble {
  constructor(position, radius) {
    this.position = new Vector(position);
    this.radius = radius;
    this.toggled = false;
    this.opacity = 0.05;
    this.angle = 0;
    this.way = 0.1;
  }

  update() {
  }

  render(context) {
    const { x, y } = this.position;

    context.save();
    context.fillStyle = "#ffffff";
    context.globalAlpha = this.opacity;
    context.beginPath();
    context.arc(x, y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    if (this.toggled) {
      context.globalAlpha = 0.8;
      context.strokeStyle = "#ffffff";
      context.lineWidth = 5;
      context.beginPath();
      context.arc(x, y, this.radius - 10, 0, this.angle);
      context.stroke();
      context.closePath();
      context.globalAlpha = this.opacity;
    }

    context.restore();
  }
}

class Vector {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }

  add({ x, y }) {
    this.x += x;
    this.y += y;
  }
}

export default class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shapes: [],
    };
    this.wrapper = React.createRef();
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener("mousemove", this.handleMouseMove);
      window.removeEventListener("click", this.handleClick);
      window.removeEventListener("resize", this.props.updateSize);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.height !== this.props.height ||
      prevProps.width !== this.props.width
    ) {
      this.init();
    }
  }

  init = () => {
    this.canvas = this.wrapper.current;
    window.addEventListener("click", this.handleClick);
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("resize", this.props.updateSize);

    let state = this.state;
    state.shapes = [];
    let attempts = 0;
    let firstBubble = new Bubble(this.newPosition, this.newSize);
    state.shapes.push(firstBubble);

    while (state.shapes.length < 10) {
      if (attempts < 200) {
        let overlaps = false;
        let position = this.newPosition;
        let radius = this.newSize;
        let perimeter = 60;

        for (const shape of state.shapes) {
          if (
            this.distance(position, shape.position) <
            radius + shape.radius + perimeter
          ) {
            overlaps = true;
          }
        }

        if (!overlaps) {
          state.shapes.push(new Bubble(position, radius));
        }
        attempts++;
      } else {
        break;
      }
    }

    this.setState(state);
    this.draw(this.canvas.getContext("2d"));
  };

  handleMouseMove = (e) => {
    let target = this.getTarget(e);

    for (const shape of this.state.shapes) {
      let distance = this.distance(shape.position, target);

      if (distance <= shape.radius) {
        if (shape.opacity <= 0.1) {
          shape.opacity += 0.003;
        }
      } else {
        if (shape.opacity >= 0.05) {
          shape.opacity -= 0.003;
        }
      }
    }
  };

  handleClick = (e) => {
    let shape = this.getShape(e);

    if (shape) {
      shape.toggled = !shape.toggled;
    }
  };

  draw = (context) => {
    const animate = () => {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (const shape of this.state.shapes) {
        shape.update(context);
        shape.render(context);
      }

      requestAnimationFrame(animate);
    };

    animate();
  };

  getTarget = (e) => {
    const rect = this.canvas.getBoundingClientRect();
    let x = e.clientX - rect.x;
    let y = e.clientY - rect.y;

    return { x, y };
  };

  getShape = (e) => {
    let target = this.getTarget(e);
    let result = null;

    for (const shape of this.state.shapes) {
      let distance = this.distance(shape.position, target);

      if (distance <= shape.radius) {
        result = shape;
      }
    }

    return result;
  };

  distance(v1, v2) {
    return Math.sqrt(
      Math.pow(Math.abs(v1.x - v2.x), 2) + Math.pow(Math.abs(v1.y - v2.y), 2)
    );
  }

  random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  get newSize() {
    return this.random(
      (this.props.width * 6) / 100,
      (this.props.width * 13) / 100
    );
  }

  get newPosition() {
    return {
      x: this.random(40, this.props.width),
      y: this.random(40, this.props.height),
    };
  }

  render() {
    return (
      <canvas
        width={this.props.width}
        height={this.props.height}
        ref={this.wrapper}
      />
    );
  }
}
