export const Me_Info = {
  name: "Diego",
  surname: "Tonini",
  age: 25,
  birthday: "May 1, 1993",
  location: "Rimini",
  phone: "+39 3891883138",
  email: "diego.tonini93@gmail.com",
  linkedin: "https://bit.ly/2C9VQQi",
  github: "https://bit.ly/2QDoguY",
  schools: [
    {
      name: "Certificate in Computer Science at Itis Valturio, Rimini",
      period: "2009-2013",
      //resultTitle: "Certificate in Computer Science at Itis Valturio, Rimini"
    },
    {
      name: "Degree in computer engineering at Cesena",
      period: "2013-2016",
      //resultTitle: "Degree in computer engineering at Cesena"
    },
  ],
  coolThings: [
    "Built from scratch a complete job section on company site which able HR team to handle/create/edit jobs application with also confirmation emails",
    "Setup pipelines for each pullrequest in my company projects (easy but with a lot of value)",
    "Try to create an automatic job to sync our CMS (storybook) with specific S3 bucket, avoiding paying much money for the same feature",
    "Created an SDK for company site and dashboards and maintained as npm package. It use a open api schema for endpoint and provide an easy method to handle authentication and expired tokens",
    "Setup a lot of e2e tests espacially one for a killer feature mocking HID devices",
    "Repacked an old exported create-react-app project",
    "Migrated an obsolete project (js + handlebars + jinja-s) used to build emails into new one with better development experience in mind (react-mail)",
  ],
};

export const Experiences = [
  {
    startDate: "January 2020",
    endDate: "Present",
    jobTitle: "Senior Front-End Developer",
    agency: "Conio srl",
    location: "Milano, Italia",
    skillsTags: [
      "bitcoin",
      "crypto",
      "react",
      "graphQL",
      "less",
      "typescript+",
      "react-apollo",
      "typescript",
    ],
    shortDescription:
      "Responsible for all frontend apps. This includes some internal and external backoffices, company site and custom emails.",
    longDescription: `
      - Lead of company site (full NextJS  + TS + Storyblock cms, hosted with Vercel).
      <br/>- Lead of B2B backoffices used by Conio and partner (React + TS + GraphQL + apollo + cypress).
      <br/>- Creation of tools to increase productivity by automating tasks (Node js).
      <br/>- Use of HSM keys in the browser running custom firmware to resolve multipart-sign process.
      <br/>- Maintenance of responsive transactionals emails (custom gulp.js project).
      <br/>- Drink a good beers with colleagues in the evening, and try to explain to new colleagues that crypto will be the future.`,
    projects: [
      {
        name: "Company Site",
        link: "https://www.conio.com/",
        description: "Frontend release",
      },
    ],
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQF68-WEFB0KLg/company-logo_100_100/company-logo_100_100/0/1697810707337/conio_logo?e=1749686400&v=beta&t=CfaWisxYWjo85D94SeTQPI_w2uv_v5DaIDPLorpMesE",
  },
  {
    startDate: "April 2019",
    endDate: "December 2019",
    jobTitle: "Front-End Developer",
    agency: "Abstract",
    location: "Bologna, Italia",
    skillsTags: [
      "react",
      "vue",
      "js",
      "graphQL",
      "less",
      "sass",
      "typescript+",
      "redis",
      "WCS",
    ],
    shortDescription:
      "development and release of applications installed in fairs and physical stores on behalf of Luxottica",
    longDescription:
      "- I deal mainly with the maintenance of projects developed with React. The sites are formed by an ui project and an api project. The first one is developed in react and grapql and the second one is developed in express + typescript + redis. The sites are developed for the totem used in a Luxottica brands stores",
    projects: [
      {
        name: "Rayban (e-commerce)",
        link: "https://www.ray-ban.com/italy",
        description: "Frontend release",
      },
      {
        name: "Rayban (totem app)",
        link: "https://www.rbemea.instore.oakley.com/rb/10523/it-IT",
        description: "Maintenance",
      },
      {
        name: "Salmoiraghi & Vigano (totem app)",
        link: "https://www.svemea-dev.instore.oakley.com/sv/10029/it-IT",
        description: "Maintenance",
      },
    ],
    logoUrl:
      "https://media.licdn.com/dms/image/v2/C4D0BAQHcVNqY2kDhiQ/company-logo_100_100/company-logo_100_100/0/1677590776638/abstract_logo?e=1749686400&v=beta&t=uUc9Oc-tBeHCnzm4e5CEkNYHK9Spd2DvMAp0-2Q2NaU",
  },
  {
    startDate: "November 2016",
    endDate: "April 2019",
    jobTitle: "Front-End Developer",
    agency: "Yoox-Net-A-Porter",
    location: "Zola Predosa, Bologna, Italia",
    skillsTags: ["html", "css", "scss", "js", "es6+", "c#", ".net", "jest"],
    shortDescription: "Maintenance of 4 important e-commerce sites",
    longDescription:
      "I deal mainly with the maintenance of projects developed with .NET stack with js and css front-end side. The difficulty lies in the dependencies of other teams and therefore the coordination with them. I often develop in TDD and try to create internal tools if necessary",
    projects: [
      {
        name: "Moncler",
        link: "www.moncler.com",
        description: "Maintenance and platform migration (.net)",
      },
      {
        name: "Missoni",
        link: "www.missoni.com",
        description: "Maintenance and accessibility (.net)",
      },
      {
        name: "Stone Island",
        link: "www.stoneisland.com",
        description: "Maintenance (.net)",
      },
      {
        name: "Stoneisland30",
        link: "www.stoneisland30.com",
        description: "Release (react gatsby redux)",
      },
      {
        name: "internal tool for developer",
      },
    ],
    logoUrl:
      "https://media.licdn.com/dms/image/v2/C560BAQHEycdf5lQRrA/company-logo_100_100/company-logo_100_100/0/1631341052696?e=1749686400&v=beta&t=SCf7CXiH7TAqwpfYKDM5koH242FPhO0PZHUa8Aabmo0",
  },
  {
    startDate: "May 2018",
    endDate: "December 2018",
    jobTitle: "Technical tutor for a school project",
    agency: "Associazione Golinelli - Yoox-Net-A-Porter",
    location: "Bologna, Italia",
    skillsTags: ["react", "css", "es6+"],
    shortDescription: "Technical tutor",
    longDescription:
      "I joined the boys in the realization of a school project aimed at a realization by their school. The main task in addition to programming with the kids was to make them autonomous in just 4 months and explain some concepts of programming",
    projects: [
      {
        name: "Water Comminity",
        description:
          "Web-app built with react to handle the management and clean of a wc in a smart way",
      },
    ],
  },
  {
    startDate: "July 2016",
    endDate: "November 2016",
    jobTitle: "Android Developer",
    agency: "PianetaItalia.com",
    location: "Rimini, Italy",
    shortDescription: "Realization from scratch of native android application",
    skillsTags: ["java", "android-studio"],
  },
  {
    startDate: "April 2016",
    endDate: "June 2016",
    jobTitle: "Android Developer (Internship)",
    agency: "PianetaItalia.com",
    location: "Rimini, Italy",
    shortDescription: "Realization from scratch of native android application",
    skillsTags: ["java", "android-studio"],
  },
];

export const Skills = [
  { tag: "typescript", value: 7 },
  { tag: "js", value: 7 },
  { tag: "next js", value: 7 },
  { tag: "react", value: 7 },
  { tag: "vue", value: 7 },
  { tag: "redux", value: 7 },
  { tag: "c#", value: 8 },
  { tag: ".net", value: 7 },
  { tag: "java", value: 7 },
  { tag: "es6+", value: 7 },
  { tag: "css", value: 7 },
  { tag: "scss", value: 7 },
  { tag: "react-js", value: 7 },
  { tag: "firabse", value: 7 },
  { tag: "accessibility DOM", value: 7 },
  { tag: "node", value: 7 },
  { tag: "gulp", value: 7 },
  { tag: "x-browser", value: 7 },
  { tag: "git", value: 7 },
  { tag: "gatsby-js", value: 7 },
  { tag: "jquery", value: 7 },
  { tag: "oop", value: 7 },
  { tag: "typescript", value: 6 },
  { tag: "graphQL", value: 7 },
  { tag: "redis", value: 7 },
  { tag: "styled-component", value: 7 },
  { tag: "someThingOfNew-please", value: 7 },
];

export const Projects = [
  {
    name: "react-use-zendesk",
    url: "https://www.npmjs.com/package/react-use-zendesk",
    description: "React Zendesk Web Widget integration written in typescript.",
  },
  {
    name: "react-imagezoomable",
    url: "https://bit.ly/2S2vSUE",
    description:
      "a performing library for display a larger image zoom layer without change ratio",
  },
  {
    name: "adflyroboTOR",
    url: "https://bit.ly/2UR3Wol",
    description:
      "an experiment with tor network and test automation to click a banner, changing ip every time",
  },
  {
    name: "Musicat",
    url: "https://bit.ly/2CklG48",
    description:
      "Good music player for android with unique feature like bubble (like fb) and streaming server listening",
  },
  {
    name: "spending-division",
    url: "https://bit.ly/2EBRi86",
    description:
      "a react application built for make easy the process of divide a spending when you live with other people",
  },
  {
    name: "gianni-accordion-js",
    url: "https://github.com/multivoltage/gianni-accordion-js",
    description:
      "a perfomance pure js accordion developed based with accessibility",
  },
];

export default Me_Info;
