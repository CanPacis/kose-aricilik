import React from "react";
import styles from "./Hero.module.css";
import CanvasComponent from "@/components/Canvas/Canvas";
import Navigation from "@/components/Navigation/Navigation";
import Button from "@/components/Button/Button";

export default class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banner: {
        width: 0,
        height: 0,
      },
    };

    this.wrapperRef = React.createRef();
    this.imageRef = React.createRef();
    this.constantHeight = null;
  }

  componentDidMount() {
    this.updateSize();
    window.addEventListener("resize", this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }

  updateSize = () => {
    let state = this.state;

    let rect = this.wrapperRef.current.getBoundingClientRect();
    state.banner.width = rect.width;
    state.banner.height = rect.height;

    if (window.innerWidth < 650) {
      if (!this.constantHeight) {
        this.constantHeight = rect.height * 0.7;
      }

      state.banner.height = this.constantHeight;
      this.wrapperRef.current.style.height = `${state.banner.height}px`;
    } else {
      this.wrapperRef.current.style.height = `100vh`;
    }

    this.setState(state);
  };

  render() {
    return (
      <div ref={this.wrapperRef} className={styles.container}>
        {/* <img
          className={styles.backgroundImage}
          ref={this.imageRef}
          width={this.state.banner.width}
          height={this.state.banner.height}
          src="/images/bg.svg"
        /> */}
        {/* <CanvasComponent
          updateSize={this.updateSize}
          width={this.state.banner.width}
          height={this.state.banner.height}
        /> */}
        <div className={styles.main}>
          <Navigation />
          <div className={styles.bannerWrapper}>
            <div className={styles.body}>
              <div className={styles.text}>
                <h1>LOREM IPSUM DOLOR SIT AMET.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
                <Button shiny type="primary" icon="cart_icon">
                  Sİparİş Ver
                </Button>
              </div>
              <img src="/images/kavanoz.webp" alt="Kavanoz" />
            </div>
            <div className={styles.more}>
              <img src="/icons/down_icon.svg" alt="dahası" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
