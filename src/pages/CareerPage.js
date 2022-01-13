import React from "react";

const CareerPage = () => {
  const companies = [
    {
      name: "iRhythm Technologies",
      years: "Aug 2018 to Jan 2021",
      position: "Sr. System Administrator",
      company:
        "A digital healthcare company redefining the way cardiac arrhythmias are clinically diagnosed by combining biosensing technology with cloud-based data analytics.",
      job: "The chief responsibility for this role was the design, development, implementation, integration, automation and improvement of web applications and access management solutions including Single Sign On & Federation, Directory Services, Multifactor Authentication, and Web Access Management.  The position also required working in the infrastructure engineering group to expand and maintain the IT systems environment.",
    },
    {
      name: "endpoint Clinical",
      years: "Jul 2016 to Aug 2018",
      position: "Network Administrator",
      company:
        "An interactive response technology IRT systems and solutions provider that supports the life sciences industry.",
      job: "The central duty of this position was to architect and stabilize the network infrastructure for production and AWS environments.  Additional responsbilities include working in the systems engineering group tasked with the expansion, maintenance, and support of production systems environment.",
    },
    {
      name: "Bently Enterprises",
      years: "Apr 2013 to Jul 2016",
      position: "System Administrator",
      company:
        "A multi-enterprise corporation with operations spanning various industries ranging from commercial real estate to whiskey distilleration.",
      job: "The position involved working in systems administration team responsible for all the companies technologies including maintaining LAMP stack environment and support of internal web services.  Other duties included serving as lead technical resource for network operations, security systems, VoiP services, and conference room technologies.",
    },
  ];

  return (
    <div className="career">
      <div className="text-large mb-10">Work History</div>

      {companies.map((company) => (
        <div className="career__company">
          <div className="heading-3__bold">{company.position}</div>
          <div className="mb-10">
            <span>{company.name} |</span>
            <span className="italic"> {company.years}</span>
          </div>
          <div className="mb-10">
            <span className="bold">My role: </span>
            {company.job}
          </div>
          <div>
            <span className="bold">About {company.name.split(" ")[0]}: </span>
            {company.company}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerPage;
