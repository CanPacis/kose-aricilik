import React from "react";
import Head from "next/head";

import Hero from "@/components/Hero/Hero";
import Delivery from "@/components/Delivery/Delivery";
import Catalog from "@/components/Catalog/Catalog";
import Contact from "@/components/Contact/Contact";

const Home = () => (
  <div>
    <Head>
      <title>Köse Arıcılık</title>
      <link rel="shortcut icon" href="/images/favicon.png" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossOrigin="anonymous"
      />
    </Head>
    <Hero />
    <Delivery />
    <Catalog />
    <Contact />
  </div>
);

export default Home;
