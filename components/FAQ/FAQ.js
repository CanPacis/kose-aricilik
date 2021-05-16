import React from "react";
import styles from "./FAQ.module.css";

import Question from "@/components/Question/Question";

import Service from "@/service/Service";

export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let language = Service.Language.languages[this.props.language];

    return (
      <div className={styles.container}>
        <h1>{language.faq_full}</h1>
        {this.props.questions.map((question) => (
          <Question key={question[0]} title={question[0]}>
            {question[1]}
          </Question>
        ))}
      </div>
    );
  }
}
