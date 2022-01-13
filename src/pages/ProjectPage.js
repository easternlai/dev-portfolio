import React from 'react';

const ProjectPage = () => {

    return (
        <div>
        <div className="text-large mb-10">Cultree Project</div>
        <div className="text-med">about </div>
        <div className='ml-15'>Cultree is a multi-tenant, mern application that provides a central web location for office managers and company cultree committee liasons to create event signups, offer swag and gifts via a store, and post company photo galleries with many more features to come! </div>

        <div className="text-med  mt-20">Technologies </div>
        <div className='ml-15 mb-10'><span className="bold">frontend - </span> </div>
        <div className='ml-15 mb-10'><span classNams="bold">backend - </span>  </div>
        <div className='ml-15 mb-10'><span className="bold">devops - </span>Cultree's infrastructure resides in an AWS  Linux EC2 instance that maintains the frontend, backend, mongoDB, and apache containers. Terraform is used to build and destroy the AWS environment and docker compose is use to automate the build and run of the containers.</div>

        </div>
    )
};

export default ProjectPage;