import React from "react";

const CareerPage = () => {
  const companies = [
    {
      name: "iRhythm Technologies",
      years: "Aug 2018 to Jan 2021",
      position: "Sr. Systems Administrator",
      company:
        "A digital healthcare company redefining the way cardiac arrhythmias are clinically diagnosed by combining biosensing technology with cloud-based data analytics.",
      job: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "endpoint Clinical",
      years: "Jul 2016 to Aug 2018",
      position: "Network Administrator",
      company:
        "An interactive response technology IRT systems and solutions provider that supports the life sciences industry.",
      job: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam. At elementum eu facilisis sed odio morbi quis. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Accumsan in nisl nisi scelerisque eu ultrices. Lorem ipsum dolor sit amet consectetur. Feugiat sed lectus vestibulum mattis. Mauris ultrices eros in cursus turpis massa tincidunt dui. Sollicitudin tempor id eu nisl nunc mi. Risus at ultrices mi tempus imperdiet nulla. Diam sollicitudin tempor id eu nisl nunc. Interdum velit laoreet id donec ultrices. Ornare arcu odio ut sem nulla pharetra diam sit amet. Eget felis eget nunc lobortis. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Pulvinar sapien et ligula ullamcorper malesuada. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Quis blandit turpis cursus in. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.",
    },
    {
      name: "Bently Enterprises",
      years: "Apr 2013 to Jul 2016",
      position: "Systems Administrator",
      company:
        "A multi-enterprise corporation with operations spanning various industries ranging from commercial real estate to whiskey distilleration. ",
      job: "Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Eget nunc lobortis mattis aliquam faucibus. Nisl tincidunt eget nullam non nisi est sit. Bibendum neque egestas congue quisque egestas diam in arcu. Sit amet nisl suscipit adipiscing. Amet aliquam id diam maecenas ultricies mi eget. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Risus commodo viverra maecenas accumsan. Velit euismod in pellentesque massa. Congue quisque egestas diam in arcu. Mi eget mauris pharetra et. Diam vel quam elementum pulvinar etiam non quam. Cursus mattis molestie a iaculis at. Justo eget magna fermentum iaculis eu. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Mauris vitae ultricies leo integer malesuada nunc vel. Phasellus vestibulum lorem sed risus ultricies tristique nulla.",
    },
  ];

  return (
    <div className="career">
      <div className="text-large mb-10">Work History</div>

      {companies.map((company) => (
        <div className="career__company">
            <div className="heading-3__bold">{company.name}</div>
            <div className="mb-10"><span>{company.position} |</span><span className="italic"> {company.years}</span></div>
            <div className="mb-10"><span className="bold">My role: </span>{company.job}</div>
            <div><span className="bold">About {company.name.split(" ")[0]}: </span>{company.company}</div>
        </div>
      ))}
    </div>
  );
};

export default CareerPage;
