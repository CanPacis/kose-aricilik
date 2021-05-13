import React from "react";
import styles from "./Input.module.css";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type === "textarea") {
      return <textarea placeholder={this.props.placeholder} className={styles.textarea}></textarea>;
    }

    return <input placeholder={this.props.placeholder} className={styles.input} type="text" />;
  }
}
