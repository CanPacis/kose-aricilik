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

    this.imageRef = React.createRef();
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

    state.banner.width = window.innerWidth;
    state.banner.height = window.innerHeight;

    this.setState(state);
  };

  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.backgroundImage}
          ref={this.imageRef}
          width={this.state.banner.width}
          height={this.state.banner.height}
          src="/images/bg.svg"
        />
        <CanvasComponent
          updateSize={this.updateSize}
          width={this.state.banner.width}
          height={this.state.banner.height}
        />
        <div className={styles.main}>
          <Navigation />
          <div className={styles.bannerWrapper}>
            <div className={styles.body}>
              <img src="/images/kavanoz.webp" alt="Kavanoz" />
              <div className={styles.text}>
                <h1>LOREM IPSUM DOLOR SIT AMET.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
                <Button>Sİparİş Ver</Button>
              </div>
            </div>
            <div className={styles.more}>
              <i className={`material-icons`}>expand_more</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
