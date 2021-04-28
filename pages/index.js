import React from "react";
import Head from "next/head";
import "rsuite/dist/styles/rsuite-default.css";

import Hero from "../components/Hero/Hero";

const Home = () => (
  <div>
    <Head>
      <title>Köse Arıcılık</title>
      <link rel="shortcut icon" href="/images/favicon.png" />
    </Head>
    <Hero />
    şişi
  </div>
);

export default Home;
