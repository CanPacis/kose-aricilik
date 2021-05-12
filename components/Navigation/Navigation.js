import React from "react";
import styles from "./Navigation.module.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { label: "Anasayfa", to: "#" },
        { label: "Katalog", to: "#catalog" },
        { label: "İletİşİm", to: "#contact" },
      ],
      index: 0,
    };
  }

  handleNavigation = (link, i) => {
    this.setState({ index: i });
  };

  render() {
    return (
      <nav className={styles.container}>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" height={60} />
        </div>
        <div className={styles.links}>
          <ul>
            {this.state.links.map((link, i) => (
              <li
                onClick={() => this.handleNavigation(link, i)}
                key={link.to}
                className={i === this.state.index ? styles.active : ""}
              >
                <a href={link.to}>{link.label}</a>
              </li>
            ))}
          </ul>
          <ul className={styles.social}>
            <li>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-stripe-s"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
