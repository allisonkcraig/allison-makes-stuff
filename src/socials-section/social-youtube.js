import React from "react";
import "./socials-section.css";

class SocialYoutube extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="social_youtube socials_section__social">
        <h3 className="social_youtube__header">check out videos</h3>
        <div>
          <iframe
            width="224"
            height="126"
            src="https://www.youtube.com/embed/Z0rYI0Qy1HU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default SocialYoutube;
