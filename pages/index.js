import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Köse Arıcılık - Yakında</title>
        </Head>
        <Layout />
      </div>
    );
  }
}
