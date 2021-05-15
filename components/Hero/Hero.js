import React from "react";
import styles from "./Hero.module.css";
import CanvasComponent from "@/components/Canvas/Canvas";
import Navigation from "@/components/Navigation/Navigation";
import Button from "@/components/Button/Button";

export default class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.imageRef = React.createRef();
  }

  render() {
    return (
      <div ref={this.wrapperRef} className={styles.container}>
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
