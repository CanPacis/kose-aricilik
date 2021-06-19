import React from "react";
import styles from "./Product.module.css";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    window.open(this.props.url, "_blank").focus();
  };

  render() {
    return (
      <article lang="tr" onClick={this.handleClick} className={styles.card}>
        <img src={this.props.image} alt="product cover" />
        <div className={styles.meta}>
          <h3 className={styles.productTitle}>{this.props.title}</h3>
          <p
            className={`${styles.productPrice} ${
              this.props.odd ? styles.oddPrice : ""
            }`}
          >
            {this.props.price}
          </p>
        </div>
      </article>
    );
  }
}
