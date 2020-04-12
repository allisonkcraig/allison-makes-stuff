import React from "react";
import "./featured-projects.css";
import FeaturedProject from "./featured-project";

class FeaturedProjects extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="featured_projects content_section">
        <h2 className="featured_projects__header">featured projects.</h2>
        <div class="featured_projects__contents">
          <FeaturedProject projId="oxfordshoes" />
          <FeaturedProject projId="oxfordshoes" />
          <FeaturedProject projId="oxfordshoes" />
        </div>
      </div>
    );
  }
}

export default FeaturedProjects;
