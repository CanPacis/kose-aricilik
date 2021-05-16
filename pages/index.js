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

    this.state = { language: null };
  }

  componentDidMount() {
    this.setState({
      language: window?.localStorage.getItem("language") || "en",
    });
  }

  changeLanguage = (language) => {
    this.setState({ language });
    window?.localStorage.setItem("language", language);
  };

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>Dedmin Balları</title>
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
          />
          <Meta />
        </Head>
        {this.state.language !== null ? (
          <>
            <Hero
              changeLanguage={this.changeLanguage}
              language={this.state.language}
            />
            <Delivery language={this.state.language} />
            <Catalog
              products={this.props.products}
              language={this.state.language}
            />
            <Contact language={this.state.language} />
            <Footer language={this.state.language} />
          </>
        ) : (
          <div className="loading">
            <p>Loading...</p>
          </div>
        )}
      </div>
    );
  }
}
