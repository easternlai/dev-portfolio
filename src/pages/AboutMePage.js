import React from "react";
import suzie from "../images/suzie.jpeg";
import bingbing from "../images/bingbing.JPG";
import marty from "../images/marty.JPG";
import buddy from "../images/buddy.JPG";

const AboutMePage = () => {
  const images = [buddy, bingbing, suzie, marty];
  return (
    <div className="about text-sm">
      <div>
        <span className="bold">contact: </span>
        <span className="mb-10 italic">
          eastern.lai@gmail.com | 415.420.1297
        </span>
      </div>
      <div className="">
        <span className="bold">github: </span>
        <a className="text-x-sm" href="https://github.com/easternlai">
          https://github.com/easternlai
        </a>
      </div>
      <div>
        <span className="bold">linkedin: </span>
        <a className="text-x-sm" href="https://www.linkedin.com/in/eastern-lai-3b05b585/">
          https://www.linkedin.com/in/eastern-lai-3b05b585/
        </a>{" "}
      </div>
      <div className="text-large">me</div>
      <div className="mt-20">
        I try to spend my free time on weekends staying connected with family and
        maintaining friendships that have lasted decades. I also like to explore new walk in different
        neighborhoods with my little friends and do my best to make sure they are living
        their best lives.
      </div>
      <div className="about__photos">
        {images.map((image) => (
          <img className="about__photos--photo" src={image} />
        ))}
      </div>
    </div>
  );
};

export default AboutMePage;
