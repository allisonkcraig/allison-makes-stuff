import React from "react";
import "./socials-section.css";

class SocialInstagram extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="social_instagram socials_section__social">
        <h3 className="social_instagram__header">check out photos</h3>
        <div>{/* add photo grid here */}</div>
      </div>
    );
  }
}

export default SocialInstagram;
