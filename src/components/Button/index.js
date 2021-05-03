import React from 'react'
import { ButtonStyled } from './button.styles'

const Button = ({ contained, bg, children, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} contained={contained} bg={bg}>
      { children }
    </ButtonStyled>
  )
}

export default Button
