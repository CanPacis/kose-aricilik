import React from "react";
import styles from "./Question.module.css";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className={styles.container}>
        <h2>{this.props.title}</h2>
        <p>{this.props.children}</p>
      </article>
    );
  }
}
