import React from "react";
import FeaturedProjects from "../featured-projects/featured-projects";
import SocialsSection from "../socials-section/socials-section";
import "./home-page.css";
import StickyFooter from "../footer/footer";

class HomePage extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="homepage">
        <div className="homepage__header">
          <h1 className="homepage__header_text">Allison Makes Stuff</h1>
          <h3 className="homepage__header_subtext">
            crafts • sewing • shoemaking
          </h3>
        </div>
        <div className="homepage__contents">
          <FeaturedProjects />
          <SocialsSection />
        </div>
        <StickyFooter />
      </div>
    );
  }
}

export default HomePage;
