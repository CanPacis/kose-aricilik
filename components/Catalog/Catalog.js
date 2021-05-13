import React from "react";
import styles from "./Catalog.module.css";

import Product from "@/components/Product/Product";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className={styles.title} id="catalog">Katalog</h1>
        <div className={styles.productsWrapper}>
          <Product
            image="/images/kavanoz.webp"
            title="Lorem Ipsum Dolor"
            price="139.99 TL"
          />
          <Product
            image="/images/kavanoz.webp"
            title="Sit Amet Consectetur"
            price="99.99 TL"
            odd
          />
          <Product
            image="/images/kavanoz.webp"
            title="Lorem Ipsum Dolor"
            price="179.99 TL"
          />
          <Product
            image="/images/kavanoz.webp"
            title="Sit Amet Consectetur"
            price="129.99 TL"
            odd
          />
        </div>
      </div>
    );
  }
}
