import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {

    return (
        <div className='home'>
            <div className='text-jumbo'>Hello, I'm Eastern.</div>
            <div className="mt-20">I am a versatile systems and network engineer with extensive experience leading projects 
            that have advanced production infrastructures and large corporate environments.</div>
            <div className='mt-20'>Through the years I've always leveraged code wherever possible to improve automation and granularity in my operations.
            This led to a growing curiosity for programming and software development that inspired me to enroll in 
            UC Berkeley's Full Stack Coding Bootcamp.
            </div>
            <div className="mt-20">Attending the bootcamp not only helped expand my understanding of web technologies, I've also been coding for hobby ever since with a goal to some day contribute to open source projects. </div>
            
            <div className="mt-20">Please be sure to check out my <Link to="/projects">webapp</Link>.</div>
            
        </div>
    )
};

export default HomePage;