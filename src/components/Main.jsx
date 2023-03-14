import React from 'react'

import '../styles/main.css'

import fire from '../images/main/fire.svg'
import pic from '../images/main/pic.svg'
import portret from '../images/main/portret.svg'

const Main = () => {
  return (
    <div className='main'>
      <div className='main__content'>
        <div className='main-info'>Все материалы о нашей компании и услугах которые мы оказываем</div>
        <div className='main-info2'>Здесь вы найдете ответы на самые распространенные вопросы, инструкции и кейсы наших клиентов</div>
        <div className='connection'>
          <div className='connection-info'>
            <div><span className='green'>Хотите с нами связаться</span>, оставьте заявку и специалист свяжется с вами в течение 30 минут.</div>
            <div><img src={fire} alt="fire" /></div>
          </div>
          <div className='width'>
            <input type="num" placeholder='Номер телефона' />
          </div>
          <div className='width'>
            <button>
              Оставить заявку
              <img src={pic} alt="pic" />
            </button>
            <div className='attention'>
              Ваши данные не будут переданы третьим лицам
            </div>
          </div>
        </div>
      </div>
      <div className='portret'>
        <img src={portret} alt="portret" />
      </div>
    </div>
  )
}

export default Main
