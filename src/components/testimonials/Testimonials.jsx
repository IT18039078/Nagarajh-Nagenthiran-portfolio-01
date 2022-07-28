import React from 'react'
import './testimonials.css'
import AVAT1 from '../../assets/nageprofile.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// ARRAY DATA FOR TESTIMONIAL
const data =[
  {
    avatar: AVAT1,
    name: 'Nagenthiran',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo vero nihil corporis rerum facilis fugiat dolorum assumenda modi vitae ratione nostrum, mollitia ducimus consequatur nam dolorem totam, aspernatur quis!"
  },
  {
    avatar: AVAT1,
    name: 'Pasapukal',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo vero nihil corporis rerum facilis fugiat dolorum assumenda modi vitae ratione nostrum, mollitia ducimus consequatur nam dolorem totam, aspernatur quis!"
  },
  {
    avatar: AVAT1,
    name: 'Nagenthiran',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo vero nihil corporis rerum facilis fugiat dolorum assumenda modi vitae ratione nostrum, mollitia ducimus consequatur nam dolorem totam, aspernatur quis!"
  }
]
const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Rreview from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={true}
      activeDotColor={'white'}
      >
        {
            data.map(({avatar, name, review}, index)=>{
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <h5 className='clinet__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
                </SwiperSlide>
              )
            })
        }
        </Swiper>
    </section >
  )
}

export default Testimonials