import React from "react";
import "./footer.css";

export default function Footer(){
    return(
      <footer className="footer">
            <div className="footer__container container">
                
                <h3 className="footer__title">Mekki Amira</h3>
                <p className="footer__subtitle">Web Developer</p>
                <p className="footer__text">I am a web developer with a passion for learning new technologies and building applications.</p>
                <ul className="footer__list">  
                    <li className="footer__item">
                        <a href="https://www.linkedin.com/in/mekki-amira-7b1b1b1b3/" className="footer__link">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                    </li>
                    <li className="footer__item">
                        <a href="https://www.facebook.com/amira.mekki.319/" className="footer__link">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                    </li>
                    <li className="footer__item">
                        <a href="https://mail.google.com/mail/u/0/#inbox" className="footer__link">
                            <i className="uil uil-envelope"></i>
                        </a>
                    </li>

                </ul>
            
            </div>
            <p className="footer__copy">&#169; Amira Mekki. All right reserved</p>
        </footer>
    
    );
}