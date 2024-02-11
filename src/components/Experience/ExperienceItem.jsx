import React from 'react'
import "./Experience.css";

const ExperienceItem = ({data}) => {
  return (
    <div className="experience__item">
        <div className="experience__item__content">
        <time>{data.date}</time>
        <h3>{data.company}</h3>
        <h4>{data.position}</h4>
        <br />
        {data.projects.map((item) => {
          return (
            <>
            <h5>{item.title}</h5>
            <ul>
            <li className="experience__li"> <small className='text-light'>{item.description}</small></li>
            <li className="experience__li"><small className='text-light'>{item.technologies}</small></li>
          </ul>
          <br />
          </>
          )
        })
        }

        <span className="circle" />
    </div>
</div>
  )
}

export default ExperienceItem