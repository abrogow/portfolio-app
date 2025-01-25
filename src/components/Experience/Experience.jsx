import React from "react";
import "./Experience.css";
import ExperienceItem from "./ExperienceItem";

const items = [
  {
    company: "Nordcloud, an IBM Company",
    position: "FULLSTACK ENGINEER",
    date: "Jun 2022 - Present",
    projects: [
      {
        title: "PROJECT: Prisma for BP",
        description: "Project for petrol stations analysis and management",
        technologies: "TypeScript (React), AWS (Amplify, S3), Git, Scrum, Figma",
      },
      {
        title: "PROJECT: Lubrication Cloud for SKF",
        description: "Project for lubrication points management",
        technologies: "TypeScript (React, NextJS), AWS (Lambda, Aurora), AWS CDK, Git, Scrum",
      },
      {
        title: "PROJECT: Managed Cloud",
        description: "Customer monitoring system in the cloud",
        technologies: "Python, TypeScript (React), AWS (Lambda, S3, PostgreSQL), AWS CDK, Git, Scrum",
      },
    ]
  },
  {
    company: "HL Tech",
    position: "SOFTWARE ENGINEER",
    date: "Jul 2019 - Jun 2022",
    projects: [
      {
        title: "PROJECT: Pension Funds Gateway",
        description: "Proxy between applications by two other companies. It processed and exchanged information executed by pension funds via REST and SFTP server",
        technologies: "Java, Groovy, Maven, Oracle Database, Git, Scrum",
      },
      {
        title: "PROJECT: Payments Out",
        description: "Product for collecting and managing data about new clients by analysts and advisors",
        technologies: "Java, Groovy, Maven, ActiveMQ, Oracle Database, Git, Scrum",
      },
      {
        title: "PROJECT: Pension Transfer Dashboard",
        description: "Product for collecting and managing data about new clients by analysts and advisors.",
        technologies: "Java, Groovy, Maven, Oracle Database, Git, Scrum",
      },
    ]
  },
  {
    company: "Quality Business Software",
    position: "SOFTWARE ENGINEER",
    date: "Jul 2018 - Apr 2019",
    projects: [
      {
        description: "Desktop and web applications development for medical facility management",
        technologies: "Java, Git, SVN",
      },
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>
      { items.length > 0 && (
        <div className="experience__container">
            {items.map((data, idx) => (
                <ExperienceItem data={data} key={idx} />
            ))}
        </div>
    )}
    </section>
  );
};

export default Experience;
