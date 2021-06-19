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
      email: "",
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
    let language = Service.Language.languages[this.props.language];

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
        state.email = "";
        state.message = "";
        state.modal.message = language.alert.sent;
      } else {
        state.modal.message = language.alert.error(result.response);
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

  redirectToWp = () => {
    window.open("https://wa.me/message/5UR4HPFZIQPOK1", "_blank").focus();
  };

  render() {
    let language = Service.Language.languages[this.props.language];

    return (
      <div lang="tr">
        <h1 className={styles.title} id="contact">
          {language.contact}
        </h1>

        <div className={styles.contactWrapper}>
          <div className={styles.left}>
            <span>
              <h2>{language.address.title}</h2>
              <p className={styles.description}>{language.address.content}</p>
            </span>
            <span>
              <h2>{language.phone.title}</h2>
              {language.phone.content.map((phone) => {
                return (
                  <p key={phone.no} className={styles.description}>
                    <b>{phone.label}:</b> {phone.no}
                  </p>
                );
              })}
            </span>
            <div className={styles.wpActionWrapper}>
              <Button fullwidth onClick={this.redirectToWp} type="wp">
                {language.whatsapp}
              </Button>
            </div>
          </div>
          <div className={styles.right}>
            <Input
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
              placeholder={language.name}
            />
            <Input
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
              type="email"
              placeholder={language.email}
            />
            <Input
              onChange={(e) => this.setState({ message: e.target.value })}
              value={this.state.message}
              placeholder={language.message}
              type="textarea"
            />
            <Button
              icon="send_icon"
              disabled={this.state.loading}
              onClick={this.sendMessage}
              type="accent"
            >
              {language.send}
            </Button>
          </div>
        </div>
        <Modal
          language={this.props.language}
          onClose={() => this.handleModalClose()}
          open={this.state.modal.open}
        >
          <p>{this.state.modal.message}</p>
        </Modal>
      </div>
    );
  }
}
