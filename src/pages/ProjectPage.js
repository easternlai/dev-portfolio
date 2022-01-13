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
            Cultree is a multi-tenant, mern application to helps companies
            improve their employee engagement with event signups, swag store,
            and company photo galleries with many more features to come!
          </div>
          <div className="mt-20">
            <a
              target="_blank"
              href="http://ec2-34-221-182-244.us-west-2.compute.amazonaws.com/demologin/dscott@demo-co.com/Password123!"
            >
              Demo Cultree as Admin
            </a>
          </div>

          <div className></div>
        </div>
        <img src={cultree} className="projects-page__wrapper--image" />
      </div>

      <div className="text-med  mt-20">Technologies </div>
      <div className="ml-15 mb-10">
        <span className="bold">frontend - </span>reactjs, scss, redux, socketio,
        react hooks (useState, useReducer, useRef, useEffect).
      </div>
      <div className="ml-15 mb-10">
        <span className="bold">backend - </span>nodejs, mongodb, express,
        socketio, aws s3
      </div>
      <div className="ml-15 mb-10">
        <span className="bold">devops - </span> linux, aws (ec2, s3, vpc),
        terraform, docker containerization, nginx
      </div>
      <div className="ml-15 mb-10">
        <span className="bold">github - </span> <a href="https://github.com/easternlai/cultree" target="_blank">https://github.com/easternlai/cultree</a>
      </div>

    </div>
  );
};

export default ProjectPage;
