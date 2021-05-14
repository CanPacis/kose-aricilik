import React from "react";
import styles from "./Catalog.module.css";

import Product from "@/components/Product/Product";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAmount(price) {
    return `${price.amount} ${price.type}`;
  }

  renderProducts = () => {
    if (this.props.products.length >= 1) {
      return this.props.products.content.map((product, i) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          price={this.renderAmount(product.price)}
          url={product.link}
          odd={i % 2 === 1}
        />
      ));
    } else {
      return <h2>Henüz Bir Ürün Yok</h2>;
    }
  };

  render() {
    return (
      <div>
        <h1 className={styles.title} id="catalog">
          Katalog
        </h1>
        <div className={styles.productsWrapper}>{this.renderProducts()}</div>
      </div>
    );
  }
}
