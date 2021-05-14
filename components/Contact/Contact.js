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
          <div className={styles.left}>
            <span>
              <h2>Adres</h2>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                distinctio quia odit. Enim quibusdam eaque officia saepe dolor,
                adipisci atque minus non ratione id, incidunt qui odio
                recusandae hic sit!
              </p>
            </span>
            <span>
              <h2>Telefon</h2>
              <p className={styles.description}>+90 555 555 55 55</p>
            </span>
          </div>
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
