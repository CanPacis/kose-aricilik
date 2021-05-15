import React from "react";

export default class Meta extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
		const description = "This is a description"
		const assetLink = "http://185.141.33.174:5000"

    return (
      <>
        {/* <!-- Search Engine --> */}
        <meta name="description" content={description} />
        <meta
          name="image"
          content={`${assetLink}/images/logo_dark.png`}
        />
        {/* <!-- Schema.org for Google --> */}
        <meta
          itemprop="name"
          content="Dedemin Balları® - Bir Köse Arıcılık Markası"
        />
        <meta itemprop="description" content={description} />
        <meta
          itemprop="image"
          content={`${assetLink}/images/logo_dark.png`}
        />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Dedemin Balları® - Bir Köse Arıcılık Markası"
        />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image:src"
          content={`${assetLink}/images/logo_dark.png`}
        />
        {/* <!-- Twitter - Product (e-commerce) --> */}
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta
          name="og:title"
          content="Dedemin Balları® - Bir Köse Arıcılık Markası"
        />
        <meta name="og:description" content={description} />
        <meta
          name="og:image"
          content={`${assetLink}/images/logo_dark.png`}
        />
        <meta name="og:url" content="http://kosearicilik.com" />
        <meta name="og:site_name" content="Köse Arıcılık" />
        <meta name="og:locale" content={this.props.language} />
        <meta name="og:type" content="product" />
        {/* <!-- Open Graph - Product (e-commerce) --> */}
        <meta name="product:availability" content="instock" />
        <meta name="product:price:currency" content="TL" />
        <meta name="product:brand" content="Dedemin Balları®" />
      </>
    );
  }
}
