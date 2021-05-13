import React from "react";
import styles from "./Divider.module.css";

export default class Divider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={`${styles.divider} ${styles[this.props.orientation]}`}>
        <span className={styles.left}></span>
        <span className={styles.center}></span>
        <span className={styles.right}></span>
      </span>
    );
  }
}
