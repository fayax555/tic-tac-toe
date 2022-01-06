import { useState, useEffect } from 'react'
import Box from './Box'
import { sliceIdx, initialBoxValues } from './data'
import { AppWrapper, BoxWrapper } from './style'

function App() {
  const [turn, setTurn] = useState('O')
  const [boxes, setBoxes] = useState(initialBoxValues)
  const [win, setWin] = useState({ isWon: false, indexes: [], symbol: '' })

  useEffect(() => {
    sliceIdx.forEach((item) => {
      const boxSlice = boxes
        .filter((box, i) => (item.includes(i) ? box : null))
        .map(({ val }) => val)

      const uniqueSymbols = [...new Set(boxSlice)]
      const isWon =
        uniqueSymbols.length === 1 && ['O', 'X'].includes(uniqueSymbols[0])

      if (isWon) {
        setWin({ isWon: true, indexes: item, symbol: turn === 'X' ? 'O' : 'X' })
      }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxes])

  return (
    <AppWrapper>
      <button
        onClick={() => {
          setTurn('O')
          setBoxes(initialBoxValues)
          setWin({ isWon: false, indexes: [], symbol: '' })
        }}
      >
        Reset
      </button>
      {win.isWon ? <p>Player {win.symbol} won</p> : <p>Turn: {turn}</p>}

      <BoxWrapper isWon={win.isWon}>
        {boxes.map((box) => (
          <Box
            key={box.id}
            {...{
              ...box,
              turn,
              setTurn,
              setBoxes,
              isWinIdx: win.indexes.includes(box.id),
            }}
          />
        ))}
      </BoxWrapper>
    </AppWrapper>
  )
}

export default App
