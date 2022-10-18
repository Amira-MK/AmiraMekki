import React from "react";
import './home.css';
import Social from './social';

export default function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    < Social />
                <div className="home__img">
                    
                </div>
                <div className="home__data">
                    <h1 className="home__title">Hi, I'm Amira</h1>
                    <h3 className="home__subtitle">Web Developer</h3>
                    <p className="home__description">I'm a web Developer with a passion for creating beautiful and functional websites.</p>
                    <a href="#contact" className="button button--flex">
                    Contact Me <i className="uil uil-message button__icon"></i>
                    </a>
                </div>
                </div>
                <div className="home__scroll">
                <a href="#about" className="home__scroll-button button--flex">
                    <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                    <span className="home__scroll-name">Scroll down</span>
                    <i className="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
                </div>

            </div>
        </section>
    )

}