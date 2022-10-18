import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g12ty7c', 'service_g12ty7c', form.current, 'nctPBO4wTBiUcCdzP')
        e.targer.reset();
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <span className="section-subtitle"></span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__information">
                        <div className="contact__card">
                            <i className="uil uil-phone contact__card-icon"></i>
                            <div>
                                <h3 className="contact__title">Call Me</h3>
                                <span className="contact__subtitle">+213552302053</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact__information">
                        <div className="contact__card">
                            <i className="uil uil-envelope contact__card-icon"></i>
                            <div>
                                <h3 className="contact__title">Email</h3>
                                <span className="contact__subtitle"> <a className=".contact-link" href="https://mail.google.com/mail/u/0/#inbox">mekkiamira87@gmail.com</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="contact__information">
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <div>
                                <h3 className="contact__title">Whattsap</h3>
                                <span className="contact__subtitle"><a href="https://web.whatsapp.com/">+213552302053</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact-title">Write me your project</h3>
                        <form ref={form} onSubmit={sendEmail} className="contact__form grid">
                            
                                <div className="contact__form-div">
                                    <label htmlFor="" className="contact__label">Name</label>
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        className="contact__input" 
                                    />
                                </div>

                                <div className="contact__form-div">
                                    <label htmlFor="" className="contact__label">Email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder="Your email"
                                        className="contact__input" 
                                    />
                                </div>

                                <div className="contact__form-div">
                                    <label htmlFor="" className="contact__label">Project</label>
                                    <textarea 
                                        name="project"
                                        cols="30"
                                        rows="10"
                                        placeholder="Your project"
                                        className="contact__input"
                                    ></textarea>
                                </div>

                            <div>
                                <button type="submit" className="button button--flex">
                                    Send Message
                                    <i className="uil uil-message button__icon"></i>
                                </button>
                            </div>
                        </form>
                </div>
            </div>


        </section>
    );

}

export default Contact;