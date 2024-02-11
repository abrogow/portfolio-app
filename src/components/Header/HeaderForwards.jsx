import React from 'react'
import CV from '../../pics/cv.pdf'

const HeaderForwards = () => {
  return (
    <div className='header__forwards'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
</div>
  )
}

export default HeaderForwards