import React from 'react'
import './Portfolio.css'

const data = [
  {
    id: 1,
    image: {},
    title: 'Portfolio Website',
    github: 'https://github.com/abrogow',
  },
  {
    id: 2,
    image: {},
    title: 'To-do List project',
    github: 'https://github.com/abrogow',
  },
  {
    id: 3,
    image: {},
    title: 'E-commerce project',
    github: 'https://github.com/abrogow',
  },
  {
    id: 4,
    image: {},
    title: 'Chat-message project',
    github: 'https://github.com/abrogow',
  },
  {
    id: 5,
    image: {},
    title: 'Data analitics project',
    github: 'https://github.com/abrogow',
  },
  {
    id: 6,
    image: {},
    title: 'Project',
    github: 'https://github.com/abrogow',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn btn-primary' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio