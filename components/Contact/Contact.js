import React from "react";
import styles from "./Contact.module.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className={styles.title} id="contact">
          İletİşİm
        </h1>
      </div>
    );
  }
}
