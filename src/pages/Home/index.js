import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { HomeStyled } from './home.styles'
import { PopupSuccess } from '../SignIn/signin.styles'
import { sunImage, positiveImage } from '../../assets/images'
import { Button, Popup } from '../../components'
import { SignIn, SignUp } from '../'

const Home = () => {
  const history = useHistory()
  const [popup, setPopup] = useState(false)
  const [signIn, setSignIn] = useState(true)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setTimeout(() => {setSuccess(false)}, 4000)
    clearTimeout()
  }, [success])

  return (
    <HomeStyled>
      <div className='home-section'>  
        <div className="home-image">
          <img src={positiveImage} alt="Logo" className="bepositive"/>
          <p className='home-title'>Gestiona tus seguidores de forma segura</p>
          <img src={sunImage} alt="Sun" className="sun"/>        
        </div>
        <div className="text">
          <p>Bienvenido!</p>
          <h3>Conecta con tus seguidores</h3>
        </div>
        <div className="buttons">
          <Button 
            onClick={() => history.push('/signin')}
            contained={true} 
            bg={'Harry'}
          >Iniciar Sesión</Button>
          <Button
            onClick={() => setPopup(!popup)}
            contained={false} 
            bg={'Hermione'}
          >Iniciar sesión con otra cuenta</Button>
        </div>
        <div className='container-bottom'>
          <p className='new-user'>¿Eres un nuevo usuario? <span onClick={() => history.push('/signup')}>Crear una cuenta</span></p>
          <span className='line-bottom' />
        </div>
      </div>
      <div className='sign-in-home'>
        {
          signIn
            ? <SignIn setSignIn={setSignIn} />
            : <SignUp setSuccess={setSuccess} setSignIn={setSignIn} />
        }
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
    </HomeStyled>
  )
}

export default Home
