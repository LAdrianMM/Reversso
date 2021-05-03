import styled from 'styled-components'
import { colors } from '../../assets/colors'

export const PopContainer = styled.div`
  background-color: rgba(0, 0, 0, .6);
  z-index: 99;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`
export const PopContent = styled.section`
  height: 324px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${colors.Dobby};
  border-radius: 20px 20px 0 0;
  padding: 0 24px;

  .line-top{
    width: 62px;
    height: 4px;
    border-radius: 15px;
    display: block;
    background-color: #C8C8C8;
    position: absolute; 
    top: 15px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
  }
  .title-container {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
    color: ${colors.Harry};

    button {
      background-color: transparent;
      border: none;
      position: absolute;
      left: 0;
    }
  }
  .buttons-container {
    margin-top: 28px;
  }

`