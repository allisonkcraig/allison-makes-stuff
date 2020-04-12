import React from "react";
import "./socials-section.css";
import SocialYoutube from "./social-youtube";
import SocialInstagram from "./social-instagram";

class SocialsSection extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="socials_section content_section">
        <h2 className="socials_section__header">where you can find me.</h2>
        <div className="socials_section__content">
          <SocialInstagram />
          <SocialYoutube />
        </div>
      </div>
    );
  }
}

export default SocialsSection;
