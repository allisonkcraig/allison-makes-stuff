import React from "react";
import "./featured-projects.css";
import PropTypes from "prop-types";
import OxfordShoes from "../assets/oxford-shoes.png";

const PROJECTS = {
  oxfordshoes: {
    img: OxfordShoes,
    title: "Leather Oxford Shoes"
  }
};
class FeaturedProject extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className="featured_project">
        <div
          className="featured_project__img_bg"
          style={{ backgroundImage: `url(${PROJECTS[this.props.projId].img})` }}
        ></div>
        <span className="featured_project__title">
          {PROJECTS[this.props.projId].title}
        </span>
      </div>
    );
  }
}

export default FeaturedProject;

FeaturedProject.propTypes = {
  projId: PropTypes.string
};
