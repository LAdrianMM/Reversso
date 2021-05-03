import React from 'react'
import { PopContainer, PopContent } from './popup.styles'
import { Fade } from 'react-reveal'
import { iconClose, iconApple, iconFacebook, iconGoogle } from '../../assets/images'
import { Button } from '../'

const Popup = ({ onClick }) => {
  return (
    <PopContainer>
      <Fade top duration={200}>
        <PopContent>
          <span className='line-top' />
          <div className="title-container">
            <button onClick={onClick}>
              <img alt='Close' src={iconClose} />
            </button>
            <h3>Selecciona tu cuenta</h3>
          </div>
          <div className="buttons-container">
            <Button contained={false} bg='Voldemort'><img src={iconApple} alt='Apple' /> Continua con Apple ID</Button>
            <Button contained={false} bg='Voldemort'><img src={iconFacebook} alt='Facebook'/> Continua con Facebook</Button>
            <Button contained={false} bg='Voldemort'><img src={iconGoogle} alt='Google' /> Continua con Google</Button>
          </div>
        </PopContent>
      </Fade>
    </PopContainer>
  )
}

export default Popup
