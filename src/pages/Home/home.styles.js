import styled from 'styled-components'
import { colors } from '../../assets/colors'

export const HomeStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${colors.Luna};
  padding: 0 24px;

  .home-image {
   width: 328px;
   padding-top: 200px;
   position: relative;

   .home-title {
     display: none;
   }

    img {
     max-width: 100%;
   }
   .sun {
     height: 96px;
     width: 116px;
     position: absolute;
     left: 15px;
     bottom: -65px;
   }
 }
 

 .text {
   color: ${colors.Hermione};
   margin-top: 160px;

   p {
     margin-bottom: 7px;
     font-size: 16px;
   }

   h3 {
     font-size: 21px;
   }
 }

 .buttons {
   margin-top: 30px;
 }

 .container-bottom {
   color: ${colors.Harry};
   font-size: 14px;
   position: absolute;
   bottom: 10px;
   left: 0; 
   right: 0; 
   margin-left: auto; 
   margin-right: auto;
   text-align: center;
   
   .new-user {
     margin-bottom: 46px;
   }

   span {
     color: ${colors.Hermione};
     cursor: pointer;
   }
   
   .line-bottom {
      height: 5px;
      width: 134px;
      background-color: ${colors.Harry};
      border-radius: 30px;
      display: block;
      margin: 0 auto;
    }
  }

  .sign-in-home {
    display: none;
  }

 @media (min-width: 1024px) {
    background-color: ${colors.Dobby};
    display: flex;
    padding: 0;

    .home-section {
      height: 100vh;
      width: 100%;
      min-width: 748px;
      padding: 64px;
      background-color: ${colors.Luna};
      position: relative;
    }

    .home-image {
      padding-top: 13px;

      .bepositive {
        width: 210px;
        height: 83px;
      }
      .home-title {
        display: block;
        color: ${colors.Harry};
        font-size: 45px;
        font-weight: bold;
        width: 500px;
        margin-left: 20px;
        margin-top: 32px;
      }
      .sun {
        width: 99px;
        height: 83px;
        position: absolute;
        left: 350px;
        bottom: -60px;
      }
    }

    .sign-in-home {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .text {
      display: none;
    }

    .buttons {
      display: none;
    }

    .container-bottom {
      display: none;
    }
  }

`