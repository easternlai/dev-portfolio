import React from "react";
import suzie from '../images/suzie.jpeg';
import bingbing from '../images/bingbing.JPG';
import marty from '../images/marty.JPG';
import buddy from '../images/buddy.JPG';

const AboutMePage = () => {

    const images = [buddy, bingbing, suzie, marty ];
  return (
    <div className="about">
      <div className="text-large">me</div>
      <div className="mb-10 italic">eastern.lai@gmail.com | 415.420.1297</div>
      <div className="mt-20">Originally from Missouri, I have lived up and down California and currently call the SF north bay home.
      When I'm not youtubing tech videos I like to explore new walks and do my best to make sure my little friends are living their best lives.
      </div>
      <div className="about__photos">
        {images.map((image) => <img className="about__photos--photo" src={image}/>)}
      </div>
    </div>
  );
};

export default AboutMePage;
