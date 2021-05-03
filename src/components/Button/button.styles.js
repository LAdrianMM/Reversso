import styled from 'styled-components'
import { colors } from '../../assets/colors'

const color = (bg) => {
  switch(bg){
    case 'Harry': return colors.Harry
    case 'Hermione': return colors.Hermione
    case 'Voldemort': return colors.Voldemort
    default: return 'transparent'
  }
}

const fontColor = (bg) => {
  switch(bg){
    case 'Harry': return colors.Harry
    case 'Hermione': return colors.Hermione
    case 'Voldemort': return colors.Harry
    default: return colors.Dobby
  }
}


export const ButtonStyled = styled.button`
  width: 100%;
  height: ${({ contained }) => contained ? '52px' : '48px'};
  background-color: ${({ contained, bg }) => contained ? color(bg) : 'transparent'};
  border-radius: 4px;
  border: 1px solid ${({ bg }) =>  color(bg)};
  outline: none;
  color: ${({ contained, bg }) => contained ? colors.Dobby : fontColor(bg) };
  margin-bottom: 14px;
  font-size: 14px;
  cursor: pointer;
  opacity: .95;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 3px;
  }

  &:hover {
    opacity: 1;
  }
`