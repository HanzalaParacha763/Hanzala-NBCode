import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experieced Full Stack MERN developer with over a year of professional expertise in the field. Throughout my career, I have had the privelege of colaborating with prestegious organizations, contributing to thier success and growth.</p>
                        <p>My passion for full-stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "63%" }} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{ width: "55%" }} /></div>
                        <div className="about-skill"><p>Express JS</p><hr style={{ width: "40%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About