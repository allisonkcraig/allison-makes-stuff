import React from "react";
import "./featured-projects.css";
import FeaturedProject from "./featured-project";
import ContentSection from "../content-section/content-section";

class FeaturedProjects extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  renderContent() {
    return (
      <div>
        <div class="featured_projects__contents">
          <FeaturedProject projId="oxfordshoes" />
          <FeaturedProject projId="oxfordshoes" />
          <FeaturedProject projId="oxfordshoes" />
        </div>
        <div class="featured_projects__footer">
          <a href="">see all</a>
        </div>
      </div>
    );
  }
  render() {
    return (
      <ContentSection title="featured projects." content={this.renderContent} />
    );
  }
}

export default FeaturedProjects;
