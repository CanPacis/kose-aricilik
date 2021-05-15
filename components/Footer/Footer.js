import React from "react";
import styles from "./Footer.module.css";

import Service from "@/service/Service";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let language = Service.Language.languages[this.props.language];

    return (
      <footer className={styles.footer}>
        <span>{language.copyright.message}</span>
        <span>{language.copyright.year}</span>
      </footer>
    );
  }
}
