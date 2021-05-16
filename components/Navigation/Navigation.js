import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

import Service from "@/service/Service";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.setItems();
    }
  }

  handleNavigation = (link, i) => {
    this.setState({ index: i, isMobileMenuOpen: false });
  };

  scroll = (target) => {
    if (document) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  setItems = () => {
    let state = this.state;
    let language = Service.Language.languages[this.props.language];

    state = {
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
      isMobileMenuOpen: false,
    };

    this.setState(state);
  };

  toggleMenu = (isMobileMenuOpen) => {
    this.setState({ isMobileMenuOpen });
  };

  render() {
    return (
      <nav className={styles.container}>
        {this.state.links ? (
          <>
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
                      <span onClick={() => this.scroll(link.to)}>
                        {link.label}
                      </span>
                    ) : (
                      <Link href={link.to}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
              <ul className={styles.language}>
                {this.state.language.map((lang) => (
                  <li
                    onClick={() => this.props.changeLanguage(lang.id)}
                    key={lang.id}
                    className={`${
                      this.props.language === lang.id && styles.active
                    }`}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.mobileMenu}>
              <img
                onClick={() => this.toggleMenu(true)}
                height={32}
                src="/icons/hamburger_menu.svg"
                alt="menu"
              />
            </div>
            <div
              className={`${styles.menuWrapper} ${
                this.state.isMobileMenuOpen && styles.mobileOpen
              }`}
            >
              <ul className={styles.inPage}>
                {this.state.links.map((link, i) => (
                  <li
                    onClick={() => this.handleNavigation(link, i)}
                    key={link.to}
                    className={i === this.state.index ? styles.active : ""}
                  >
                    {link.type === "inpage" ? (
                      <h2 onClick={() => this.scroll(link.to)}>{link.label}</h2>
                    ) : (
                      <Link href={link.to}>
                        <h2>{link.label}</h2>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {/* <ul className={styles.language}>
                {this.state.language.map((lang) => (
                  <li
                    onClick={() => this.props.changeLanguage(lang.id)}
                    key={lang.id}
                    className={`${
                      this.props.language === lang.id && styles.active
                    }`}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul> */}
              <img
                onClick={() => this.toggleMenu(false)}
                style={{ margin: "40px 0", cursor: "pointer" }}
                height={32}
                src="/icons/hamburger_menu.svg"
                alt="menu"
              />
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </nav>
    );
  }
}
