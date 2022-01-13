import React from "react";
import cultree from "../images/cultree.png";

const ProjectPage = () => {
  return (
    <div className="projects-page">
      <div className="text-large mb-10">Cultree Project</div>
      <div className="text-med">about </div>
      <div className="projects-page__wrapper">
      <div className="ml-15">
        Cultree is a multi-tenant, mern application to helps companies improve
        their employee engagement with event signups, swag store, and company
        photo galleries with many more features to come!
      </div>
      <img src={cultree} className="projects-page__wrapper--image"/>
      </div>


      <div className="text-med  mt-20">Technologies </div>
      <div className="ml-15 mb-10">
        <span className="bold">frontend - </span>The frontend was built with
        ReactJs and uses SCSS for styling. Redux is used to manage the global
        state and the useReducer and useState hooks are used for component state
        management as needed.
      </div>
      <div className="ml-15 mb-10">
        <span className="bold">backend - </span>

      </div>
      <div className="ml-15 mb-10">
        <span className="bold">devops - </span>
        Cultree's infrastructure resides in an AWS Linux EC2 instance that
        maintains  four docker containers: Node:Buster for the frontend, Node: Alpine for the backend, mongoDB, and Apache.
        Terraform is used to build and destroy the AWS environment and docker
        compose is use to automate the build and run of the containers.
      </div>
    </div>
  );
};

export default ProjectPage;
