import React from "react";
import styles from "./Hero.module.css";
import CanvasComponent from "@/components/Canvas/Canvas";
import Navigation from "@/components/Navigation/Navigation";
import Button from "@/components/Button/Button";

import Service from "@/service/Service";

export default class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.imageRef = React.createRef();
  }

  handleClick = () => {
    window.open("https://www.shopier.com/kosearicilik", "_blank").focus();
  };

  render() {
    let language = Service.Language.languages[this.props.language];

    return (
      <div ref={this.wrapperRef} className={styles.container}>
        <div className={styles.main}>
          <Navigation changeLanguage={this.props.changeLanguage} language={this.props.language} />
          <div className={styles.bannerWrapper}>
            <div className={styles.body}>
              <div className={styles.text}>
                <h1>{language.hero.title}</h1>
                <p>{language.hero.content}</p>
                <Button onClick={this.handleClick} shiny type="primary" icon="cart_icon">
                  {language.order}
                </Button>
              </div>
              <div className={styles.images}>
                <img className={styles.kestane} src="/images/kestane.webp" alt="Kavanoz" />
                <img className={styles.cicek} src="/images/cicek.webp" alt="Kavanoz" />
              </div>
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
