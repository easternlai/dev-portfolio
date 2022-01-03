import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {

    return (
        <div className='home'>
            <div className='text-jumbo'>Hello, I'm Eastern.</div>
            <div className="mt-20">I am a versatile systems and network engineer with extensive experience leading projects 
            that have advanced production infrastructures and large corporate environments.</div>
            <div className='mt-20'>Through the years I've leveraged code wherever possible to promote automation and granularity in my operations.
            I developed a growing joy and curiosity for programming that inspired me to enroll in 
            UC Berkeley's Full Stack Coding Bootcamp.
            </div>
            <div className="mt-20">Since completing the program in 2020 I have worked to improve as a developer each and every day. 
            Please be sure to demo my <Link to="/projects">webapp</Link>.</div>
            
        </div>
    )
};

export default HomePage;