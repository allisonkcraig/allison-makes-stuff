import React from "react";
import "./sticky-footer.css";

class StickyFooter extends React.PureComponent {
  render() {
    return (
      <div className="sticky_footer">
        <span className="sticky_footer__comment">
          PS, I also made this website!
        </span>
      </div>
    );
  }
}

export default StickyFooter;
