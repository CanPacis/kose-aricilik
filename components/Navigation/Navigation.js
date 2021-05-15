import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

import Service from "@/service/Service"

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    let language = Service.Language.languages[this.props.language]

    this.state = {
      links: [
        { label: language.homepage, to: "nav", type: "inpage" },
        { label: language.catalog, to: "#catalog", type: "inpage" },
        { label: language.contact, to: "#contact", type: "inpage" },
        { label: language.faq, to: "/faq", type: "redirect" },
      ],
      language: [
        { label: "tr", id: "tr" },
        { label: "en", id: "en" },
      ],
      index: 0,
    };
  }

  handleNavigation = (link, i) => {
    this.setState({ index: i });
  };

  scroll = (target) => {
    if (document) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  render() {
    return (
      <nav className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo_dark.png" alt="Logo" />
        </div>
        <div className={styles.links}>
          <ul className={styles.inPage}>
            {this.state.links.map((link, i) => (
              <li
                onClick={() => this.handleNavigation(link, i)}
                key={link.to}
                className={i === this.state.index ? styles.active : ""}
              >
                {link.type === "inpage" ? (
                  <span onClick={() => this.scroll(link.to)}>{link.label}</span>
                ) : (
                  <Link href={link.to}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
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
          <ul>
            {this.state.language.map(lang => <li onClick={() => this.props.changeLanguage(lang.id)} key={lang.id}>{lang.label}</li>)}
          </ul>
        </div>
      </nav>
    );
  }
}
