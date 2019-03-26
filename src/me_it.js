export const Me_Info = {
    name: "Diego",
    surname: "Tonini",
    age: 25,
    birthday: "May 1, 1993",
    location: "Via Tanari 23 Bologna",
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
            period: "2013-201",
            //resultTitle: "Degree in computer engineering at Cesena"
        }
    ]
}

export const Experiences = [
    {
        startDate: "November 2016",
        endDate: "Present",
        jobTitle: "Front-End Developer",
        agency: "Yoox-Net-A-Porter",
        location: "Zola Predosa, Bologna, Italia",
        skillsTags: ["html","css","scss","js","es6+","c#",".net","jest"],
        shortDescription: "Maintenance of 4 important e-commerce sites",
        longDescription: "I deal mainly with the maintenance of projects developed with .NET stack with js and css front-end side. The difficulty lies in the dependencies of other teams and therefore the coordination with them. I often develop in TDD and try to create internal tools if necessary",
        projects: [
            {
                name: "Moncler",
                link: "www.moncler.com",
                description: "Maintenance and platform migration (.net)"
            },
            {
                name: "Missoni",
                link: "www.missoni.com",
                description: "Maintenance and accessibility (.net)"
            },
            {
                name: "Stone Island",
                link: "www.stoneisland.com",
                description: "Maintenance (.net)"
            },
            {
                name: "Stoneisland30",
                link: "www.stoneisland30.com",
                description: "Release (react gatsby redux)"
            },
            {
                name: "internal tool for developer"
            }
        ]
    },
    {
        startDate: "May 2018",
        endDate: "December 2018",
        jobTitle: "Technical tutor for a school project",
        agency: "Associazione Golinelli - Yoox-Net-A-Porter",
        location: "Bologna, Italia",
        skillsTags: ["react","css","es6+"],
        shortDescription: "Technical tutor",
        longDescription: "I joined the boys in the realization of a school project aimed at a realization by their school. The main task in addition to programming with the kids was to make them autonomous in just 4 months and explain some concepts of programming",
        projects: [
            {
                name: "Water Comminity",
                description: "Web-app built with react to handle the management and clean of a wc in a smart way"
            }
        ]
    },
    {
        startDate: "July 2016",
        endDate: "November 2016",
        jobTitle: "Android Developer",
        agency: "PianetaItalia.com",
        location: "Rimini, Italy",
        shortDescription: "Realization from scratch of native android application",
        skillsTags: ["java","android-studio"]
    },
    {
        startDate: "April 2016",
        endDate: "June 2016",
        jobTitle: "Android Developer (Internship)",
        agency: "PianetaItalia.com",
        location: "Rimini, Italy",
        shortDescription: "Realization from scratch of native android application",
        skillsTags: ["java","android-studio"]
    }
]

export const Skills = [
    { tag: "c#", value: 8 },
    { tag: ".net", value: 7 },
    { tag: "js", value: 7 },
    { tag: "react", value: 7 },
    { tag: "redux", value:7 },
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
    { tag: "someThingOfNew-please", value : 7}
]

export const Projects = [
    { name: "react-imagezoomable", url: "https://bit.ly/2S2vSUE" , description: "a performing library for display a larger image zoom layer without change ratio" },
    { name: "adflyroboTOR", url: "https://bit.ly/2UR3Wol" , description: "an experiment with tor network and test automation to click a banner, changing ip every time" },
    { name: "Musicat", url: "https://bit.ly/2CklG48" , description: "Good music player for android with unique feature like bubble (like fb) and streaming server listening" },
    { name: "spending-division", url: "https://bit.ly/2EBRi86" , description: "a react application built for make easy the process of divide a spending when you live with other people" },
]


export default Me_Info;