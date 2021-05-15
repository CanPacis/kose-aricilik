import React from "react";
import styles from "./Contact.module.css";

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Service from "@/service/Service";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      message: "",
      loading: false,
    };
  }

  validateString(string) {
    return string.trim().length > 0;
  }

  sendMessage = async () => {
    let { name, message } = this.state;
    let validName = this.validateString(name);
    let validMessage = this.validateString(message);

    if (validName && validMessage) {
      this.setState({ loading: true });
      let result = await Service.SendMail(this.state);
      this.setState({ loading: false });

      if (result.status === 200) {
        alert("Mesaj başarıyla gönderildi.");
      } else {
        alert(`Mesaj gönderilirken bir hata oluştu. ${result.response}.`);
      }
    }
  };

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
            <Input
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
              placeholder="İsİm"
            />
            <Input
              onChange={(e) => this.setState({ message: e.target.value })}
              value={this.state.message}
              placeholder="mesaj"
              type="textarea"
            />
            <Button
              icon="send_icon"
              disabled={this.state.loading}
              onClick={this.sendMessage}
              type="accent"
            >
              Gönder
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
