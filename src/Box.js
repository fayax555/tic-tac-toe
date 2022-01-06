// import { useState } from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
  height: 65px;
  width: 80px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 30px;
  cursor: pointer;
`

const Box = ({ turn, setTurn, id, val, setBoxes }) => {
  const handleValue = () => {
    if (val) return

    setTurn(turn === 'X' ? 'O' : 'X')

    setBoxes((boxes) => {
      const updatedBoxList = boxes.map((box) =>
        box.id === id ? { ...box, val: turn } : box
      )

      return updatedBoxList
    })
  }

  return <StyledBox onClick={handleValue}>{val}</StyledBox>
}

export default Box
