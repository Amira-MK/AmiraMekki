import React from "react";
import './about.css';
import picture from '../../assets/aa.png';

export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about__container container grid">
                <img src={picture} alt="" className="about__img" />
                <div className="about__data">
                    
                    <div className="about__info">
                        <div className="about__box">
                            <i class="bx bx-award about__icon"></i>
                            <h3 className="about__title">01+</h3>
                            <span className="about__subtitle">Years <br /> experience</span>
                        </div>
                        <div  className="about__box">
                            <i class="bx bx-briefcase-alt about__icon"></i>
                            <h3 className="about__title">20+</h3>
                            <span className="about__subtitle">Completed <br /> projects</span>
                        </div>
                        <div className="about__box">
                            <i class="bx bx-support about__icon"></i>
                            <h3 className="about__title">05+</h3>
                            <span className="about__subtitle">Companies <br /> worked</span>
                        </div>
                    </div>
                    <p className="about__description">Web developer with almost two years of working experience. Always on the look for exciting projects to work on and smart people to collaborate with! I am an easy person to work with. I will impress you by my attention to detail and my ability to constantly exceed your expectations.
                    </p>
                    <div className="about__buttons">
                        <a download="" href="assets/pdf/cv.pdf" className="button button--flex">
                            Download CV <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}