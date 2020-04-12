import React from "react";
import "./content-section.css";
import PropTypes from "prop-types";

class ContentSection extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="content_section">
        <h2 className="content_section__header">{this.props.title}</h2>
        {this.props.content()}
      </div>
    );
  }
}

export default ContentSection;

ContentSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.func
};
