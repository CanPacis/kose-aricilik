import React from "react";
import styles from "./Contact.module.css";

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

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

        <div className={styles.contactWrapper}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <Input placeholder="İsİm" />
            <Input placeholder="mesaj" type="textarea" />
            <Button type="accent">Gönder</Button>
          </div>
        </div>
      </div>
    );
  }
}
