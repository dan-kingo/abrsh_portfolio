import React from "react";
import "./Works.css";
import works from "../../assets/mywork_data";
import arrowPic from "../../assets/arrow_icon.svg";
const Works = () => {
  return (
    <div className="work-section" id="works">
      <div className="works-heading">
        <h1>My Works</h1>
      </div>
      <div className="work-container">
        {works.map((work, index) => {
          return (
            <div className="work-box" key={index}>
              <img src={work.video} alt="" />
            </div>
          );
        })}
      </div>
      <div className="show-more-container">
        <p>Show More</p>
        <img src={arrowPic} alt="" />
      </div>
    </div>
  );
};

export default Works;
