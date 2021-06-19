import React from "react";
import styles from "./Button.module.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        className={`${styles.button} ${styles[this.props.type]} ${this.props.fullwidth ? styles["fullwidth"] : ""} ${
          this.props.disabled && styles.disabled
        } ${this.props.shiny && styles.shiny}`}
        >
        {this.props.children}
        {this.props.icon && <img className={styles.icon} src={`/icons/${this.props.icon}.svg`} alt="sipariş" />}
      </button>
    );
  }
}
