import styled from 'styled-components'
import { colors } from '../../assets/colors'

export const SignUpStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${colors.Dobby};
  padding: 0 24px;

  .home-image {
   width: 240px;
   padding-top: 40px;
   position: relative;
   margin: 0 auto;

    img {
     max-width: 100%;
   }
 }

 .text-signup {
   color: ${colors.Hermione};
   margin-top: 37px;
   margin-bottom: 33px;

    h4 {
      letter-spacing: .5px;
    }
 }

 .form {
   label {
    color: ${colors.Harry};
    font-size: 14px;
    position: relative;
   }

   input {
     width: 100%;
     height: 48px;
     border: 1px solid ${colors.Voldemort};
     border-radius: 4px;
     padding: 16px;
     margin-bottom: 16px;
     margin-top: 10px;

     &::placeholder {
       color: ${colors.Severus}
     }

   }
   .view {
      position: absolute;
      right: 12px;
      bottom: -5px;
    }

   .label-tyc {
     color: ${colors.Hermione};
     display: flex;
     align-items: center;
     font-size: 13px; 
     
     .checkbox{
        appearance: none;
        width: 24px;
        height: 24px;
        outline: none;
        margin: 0 8px 0 0;
        border: 1px solid ${colors.Voldemort};
        padding: 0;

        &:checked {
          background-color: ${colors.Hermione}
        }
      }
   }

   p {
     color: ${colors.Harry};
     text-align: right;
   }
 }

 .buttons-home {
   display: none;
 }

 .buttons {
   margin-top: 30px;
 }

 .other-account {
   display: none;
 }

 .footer-container {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin-left: auto; 
    margin-right: auto;
    text-align: center; 
 }

 @media (min-width: 1024px) {
  max-height: 720px;
  max-width: 420px;
  margin-top: 80px;
  position: relative;
  
  .back {
    display: none;
  }

  .home-image {
    display: none;
  }

  .text-signup {

    h4 {
      font-size: 25px;
    }
  }

  .label-tyc {
    margin-bottom: 35px;
  }

  .buttons-home {
   display: block;
 }

  .other-account {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 40px;

      p {
        color: ${colors.Hermione};
        font-size: 14px;
        margin-bottom: 16px;
      }

      .account-buttons {
        display: flex;
        justify-content: space-between;
        width: 55%;

        button {
          border: none;
          border-radius: 50%;
          height: 45px;
          width: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }

    .footer-container {
      padding-bottom: 20px;
      bottom: 0;
    }
 }

`