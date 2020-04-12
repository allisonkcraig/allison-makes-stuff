import React from "react";
import "./socials-section.css";
import SocialYoutube from "./social-youtube";
import SocialInstagram from "./social-instagram";
import ContentSection from "../content-section/content-section";

class SocialsSection extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  renderContent() {
    return (
      <div className="socials_section__content">
        <SocialInstagram />
        <SocialYoutube />
      </div>
    );
  }

  render() {
    return (
      <ContentSection
        title="where you can find me."
        content={this.renderContent}
      />
    );
  }
}

export default SocialsSection;
