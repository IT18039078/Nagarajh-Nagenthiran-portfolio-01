import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio1.png'
const Portfolio = () => {
  return (
    <section id='portfolios'>
      <h5>My Recent Wokr</h5>
      <h2>Portfolio</h2>

      {/* IN THE REFERNCE 2.17.02 IS THE PLACE I SHOULD LOOT AT TO CHANGE THIS AS ARRAY WHEN
      IT IS GETTING BIGGER  */}
      <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG} alt="porfolio" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
                <a href="http://github.com" className='btn btn-primary' target='_blank'>Github</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG} alt="porfolio" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
                <a href="http://github.com" className='btn btn-primary' target='_blank'>Github</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG} alt="porfolio" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
                <a href="http://github.com" className='btn btn-primary' target='_blank'>Github</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG} alt="porfolio" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
                <a href="http://github.com" className='btn btn-primary' target='_blank'>Github</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG} alt="porfolio" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
                <a href="http://github.com" className='btn btn-primary' target='_blank'>Github</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG} alt="porfolio" />
            </div>
            <h3>This is portfolio item title</h3>
            <div className="portfolio__item-cta">
                <a href="http://github.com" className='btn btn-primary' target='_blank'>Github</a>
            </div>
          </article>
      </div>    
    </section >
  )
}

export default Portfolio