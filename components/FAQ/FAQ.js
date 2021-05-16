import React from "react";
import styles from "./FAQ.module.css";

export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>FAQ Page</h1>
      </div>
    );
  }
}
