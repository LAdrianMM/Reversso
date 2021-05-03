import React from 'react'
import { FooterStyled } from './footer.styles'

const Footer = ({ text, onClick, textSpan, onClickHome }) => {
  return (
    <FooterStyled>
      <p className='text-footer'>
        { text }
        <span 
          onClick={onClick}
          >
            {' '} { textSpan }
        </span>
      </p>
      <p className='text-footer__home'>
        { text }
        <span 
          onClick={onClickHome}
          >
            {' '} { textSpan }
          </span>
      </p>
      <span className='line-bottom' />
    </FooterStyled>
  )
}

export default Footer
