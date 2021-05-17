import React from "react";
import Head from "next/head";

import Meta from "@/components/Meta/Meta";
import Navigation from "@/components/Navigation/Navigation";
import FAQ from "@/components/FAQ/FAQ";

export default class SSSPage extends React.Component {
  // static async getInitialProps(ctx) {
  //   const res = await fetch(
  //     "https://api.box.com/2.0/files/811327841741/content/",
  //     {
  //       headers: {
  //         Authorization: "Bearer 44UbFiUoxa3s3N0rOrlTiSu4mVP8AzFr",
  //       },
  //     }
  //   );
  //   const text = await res.text();
  //   return {
  //     file: text
  //       .split("-")
  //       .slice(1)
  //       .map((q) => q.split("\n").filter((c) => c.trim().length > 0)),
  //   };
  // }

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
            <Navigation
              changeLanguage={this.changeLanguage}
              language={this.state.language}
            />
            <FAQ language={this.state.language} />
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
