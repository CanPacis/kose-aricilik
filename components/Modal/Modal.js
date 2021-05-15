import React from "react";
import styles from "./Modal.module.css";

import Button from "@/components/Button/Button"

import Service from "@/service/Service";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let language = Service.Language.languages[this.props.language];


    return (
      <div className={`${styles.container} ${this.props.open && styles.open}`}>
        <div onClick={this.props.onClose} className={styles.overlay} />
        <div className={styles.content}>
          <div className={styles.modalBody}>{this.props.children}</div>
          <div className={styles.modalAction}>
              <Button onClick={this.props.onClose} type="primary">{language.ok}</Button>
          </div>
        </div>
      </div>
    );
  }
}
