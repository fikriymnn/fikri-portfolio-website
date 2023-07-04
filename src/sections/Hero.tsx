"use client"
import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className='hero'>
            <motion.h1 className="hero-title"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.6,
                }}
            >
                Hi, my name is
            </motion.h1>
            <motion.h2 className="hero-title-large"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.75,
                }}
            >
                Fikri Zaki Aditama, S.Si.
            </motion.h2>
            <motion.h3 className="hero-title-large hero-title-sub"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.05,
                }}
            >
                Software Engineer.
            </motion.h3>
            <motion.p className="hero-text"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.35,
                }}
            >
                I&apos;m a Head of IT at <Link href='https://saptalokadigital.com' target='_blank' className='link'>PT Saptaloka Digital Indonesia</Link> with expertise in developing software applications and websites as a Team Leader.
                I&apos;m also part of <Link href='https://tiktok.com/@programmerjongkok' target='_blank' className='link'>Programmer Jongkok</Link>, TikTok and Youtube content creator who discusses technological developments, the life of a programmer and tutorials on becoming a professional software engineer.
            </motion.p>
            <motion.div className="hero-button"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.65,
                }}
            >
                <Button text='Check out my Youtube' link='https://youtube.com/@programmer_jongkok' />
            </motion.div>
        </div>
    )
}

export default Hero