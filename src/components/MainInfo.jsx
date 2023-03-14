import React from 'react'

import '../styles/mainInfo.css'

import check from '../images/main/check.svg'

const MainInfo = () => {
  return (
    <div className='mainInfo'>
      <div className='mainInfo__paragraph-name'>
        <div className='mainInfo__paragraph-block'>
          <span>О компании</span>
          <div className='paragraph'>
            <ul>
              <li><img src={check} alt="check" />Основная информация</li>
              <li><img src={check} alt="check" />История компании</li>
            </ul>
          </div>
        </div>
        <div className='mainInfo__paragraph-block'>
          <span>Стройка и ремонт</span>
          <div className='paragraph'>
            <ul>
              <li><img src={check} alt="check" />Кейсы наших клиентов</li>
              <li><img src={check} alt="check" />Услуги которые мы оказываем</li>
              <li><img src={check} alt="check" />Часто задаваемые вопросы</li>
            </ul>
          </div>
        </div>
        <div className='mainInfo__paragraph-block'>
          <span>Покупка недвижимости</span>
          <div className='paragraph'>
            <ul>
              <li><img src={check} alt="check" />Кейсы наших клиентов</li>
              <li><img src={check} alt="check" />Топ 30 вопросов инвесторов</li>
            </ul>
          </div>
        </div>
        <div className='mainInfo__paragraph-block'>
          <span>Маркетинговые услуги</span>
          <div className='paragraph'>
            <ul>
              <li><img src={check} alt="check" />Кейсы наших клиентов</li>
              <li><img src={check} alt="check" />Услуги которые мы оказываем</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainInfo
