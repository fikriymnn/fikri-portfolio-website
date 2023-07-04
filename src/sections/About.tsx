"use client"
import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import { useInView, motion } from "framer-motion"

function About() {
    return (
        <motion.div className='about' id='about'
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
                <h2>About Me</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                        Hello! My name is Fikri, and I&apos;m passionate about developing software and website.
                        I&apos;m a chemistry graduate at the Faculty of Mathematics and Natural Science Education, Indonesia University of Education.<br />
                        I found my passion in the field of software engineering when I was studying in semester 8. Finally, I decided to take a break from college and started to learn more about how to make mobile applications and websites for 2 years.
                    </p>
                    <p className="about-grid-info-text">
                        After spending 2 years studying to become a full-stack developer, I decided to continue my pending studies. And finally I graduated in 2021 as a bachelor of chemistry.
                    </p>
                    <p className="about-grid-info-text">
                        Fast-forward to today, I specialize in developing software and website as a team leader that delight our clients and exceed their expectations at {" "}
                        <Link href="https://saptalokadigital.com" className='link' target='_blank'>PT Saptaloka Digital Indonesia.</Link>
                    </p>
                    <p className="about-grid-info-text">
                        Additionaly, I share my knowledge and passion with the world through my Youtube Channel and TikTok, where I demonstrate how to build full-stack applications.
                    </p>
                    <p className="about-grid-info-text">
                        Here are a few technologies I&apos;ve been working with recently:
                    </p>
                    <ul className="about-grid-info-list">
                        <li className="about-grid-info-list-item">Flutter</li>
                        <li className="about-grid-info-list-item">Unity</li>
                        <li className="about-grid-info-list-item">Vuforia</li>
                        <li className="about-grid-info-list-item">Laravel</li>
                        <li className="about-grid-info-list-item">CodeIgniter 3</li>
                        <li className="about-grid-info-list-item">Next.js</li>
                        <li className="about-grid-info-list-item">Typescript</li>
                        <li className="about-grid-info-list-item">Node.js</li>
                        <li className="about-grid-info-list-item">Bootstrap 5</li>
                        <li className="about-grid-info-list-item">Tailwind CSS</li>
                        <li className="about-grid-info-list-item">SCSS</li>
                        <li className="about-grid-info-list-item">Firebase</li>
                        <li className="about-grid-info-list-item">MongoDB</li>
                        <li className="about-grid-info-list-item">MySQL</li>
                    </ul>
                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image src="/yow.jpg" alt="profile" fill />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About