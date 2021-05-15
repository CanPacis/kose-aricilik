import React from "react";
import Head from "next/head";

import Meta from "@/components/Meta/Meta";
import Hero from "@/components/Hero/Hero";
import Delivery from "@/components/Delivery/Delivery";
import Catalog from "@/components/Catalog/Catalog";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default class Home extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch("http://185.141.33.174:8000/products/kosearicilik");
    const json = await res.json();
    return { products: json };
  }

  constructor(props) {
    super(props);
  }

  render() {
    // let document
    // if (document) {
    //   if (this.state.openModal) {
    //     document.body.classList.add("openModal");
    //   } else {
    //     document.body.classList.remove("openModal");
    //   }
    // }

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>Dedemin Balları® - Bir Köse Arıcılık Markası</title>
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
          />
          <Meta />
        </Head>
        <Hero />
        <Delivery />
        <Catalog products={this.props.products} />
        <Contact />
        <Footer />
      </div>
    );
  }
}
