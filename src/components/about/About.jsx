import React from 'react'
import './about.css'
import ME from '../../assets/nageprofile1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
        </div>

        <div className="about__content">
            <div className="about__cards">

              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>6 month Internship</small><br/>
                <small>6 month Freelanze</small>
              </article>

              <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>3 Clients</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ completed projects</small>
              </article>
            </div>

            <p>
            George is a versatile web designer due to his extensive history in graphic and web design.
             His dedication to continuously learning about new web design trends and concepts has made 
             him a valuable member of the team. With eight years of experience and a master's in web 
             design, his expertise can help customers modernize with websites and appeal to expanding customer populations
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About