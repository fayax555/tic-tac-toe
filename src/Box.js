import { StyledBox } from './style'

const Box = ({ turn, setTurn, id, val, setBoxes, isWinIdx }) => {
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

  return (
    <StyledBox isWinIdx={isWinIdx} onClick={handleValue}>
      {val}
    </StyledBox>
  )
}

export default Box
