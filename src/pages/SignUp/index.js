import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { SignUpStyled } from './signup.styles'
import { iconApple, iconFacebook, iconGoogle, positiveImage, view } from '../../assets/images'
import { BackButton, Button, Footer, Popup } from '../../components'

const SignIn = ({ setSignIn, setSuccess }) => {
  const history = useHistory()
  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    history.push({
      pathname: '/signin',
      state: { success: true }
    })
  }

  const handleNewAccount = () => {
    setSignIn(true)
    setSuccess(true)
  }

  return (
    <SignUpStyled>
      <BackButton onClick={() => history.push('/')} />
      <div className="home-image">
        <img src={positiveImage} alt="Logo" className="bepositive"/> 
      </div>
      <div className="text-signup">
        <h4>Registrarse en be positivite</h4>
      </div>
      <form className='form'>
        <label>Email/Nombre de usuario
          <input placeholder='Ingresa email o nombre de usuario' type='text' />
        </label>
        <label>Nombre
          <input placeholder='Ingresa nombre' type='text' />
        </label>
        <label>Contraseña
          <input placeholder='Ingresa contraseña' type='password' />
          <img className='view' src={view} alt="view"/>
        </label>
        <label className='label-tyc'>
          <input className='checkbox' type='checkbox' /> Aceptar términos y condiciones
        </label>
      </form>
      <div className="buttons">
        <Button
          onClick={handleClick}
          contained={true} 
          bg={'Hermione'}
        >
          Crear una cuenta
        </Button>
        <Button
          onClick={() => setPopup(!popup)}
          contained={false} 
          bg={'Harry'}
        >
          Registrarse con otra cuenta
        </Button>
      </div>
      <div className="buttons-home">
        <Button
          contained={true} 
          bg={'Harry'}
          onClick={handleNewAccount}
        >
          Crear una cuenta
        </Button>
      </div>
      <div className='other-account'>
        <p>O inicia sesión con otra cuenta</p>
        <div className='account-buttons'>
          <button><img src={iconApple} alt='apple' /></button>
          <button><img src={iconFacebook} alt='facebook' /></button>
          <button><img src={iconGoogle} alt='google' /></button>
        </div>
      </div>
      <div className='footer-container'>
        <Footer 
          text='¿Ya eres usuario?' 
          onClick={() => history.push('/signin')}
          textSpan='Ingresar'
          onClickHome={() => setSignIn(true)} />
      </div>
      {
        popup 
          ? <Popup onClick={() => setPopup(!popup)} />
          : ''
      }
    </SignUpStyled>
  )
}

export default SignIn
