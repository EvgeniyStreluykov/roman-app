import React from 'react'

import '../styles/footer.css'

import media1 from '../images/footer/media1.svg'
import media2 from '../images/footer/media2.svg'
import media3 from '../images/footer/media3.svg'
import btnLogo from '../images/footer/btnLogo.svg'
import home from '../images/footer/home.svg'
import catalog from '../images/footer/catalog.svg'
import shop from '../images/footer/shop.svg'
import blog from '../images/footer/blog.svg'
import specialist from '../images/footer/specialist.svg'
import contacts from '../images/footer/contacts.svg'
import russian from '../images/footer/russian.svg'
import whatsapp from '../images/header/whatsapp.svg'
import telegram from '../images/header/telegram.svg'
import instagram from '../images/header/instagram.svg'
import facebook from '../images/header/facebook.svg'
import youtube from '../images/footer/youtube.svg'
import arrow from '../images/main/arrow.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__media'>
        <div>
          <div className='text'>Видеоотзывы от партнёров</div>
          <div>
            <div className='media'>
              <div><img src={media1} alt="media1" /></div>
              <div><img src={media2} alt="media2" /></div>
              <div><img src={media3} alt="media3" /></div>
            </div>

          </div>
        </div>
      </div>

      <div className='footer__nav-menu'>
        <ul>
          <li>
            <img src={home} alt="home" />
            Главная
          </li>
          <li>
            <img src={catalog} alt="catalog" />
            Каталог готовых объектов
          </li>
          <li>
            <img src={shop} alt="shop" />
            Магазин стройматериалов
          </li>
          <li>
            <img src={blog} alt="blog" />
            Блог
          </li>
          <li>
            <img src={specialist} alt="specialist" />
            Выезд специалиста
          </li>
          <li>
            <img src={contacts} alt="contacts" />
            Контакты
          </li>
        </ul>
      </div>

      <div className='footer__info'>
        <div className='footer__info-content'>
          <div className='text'>Смотреть все документы
            <img src={arrow} alt="arrow" />
          </div>
          <div className='block'>
            Политика конфиденциальности
            <div className='arrow'></div>
          </div>
          <div className='block-lang'>
            <img src={russian} alt="russian" />
            Русский
            <div className='arrow'></div>
          </div>
        </div>
        <div className='footer-social'>
          
          <img src={whatsapp} alt="whatsapp" />
          <img src={telegram} alt="telegram" />
          <img src={instagram} alt="instagram" />
          <img src={youtube} alt="youtube" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
      <div className='company'>
        <div>
          <img src={btnLogo} alt="logo" />
        </div>
        <div className='company-text'>Alfa Digital Agency<span className='white'>– разработка высоко конверсионных сайтов</span></div>
      </div>
    </div>
  )
}

export default Footer
