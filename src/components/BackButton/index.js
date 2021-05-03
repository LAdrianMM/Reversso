import React from 'react'
import { back } from '../../assets/images'
import { BackStyled } from './backbutton.styles'

const BackButton = ({ onClick }) => {
  return (
    <BackStyled onClick={onClick} className='back'>
      <img src={back} alt='back' />
    </BackStyled>
  )
}

export default BackButton
