"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

function Experience() {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const transformSelected = () => {
            const underline = document.querySelector<HTMLElement>(".underline");
            underline!.style.top = `${selected * 2.5}rem`;
        };
        transformSelected();
    }, [selected])


    const experiences = [
        {
            name: "Erudev Studio",
            role: "Front-End Developer",
            url: "-",
            start: "July 2019",
            end: "August 2020",
            shortDescription: [
                "I had experience working on front-end development for mobile applications.",
                "Throughtout my work, I've utilized stack technologies. Android Studio for IDE, Android UI Tools including Android pre-built tools and Material Design.",
                "I've also managed a small team that includes Frontend Developers, Backend Developer and UI/UX Designer.",
                "Additionally, I've represented the company in client meetings, communicating effectively on their behaviors."
            ],
        },
        {
            name: "Saptaloka Digital",
            role: "Full Stack Developer",
            url: "https://www.saptalokadigital.com",
            start: "September 2020",
            end: "Present",
            shortDescription: [
                "I had experience working on front-end development and back-end development for mobile applications, websites and games.",
                "Throughtout my work, I've utilized various stack technologies, including Unity, Vuforia, Flutter, Next.js, Node.js, TypeScript, Laravel, MongoDB, Firebase, Bootstrap 5, SCSS and Tailwind CSS.",
                "I've also managed a large team that includes Frontend Developers, Backend Developer, UI/UX Designer and Digital Marketing.",
                "Additionally, I've represented the company in client meetings, communicating effectively on their behaviors."
            ],
        },
        {
            name: "TikTok",
            role: "Content Creator",
            url: "https://tiktok.com/@programmerjongkok",
            start: "June 2023",
            end: "Present",
            shortDescription: [
                "I began creating content on TikTok with 4 people.",
                "Overtime, I've shared my daily life as a programmer.",
                "As a result, my TikTok account gets a lot of viewers, with an average of 2000 views of all the content that has been uploaded.",
            ],
        },
        {
            name: "YouTube",
            role: "Content Creator",
            url: "https://youtube.com/@programmerjongkok",
            start: "June 2023",
            end: "Present",
            shortDescription: [
                "I began creating content on YouTube with 4 people to upgrading my hard skills and soft skills.",
                "Overtime, I've shared my daily life as a programmer and share many projects using Flutter, Next.js and Unity on my channel.",
            ],
        },
    ]
    return (
        <motion.div className='experience' id='experience'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
            }}
        >
            <div className="title">
                <h2>Where I&apos;ve Worked</h2>
            </div>
            <div className="container">
                <ul className="exp-slider">
                    <div className="underline"></div>
                    {
                        experiences.map((experience, index) => {
                            return <li key={index} className={`exp-slider-item ${index === selected && "exp-slider-item-selected"}`}
                                onClick={() => setSelected(index)}>
                                <span>{experience.name}</span>
                            </li>
                        })
                    }
                </ul>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <h3>
                            <span>{experiences[selected].role}</span>
                            <span className='exp-details-position-company'>
                                &nbsp;@&nbsp;
                                <Link className='link' href={experiences[selected].url}>{experiences[selected].name}{" "}</Link>
                            </span>
                        </h3>
                        <p className="exp-details-range">
                            {experiences[selected].start} - {experiences[selected].end}
                        </p>
                        <ul className="exp-details-list">
                            {experiences[selected].shortDescription.map(
                                (description, index) => (
                                    <li key={index} className='exp-details-list-item'>
                                        {description}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Experience