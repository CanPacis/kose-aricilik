import React from "react";
import styles from "./Delivery.module.css";

import Divider from "@/components/Divider/Divider";

function Type(props) {
  return (
    <div className={styles.type}>
        {props.icon ? <img height={60} src={props.icon} alt="delivery" /> : <span className={styles.typePlaceholder}></span>}
      
      <h2 className={styles.typeTitle}>{props.title}</h2>
      <p className={styles.typeContent}>{props.children}</p>
    </div>
  );
}

export default class Delivery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <Type title="Gel-Al">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </Type>
        <Divider orientation="vertical" />
        <Type title="Kapıya Teslİm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </Type>
        <Divider orientation="vertical" />
        <Type title="Kargo">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </Type>
      </div>
    );
  }
}
