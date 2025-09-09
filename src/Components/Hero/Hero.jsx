import React from 'react'
import './Hero.css'
// import profileimg from '../../assets/pfp.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      {/* <img src={profileimg} alt="" className='pfp' /> */}
      <div className='pfp'></div>
      <h1><span>I am Hanzala Paracha,</span> MERN Stack developer based in Pakistan</h1>
      <p>I am a Full Stack Web developer from Nowshera, Pakistan with 1 year of experience.</p>
      <div className="hero-action">
        <div className="hero-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          My resume
        </div>
      </div>
    </div>
  )
}

export default Hero
