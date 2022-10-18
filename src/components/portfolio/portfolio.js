import React from "react";
import img1 from "./image/plant.png";
import img2 from "./image/spacy.png";
import img3 from "./image/calc.png";
import img4 from "./image/airnbn.png";
import img5 from "./image/quiz.png";
import img6 from "./image/plancon.png";
import img7 from "./image/shoppy.png";
import img8 from "./image/food.png";
import img9 from "./image/tenzies.png";
import img10 from "./image/two.png";
import img11 from "./image/todo.png";
import img12 from "./image/weather.png";
import "./portfolio.css";


function Portfolio() {
  return (
    <div className="portfolio">
            <h2 className="section-title">Portfolio</h2>
            <span className="section-subtitle">My projects</span>
            <div className="portfolio__container container grid">
                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >SPACY</h3>
                    <img src={img2} alt="" className="portfolio__img" />
                    <p className="portfolio__description">a mobile app to help kids learning new languages developed using <b>JAVA & XML and Firebase.</b>  </p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >Plant store</h3>
                    <img src={img1} alt="" className="portfolio__img" />
                    <p className="portfolio__description">an e commerce mobile app to buy and sell plant developed using  
                    <b> Flutter</b>.</p> 
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >body calculator</h3>
                    <img src={img3} alt="" className="portfolio__img" />
                    <p className="portfolio__description">a simple mobile app to calculate your body average using <b>Flutter.</b></p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >Expershop</h3>
                    <img src={img4} alt="" className="portfolio__img" />
                    <p className="portfolio__description">an ecommerce web site about selling objects using <b>React js</b>.</p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >Quizzical</h3>
                    <img src={img5} alt="" className="portfolio__img" />
                    <p className="portfolio__description">A web site about testing your knowledge in any field using <b>React js , Node js and MySQL</b>.</p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >PLANCON</h3>
                    <img src={img6} alt="" className="portfolio__img" />
                    <p className="portfolio__description">A web site about organizing an online conferences by adding your articles to be reviewed and presented in the conference developed using <b> HTML, CSS, Javascript, django and SQLLite</b>.</p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >Shoppy</h3>
                    <img src={img7} alt="" className="portfolio__img" />
                    <p className="portfolio__description">An ecommerce app about opening an online store to sell your products and it's also possible for customers to buy products developed using <b>React js , Node js and MySQL</b>.</p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >Foodite</h3>
                    <img src={img8} alt="" className="portfolio__img" />
                    <p className="portfolio__description">A web site present foodite restaurant using <b>HTML & CSS and JAVASCRIPT</b>.</p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >Tenzies</h3>
                    <img src={img9} alt="" className="portfolio__img" />
                    <p className="portfolio__description">A web site about tenzies game using <b>React js</b>.</p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >Travel Journal</h3>
                    <img src={img10} alt="" className="portfolio__img" />
                    <p className="portfolio__description">A web site about your travel journal using <b>React js</b> .</p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >To do list </h3>
                    <img src={img11} alt="" className="portfolio__img" />
                    <p className="portfolio__description">A to do list web site using <b>React js</b>.</p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                <div className="portfoplio__content">
                    <h3 className="portfolio__title" >Weather app</h3>
                    <img src={img12} alt="" className="portfolio__img" />
                    <p className="portfolio__description">A weather web site using <b>React js</b></p>
                    <div className="portfolio__links">
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Demo
                        </a>
                        <a href="#" className="button button-flex button--small button--link">
                            <i className="bx bx-link-alt button__icon"></i>
                            Code
                        </a>
                    </div>
                </div>

                    
            </div>  
        </div>
  );
}

export default Portfolio;