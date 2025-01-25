import React from 'react'
import './Header.css'
import HeaderForwards from './HeaderForwards'

import ME from '../../pics/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <section className='section' id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aleksandra Brogowska</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderForwards />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      </section>
    </header>
  )
}

export default Header
