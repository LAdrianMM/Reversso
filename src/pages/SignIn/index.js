import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { positiveImage, view, iconApple, iconFacebook, iconGoogle } from '../../assets/images'
import { SignInStyled, PopupSuccess } from './signin.styles'
import { Button, Popup, BackButton, Footer } from '../../components'

const SignIn = ({ setSignIn }) => {
  const history = useHistory()
  const location = useLocation()
  const [popup, setPopup] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if(location.state){
      setSuccess(location.state.success)
    }
    setTimeout(() => {setSuccess(false)}, 3000)
    clearTimeout()
  }, [location.state])

  return (
    <SignInStyled>
      <BackButton onClick={() => history.push('/')} />
      <div className="signIn-image">
        <img src={positiveImage} alt="Logo" className="bepositive"/> 
      </div>
      <div className="text-mobile">
        <h4>Inicie sesión para utilizar la aplicación</h4>
      </div>
      <div className="text-home">
        <h3>Bienvenido</h3>
        <p>Inicie sesión ingresando su cuenta aquí</p>
      </div>
      <form className='form'>
        <label>Email/Nombre de usuario
          <input placeholder='Ingresa email o nombre de usuario' type='text' />
        </label>
        <label>Contraseña
          <input placeholder='Ingresa contraseña' type='password'  />
          <img className='view' src={view} alt="view"/>
        </label>
        <p>¿Olvidaste tu contraseña?</p>
      </form>
      <div className="buttons-mobile">
        <Button
          contained={true} 
          bg={'Hermione'}
        >
          Iniciar Sesión
        </Button>
        <Button
          onClick={() => setPopup(!popup)}
          contained={false} 
          bg={'Harry'}
        >
          Iniciar sesión con otra cuenta
        </Button>
      </div>
      <div className="buttons-home">
        <Button
          contained={true} 
          bg={'Harry'}
        >
          Iniciar Sesión
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
          text='¿Eres un nuevo usuario?'
          onClick={() => history.push('/signup')} 
          textSpan='Crear una cuenta'
          onClickHome={() => setSignIn(false)}
        />
      </div>
      {
        popup 
          ? <Popup onClick={() => setPopup(!popup)} />
          : ''
      }
      {
        success 
          ? <PopupSuccess>
            <p>Felicidades te haz registrado exitosamente.</p>
          </PopupSuccess>
          : ''
      }
    </SignInStyled>
  )
}

export default SignIn
