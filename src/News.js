import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import i18n from "./i18n";

class News extends Component {
  state = { language: "en" };
  switchLanguage = () => {
    if (this.state.language === "en") {
      i18n.changeLanguage("ru");
      this.setState({
        language: "ru"
      });
    } else {
      i18n.changeLanguage("en");
      this.setState({
        language: "en"
      });
    }
  };
  render() {
    const { t } = this.props;

    return (
      <div>
        <button onClick={this.switchLanguage}>Switch Language</button>
        <h1>{t("news.title")}</h1>
      </div>
    );
  }
}

export default withTranslation()(News);
