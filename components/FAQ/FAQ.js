import React from "react";
import styles from "./FAQ.module.css";

import Question from "@/components/Question/Question";

import questions from "./questions";
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
        {questions.length > 0 ?
        questions.map((question) => (
          <Question key={question[this.props.language].title} title={question[this.props.language].title}>
            {question[this.props.language].content}
          </Question>
        ))
        :
        <h2>{language.no_questions_yet}</h2>
        }
      </div>
    );
  }
}
