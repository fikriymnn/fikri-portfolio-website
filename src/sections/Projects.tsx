"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
    const projectsData = [
        {
            image: "/wwtp.png",
            projectName: "WWTP Simulator",
            projectLink: "",
            projectDescription:
                "The Waste Water Treatment Plant Simulator (WWTP) web based is develop with Unity 3D and the actual equations.",
            projectTech: [
                "Unity 3D",
                "C#",
                "Firebase",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/telinfra.png",
            projectName: "Telkom Infra Spare Management",
            projectLink: "https://telkominfra-f7a85.web.app/",
            projectDescription:
                "This web application is useful for managing cable stock and spare kits available at the Telkom Infra depot",
            projectTech: [
                "Flutter",
                "Dart",
                "Express",
                "MongoDB",
                "Firebase"
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "https://telkominfra-f7a85.web.app/",
            },
        },
        {
            image: "/indolakto.png",
            projectName: "Inventory Management System",
            projectLink: "",
            projectDescription:
                "This web application is useful for managing inventory and control the health and peformance of instrument.",
            projectTech: [
                "Flutter",
                "Firebase",
                "Dart",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/erps.png",
            projectName: "Enterprises Resource Planning",
            projectLink: "",
            projectDescription:
                "Multiplatform ERP is an integrated system used by companies to integrate all company resources. The use of an ERP system will facilitate planning and management of company resources.",
            projectTech: [
                "Next Js",
                "Flutter",
                "Node.js",
                "Firebase",
                "MongoDB",
                "Express",
                "TypeScript",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/dfw.png",
            projectName: "Digital Finances Website",
            projectLink: "",
            projectDescription:
                "A website that functions as an online loan with collateral for goods.",
            projectTech: [
                "Next Js",
                "Node.js",
                "Firebase",
                "MongoDB",
                "Express",
                "TypeScript",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/econs.png",
            projectName: "E-Conseling App for School",
            projectLink: "",
            projectDescription:
                "A web-based E-Counseling application that is useful for student consultation services to BK teachers. Because this application has a chat room feature.",
            projectTech: [
                "Laravel 6",
                "MySQL",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/qun.png",
            projectName: "Qun Films & Studios Website",
            projectLink: "",
            projectDescription:
                "This creative website is made with a fairly complex design. One example of a creative website that we have ever created is for a Production House company as shown in the picture below. In addition to a fairly complex design, this website also has a variety of animations.",
            projectTech: [
                "Flutter",
                "Dart",
                "Firebase",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "https://fayaqun.com",
            },
        },
        {
            image: "/rms.png",
            projectName: "Restaurant Management System",
            projectLink: "",
            projectDescription:
                "Restaurant Management System (RMS) application is useful for managing Restaurant Management.",
            projectTech: [
                "CodeIgniter 3",
                "MySQL",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/lms.png",
            projectName: "Learning Management System",
            projectLink: "",
            projectDescription:
                "Mobile-based Learning Management System (LMS) application. This application has been applied to a private tutoring institution.",
            projectTech: [
                "Android Studio",
                "Firebase",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/pos.png",
            projectName: "Point of Sales",
            projectLink: "",
            projectDescription:
                "The point of sales application is built for multi-platform.",
            projectTech: [
                "Android Studio",
                "Next Js",
                "Firebase",
                "Node Js",
                "TypeScript",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/sta.png",
            projectName: "Sentiment Tweet Analysis",
            projectLink: "",
            projectDescription:
                "This web-based application is used to analyze negative and positive posts in Twitter using 3 methods: Naive Bayes, Support Vector Machine and Convolutional Neural Network.",
            projectTech: [
                "Python",
                "Flask",
                "Tweepy API",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/pcwpl.png",
            projectName: "Palm Lines Personality Check",
            projectLink: "",
            projectDescription:
                "This application is made for mobile platforms. This app has the feature detects a person's personality through the hand line with the naive bayes method and Grey Level Co-occurrence Matrix (GLCM).",
            projectTech: [
                "Python",
                "Open CV",
                "Android Studio",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/alcohol.png",
            projectName: "Chemistry Game: Quiz",
            projectLink: "",
            projectDescription:
                "This game is made for student learning, to get to know structure of alcohol compounds.",
            projectTech: [
                "Unity 2D",
                "C#",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/rap.png",
            projectName: "Multi-company Management App",
            projectLink: "",
            projectDescription:
                "This muti-platform app is made for manage and control between the main company and sub company.",
            projectTech: [
                "Flutter",
                "Dart",
                "Firebase"
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/fborder.png",
            projectName: "Food & Beverages Order App",
            projectLink: "",
            projectDescription:
                "This mobile and web app is made for custumers who want to order food & beverages. The Cafe's Owner can manage the product, custumer data and cashflow.",
            projectTech: [
                "Flutter",
                "Dart",
                "Firebase"
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/ask.png",
            projectName: "ASK (Consumer Complaints App)",
            projectLink: "",
            projectDescription:
                "This mobile app is made for consumers from any company who want to complaint but they get bad service from Customer Service (CS). This app is have social media featured like instagram and twitter. So the consumers can posting any complaints in this app and admin will follow up complaints to the company.",
            projectTech: [
                "Flutter",
                "Dart",
                "Firebase"
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/edufarm.png",
            projectName: "Farmer Tower Defense",
            projectLink: "",
            projectDescription:
                "This game is built with artificial intelligence applied to enemy objects for pathfinder. In addition to these features, this application has other features.",
            projectTech: [
                "Unity 2D",
                "C#",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/alcohol2.png",
            projectName: "Structure of Alcohol Compounds Simulator",
            projectLink: "",
            projectDescription:
                "This game is made for student learning, in order to structure of alcohol compounds.",
            projectTech: [
                "Unity 2D",
                "C#",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/endless.png",
            projectName: "2D Endless Runner Game",
            projectLink: "",
            projectDescription:
                "This game is made for mobile platforms (Android & IOS).",
            projectTech: [
                "Unity 2D",
                "C#",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
        {
            image: "/mychem.png",
            projectName: "Structure of Aldehid Compounds Simulator",
            projectLink: "",
            projectDescription:
                "This game is made for student learning, in order to structure of aldehydes.",
            projectTech: [
                "Unity 2D",
                "C#",
            ],
            projectExternalLinks: {
                github: "",
                externalLink: "",
            },
        },
    ];
    return (
        <div className="projects" id="work">
            <motion.div
                className="title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                }}
            >
                <h2>Some Things I’ve Built</h2>
            </motion.div>
            <div className="projects-container">
                {projectsData.map(
                    ({
                        image,
                        projectDescription,
                        projectLink,
                        projectExternalLinks,
                        projectName,
                        projectTech,
                    }) => {
                        return (
                            <motion.div
                                className="project"
                                key={projectName}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                variants={{
                                    visible: { opacity: 1, y: -50 },
                                    hidden: { opacity: 0, y: 0 },
                                }}
                            >
                                <div className="project-image">
                                    <div className="project-image-overlay"></div>
                                    <div className="project-image-container">
                                        <Image src={image} fill alt={projectName} quality={100} />
                                    </div>
                                </div>
                                <div className="project-info">
                                    <p className="project-info-overline">Featured Project</p>
                                    <h3 className="project-info-title">{projectName}</h3>
                                    <div className="project-info-description">
                                        <p>{projectDescription}</p>
                                    </div>
                                    <ul className="project-info-tech-list">
                                        {projectTech.map((tech) => (
                                            <li className="project-info-tech-list-item" key={tech}>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="project-info-links">
                                        <li className="project-info-links-item">
                                            <Link
                                                href={projectExternalLinks.github}
                                                className="project-info-links-item-link"
                                            >
                                                <FiGithub />
                                            </Link>
                                        </li>
                                        <li className="project-info-links-item">
                                            <Link
                                                href={projectExternalLinks.externalLink}
                                                className="project-info-links-item-link"
                                            >
                                                <FiExternalLink />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default Projects;