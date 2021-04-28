import React from "react";
import Image from "next/image"
import styles from "./Hero.module.css";

export default class Hero extends React.Component {
  render() {
    return <div className={styles.container}>
        <div className={styles.imageWrapper}></div>
        <h1 className={styles.title}>Köse Arıcılık</h1>
    </div>;
  }
}
