import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI AND UX */}
        <article className="service">
            <div className="service__head">
              <h3>UI/UX desing</h3>
            </div>
            <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
            </ul>
          
        </article>

        {/*  WEB DEVELOPMENT */}
        <article className="service">
            <div className="service__head">
              <h3>WEB DEVELOPMENT</h3>
            </div>
            <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
            </ul>
          
        </article>
        {/* AI AND MACHINE LEARNING */}
        <article className="service">
            <div className="service__head">
              <h3>AI AND MACHINE LEARNING</h3>
            </div>
            <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>I can desing web application with react JS.</p>
                </li>
            </ul>
        </article>
      </div>
    </section >
  )
}

export default Services