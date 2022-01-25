import React from "react";
import cultree from "../images/cultree.png";

const ProjectPage = () => {
  return (
    <div className="projects-page">
      <div className="text-large mb-10">Cultree Project</div>
      <div className="text-med">about </div>
      <div className="projects-page__wrapper">
        <div className="ml-15">
          <div>
            <p className="mb-5">Cultree is a full stack MERN application that I have been developing to gain experience working with larger codebases and familiarize myself with different cloud deployment implementations.</p>  
            <p>This multi-tenant application includes a signup board, photo album, store, admin portal, and many more features to come.</p>    

          </div>
          <div className="mt-20">
            <a
              target="_blank"
              href="http://ec2-34-212-89-241.us-west-2.compute.amazonaws.com/demologin/dscott@demo-co.com/Password123!"
            >
              demo login
            </a>
          </div>

          <div className></div>
        </div>
        <img src={cultree} className="projects-page__wrapper--image" />
      </div>

      <div className="text-med  mt-20">Technologies </div>
      <div className="ml-15 mb-10">
        <span className="bold">frontend - </span>Reactjs, SCSS, Redux, Socketio, Hooks
      </div>
      <div className="ml-15 mb-10">
        <span className="bold">backend - </span>Nodejs, MongoDB, Express, AWS S3
      </div>
      <div className="ml-15 mb-10">
        <span className="bold">devops - </span> Linux, Nginx, AWS, Terraform, Ansible, Docker, Kubernetes

      </div>
      <div className="ml-15 mb-10">
        <span className="bold">github - </span> <a href="https://github.com/easternlai/cultree" target="_blank">https://github.com/easternlai/cultree</a>
      </div>

    </div>
  );
};

export default ProjectPage;
