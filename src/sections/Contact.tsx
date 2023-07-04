"use client"
import Button from '@/components/Button'
import React from 'react'
import { motion } from "framer-motion"

function Contact() {
    return (
        <motion.div className='contact' id='contact'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
            }}
        >
            <h2 className="contact-title">What&apos;s Next?</h2>
            <h2 className="contact-sub-title">Get in Touch</h2>
            <p className="contact-text">
                If you need an IT Services, so I&apos;ll give you IT Services and IT Solutions. Other than that, if you want to learn about software engineering, just contact me.
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className="contact-cta">
                <Button text='Say Hi' link='mailto:fikriyomann@gmail.com' />
            </div>
        </motion.div>
    )
}

export default Contact;
