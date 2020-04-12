import React from "react";
import "./footer.css";

class StickyFooter extends React.PureComponent {
  render() {
    return (
      <div className="sticky_footer">
        <a
          className="sticky_footer__comment"
          href="https://github.com/allisonkcraig/allison-makes-stuff"
          target="_blank"
          rel="noopener noreferrer"
        >
          PS, I also made this website!
        </a>
      </div>
    );
  }
}

export default StickyFooter;
