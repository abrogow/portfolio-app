import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './Skills.css'

const Skills = () => {
    return (
    <div>
        <section id='skills'>
        <h2>Key Skills</h2>
        
        <div className="container skills__container">
          <div>
            <h3>Programming Languages</h3>
            <div className="skills__content">
              <article className='skills__details'>
                <BsPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>Java (Spring Boot, Hibernate)</h4>
                  <small className='text-light'>3+ years experience</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>Groovy (Spock, Selenium)</h4>
                  <small className='text-light'>3+ years experience</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>TypeScript (React, NodeJS)</h4>
                  <small className='text-light'>1+ years experience</small>
                </div>
              </article>
            </div>
          </div>
    
          <div>
          <h3>Tools</h3>
            <div className="skills__content">
              <article className='skills__details'>
                <BsPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>Git</h4>
                </div>
              </article>
              <article className='skills__details'>
                <BsPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>AWS CDK, Serverless</h4>
                </div>
              </article>
              <article className='skills__details'>
                <BsPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>Docker</h4>
                </div>
              </article>
              <article className='skills__details'>
                <BsPatchCheckFill className='skills__details-icon' />
                <div>
                  <h4>K8S</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}

export default Skills