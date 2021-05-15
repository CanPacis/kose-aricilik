import React from "react";
import styles from "./Contact.module.css";

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import Service from "@/service/Service";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      message: "",
      loading: false,
      modal: {
        open: false,
        message: "",
      },
    };
  }

  validateString(string) {
    return string.trim().length > 0;
  }

  sendMessage = async () => {
    let state = this.state;
    let { name, message } = state;
    let validName = this.validateString(name);
    let validMessage = this.validateString(message);

    if (validName && validMessage) {
      this.setState({ loading: true });
      let result = await Service.SendMail(this.state);
      this.setState({ loading: false });
      state.modal.open = true;
      if (result.status === 200) {
        state.name = "";
        state.message = "";
        state.modal.message = "Mesaj başarıyla gönderildi.";
      } else {
        state.modal.message = `Mesaj gönderilirken bir hata oluştu. ${result.response}.`;
      }
      this.setState(state);
    }
  };

  handleModalClose = () => {
    let state = this.state;

    state.modal.open = false;
    state.modal.message = "";
    this.setState(state);
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
        <Modal
          onClose={() => this.handleModalClose()}
          open={this.state.modal.open}
        >
          <p>{this.state.modal.message}</p>
        </Modal>
      </div>
    );
  }
}
