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
        <div className={styles.top}>
          <span>{language.copyright.message}</span>
          <span>{language.copyright.year}</span>
        </div>
        <ul className={styles.social}>
          <li>
            <a target="_blank" href="https://www.instagram.com/kosearicilik/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/kosearicilik">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.shopier.com/kosearicilik">
              <i className="fab fa-stripe-s"></i>
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
