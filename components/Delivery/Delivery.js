import React from "react";
import styles from "./Delivery.module.css";

import Divider from "@/components/Divider/Divider";
import Service from "@/service/Service";

function Type(props) {
  return (
    <div className={styles.type}>
      {props.icon ? (
        <img className={styles.typeIcon} src={props.icon} alt="delivery" />
      ) : (
        <span className={styles.typePlaceholder}></span>
      )}

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
    let language = Service.Language.languages[this.props.language];

    return (
      <div className={styles.container}>
        <Type icon="/images/gel_al.svg" title={language.take_away.title}>
          {language.take_away.content}
        </Type>
        <Divider orientation="vertical" />
        <Type
          icon="/images/kapiya_teslim.svg"
          title={language.same_day_delivery.title}
        >
          {language.same_day_delivery.content}
        </Type>
        <Divider orientation="vertical" />
        <Type icon="/images/online_siparis.svg" title={language.shipment.title}>
          {language.shipment.content}
        </Type>
      </div>
    );
  }
}
