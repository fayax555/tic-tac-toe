import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Box from './Box'

const AppWrapper = styled.div`
  max-width: 300px;
  padding: 20px;
  margin: auto;

  > p {
    font-size: 20px;
    font-weight: bold;
  }
`

const BoxWrapper = styled.div`
  max-width: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

const slices = [
  [0, 1, 2],
  [3, 4, 6],
  [6, 9],
]

function App() {
  const [turn, setTurn] = useState('O')
  const [boxes, setBoxes] = useState([
    { id: 1, val: '' },
    { id: 2, val: '' },
    { id: 3, val: '' },
    { id: 4, val: '' },
    { id: 5, val: '' },
    { id: 6, val: '' },
    { id: 7, val: '' },
    { id: 8, val: '' },
    { id: 9, val: '' },
  ])
  const [win, setWin] = useState({ sliceNum: [], symb: '' })

  useEffect(() => {
    slices.forEach(([start, end], index) => {
      const slice = boxes.slice(start, end).map(({ val }) => val)
      const narr = [...new Set(slice)]
      const isWon = narr.length === 1 && ['O', 'X'].includes(narr[0])

      if (isWon) {
        setWin({ sliceNum: [start, end], symb: turn === 'X' ? 'O' : 'X' })
        console.log({ sliceNum: [start, end], symb: turn === 'X' ? 'O' : 'X' })
      }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxes])

  useEffect(() => {
    if (win.sliceNum.length) {
      console.log(
        `Player ${win.symb} won, sliceNum: ${win.sliceNum[0]}, ${win.sliceNum[1]}`
      )
    }
  }, [win])
  return (
    <AppWrapper>
      <p>Turn: {turn}</p>
      <BoxWrapper>
        {boxes.map((box) => (
          <Box key={box.id} {...{ ...box, turn, setTurn, setBoxes }} />
        ))}
      </BoxWrapper>
    </AppWrapper>
  )
}

export default App
