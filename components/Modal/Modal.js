import React from "react";
import styles from "./Modal.module.css";

import Button from "@/components/Button/Button"

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.container} ${this.props.open && styles.open}`}>
        <div onClick={this.props.onClose} className={styles.overlay} />
        <div className={styles.content}>
          <div className={styles.modalBody}>{this.props.children}</div>
          <div className={styles.modalAction}>
              <Button onClick={this.props.onClose} type="primary">Tamam</Button>
          </div>
        </div>
      </div>
    );
  }
}
