import React from "react";
import styles from "./Footer.module.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <footer className={styles.footer}>
			<span>Köse Arıcılık</span>
			<span>2021</span>
		</footer>;
  }
}
