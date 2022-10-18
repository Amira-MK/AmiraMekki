import React from "react";
import './skills.css';

export default function Skills() {
    return (
        <div className="skills">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">My technical level</span>
            <div className="skills__container container grid">
                <div className="skills__content">
                    <h3 className="skills__title" >Frontend web developer</h3>
                    <div className="skills__box grid">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__level">Advanced  </span>
                                </div>
                            </div> 

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__level">Advanced  </span>
                                </div>
                            </div> 

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">JAVASCRIPT</h3>
                                    <span className="skills__level">Basic</span>
                                </div>
                            </div> 

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">REACT JS</h3>
                                    <span className="skills__level">Advanced </span>
                                </div>
                            </div> 

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">BOOTSTRAP</h3>
                                    <span className="skills__level">Basic</span>
                                </div>
                            </div> 

                           
                        </div>
                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title" >Frontend mobile developer</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                        <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">XMl and JAVA</h3>
                                    <span className="skills__level">Basic</span>
                                </div>
                            </div> 

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">FLUTTER</h3>
                                    <span className="skills__level">Basic</span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>

                

                <div className="skills__content">
                    <h3 className="skills__title" >Backend web developer</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">DJANGO</h3>
                                    <span className="skills__level">Intermidiate</span>
                                </div>
                            </div> 

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">NODE JS</h3>
                                    <span className="skills__level">Intermidiate</span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>  

                <div className="skills__content">
                    <h3 className="skills__title" >DATA BASE </h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">MYSQL</h3>
                                    <span className="skills__level">Intermidiate</span>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>

                <div className="skills__content">
                    <h3 className="skills__title" >Graphic Designer</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">PHOTOSHOP</h3>
                                    <span className="skills__level">Intermidiate</span>
                                </div>
                            </div> 

                            <div className="skills__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skills__name">FIGMA</h3>
                                    <span className="skills__level">Intermidiate</span>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}