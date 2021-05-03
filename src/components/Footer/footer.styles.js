import styled from 'styled-components'
import { colors } from '../../assets/colors'

export const FooterStyled = styled.footer`
  color: ${colors.Harry};
  font-size: 14px;
  
  .text-footer {
    margin-bottom: 40px;

      span {
        color: ${colors.Hermione};
        cursor: pointer;
      }
  }

  .text-footer__home {
    display: none;
  }
  
  .line-bottom {
    height: 5px;
    width: 134px;
    background-color: ${colors.Harry};
    border-radius: 30px;
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    .line-bottom {
      display: none;
    }

    .text-footer {
      display: none;
    }

    .text-footer__home {
      display: block;

      span {
        color: ${colors.Hermione};
        cursor: pointer;
      }
    }
  }
`