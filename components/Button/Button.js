import React from "react";
import styles from "./Button.module.css";

export default class Button extends React.Component {
	constructor(props) {
		super(props);
		
	}

  render() {
    return <button onClick={this.props.onClick} className={`${styles.button} ${styles[this.props.type]}`}>{this.props.children}</button>;
  }
}
