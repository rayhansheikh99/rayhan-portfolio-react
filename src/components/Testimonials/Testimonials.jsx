import React from 'react'
import "./testimonials.css"
import avatar1 from '../../assets/avatar1.png'

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

      <div className="container testimonials-container">
        {
          data.map(({avatar,name,review},index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client-avatar">
                  <img src={avatar} alt="avatar-one" />
                </div>
                  <h5 className="client-name">{name} </h5>
                  <small className="client-review">
                    {review}
                  </small>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Testimonials