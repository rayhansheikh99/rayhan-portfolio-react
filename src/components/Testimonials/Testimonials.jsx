import React from 'react'
import "./testimonials.css"
import avatar1 from '../../assets/avatar1.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: avatar1,
    name: 'John Lewis',
    review: 'Dolor sit amet consectetur adipisicing elit. Fugiat soluta incidunt doloremque. Eaque ipsa saepe inventore corrupti sed! Tenetur, reprehenderit?'
  },
  {
    avatar: avatar1,
    name: 'David Warner',
    review: 'Dolor sit amet consectetur adipisicing elit. Fugiat soluta incidunt doloremque. Eaque ipsa saepe inventore corrupti sed! Tenetur, reprehenderit?'
  },
  {
    avatar: avatar1,
    name: 'John Lewis',
    review: 'Dolor sit amet consectetur adipisicing elit. Fugiat soluta incidunt doloremque. Eaque ipsa saepe inventore corrupti sed! Tenetur, reprehenderit?'
  },
  {
    avatar: avatar1,
    name: 'John Lewis',
    review: 'Dolor sit amet consectetur adipisicing elit. Fugiat soluta incidunt doloremque. Eaque ipsa saepe inventore corrupti sed! Tenetur, reprehenderit?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="container testimonials-container mySwiper">
        {
          data.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client-avatar">
                  <img src={avatar} alt="avatar-one" />
                </div>
                  <h5 className="client-name">{name} </h5>
                  <small className="client-review">
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials