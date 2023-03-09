import React from 'react'

import '../styles/header.css'

import logo from '../images/header/logo.svg'
import tel from '../images/header/tel.svg'
import dot from '../images/header/dot.svg'
import whatsapp from '../images/header/whatsapp.svg'
import telegram from '../images/header/telegram.svg'
import instagram from '../images/header/instagram.svg'
import facebook from '../images/header/facebook.svg'
import email from '../images/header/email.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__nav'>
        <div className='header__nav-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='header__nav-phone'>
          <div>
            <img src={tel} alt="tel" />
            <span><a href="tel:+34624362326" className='text'>+34 624 36 23 26</a></span>
          </div>
          <div>
            <img src={dot} alt="dot" />
            Звоните, мы онлайн
          </div>
        </div>
        <div className='header__nav-social'>
          <div>
            <img src={whatsapp} alt="whatsapp" />
            <img src={telegram} alt="telegram" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={email} alt="email" />
          </div>
          <div>
            <img src={dot} alt="dot" />
            Пишите, мы онлайн
          </div>
        </div>
        <div className='header__nav-record'>
          <span>Записаться на экскурсию</span>
        </div>
        <div className='header__nav-menu'>
          <span></span>
        </div>
      </div >

      <div className='header__subnav'>
        <div className='header__subnav-block'>
          <span>Выполненные работы</span>
        </div>
        <div className='header__subnav-block'>
          <span>Каталог готовых объектов</span>
        </div>
        <div className='header__subnav-block'>
          <span>Магазин стройматериалов</span>
        </div>
        <div className='header__subnav-block'>
          <span>Блог</span>
        </div>
        <div className='header__subnav-block'>
          <span>О нас</span>
        </div>
      </div>
    </div >
  )
}

export default Header
