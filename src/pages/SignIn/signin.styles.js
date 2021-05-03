import styled from 'styled-components'
import { colors } from '../../assets/colors'

export const SignInStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${colors.Dobby};
  padding: 0 24px;

  .signIn-image {
    width: 240px;
    padding-top: 80px;
    position: relative;
    margin: 0 auto;

      img {
      max-width: 100%;
    }
 }

  .text-mobile {
    color: ${colors.Hermione};
    margin-top: 37px;
    margin-bottom: 33px;

    p {
      margin-bottom: 7px;
      font-size: 15px;
    }

    h3 {
      font-size: 21px;
    }
 }

  .text-home {
    display: none;
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

    p {
      color: ${colors.Harry};
      text-align: right;
      font-size: 14px;
    }

   .view {
     position: absolute;
     right: 12px;
     bottom: -5px;
   }
 }

 .buttons-mobile {
    margin-top: 30px;
 }

 .buttons-home {
    display: none;
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
    margin-top: 180px;
    position: relative;

    .back {
      display: none;
    }

    .signIn-image {
      display: none;
    }

    .text-mobile {
      display: none;
    }

    .text-home {
      display: block;
      color: ${colors.Hermione};

      h3 {
        margin-bottom: 9px;
        font-size: 21px;
      }

      p {
        font-size: 14px;
        margin-bottom: 29px;
      }
    }

    .buttons-mobile {
      display: none;
    }

    .buttons-home {
      display: block;  
      margin-top: 25px;
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
          cursor: pointer;
          align-items: center;
        }
      }
    }

   .footer-container {
     bottom: 0px;
     padding-bottom: 79px;
   }  
 }
`
export const PopupSuccess = styled.section`
  height: 77px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #4CA484;
  border-radius: 20px 20px 0 0;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;

    p {
      color: ${colors.Dobby};
      font-size: 16px;
      max-width: 220px;
      text-align: center;
      line-height: 25px;
    }

    @media (min-width: 1024px) {
      height: 37px;
      top: 0;
      border-radius: 0;

      p {
        font-size: 14px;
        max-width: 100%;
      }  
    }  
`