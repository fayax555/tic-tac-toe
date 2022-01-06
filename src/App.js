import { useState, useEffect } from 'react'
import Box from './Box'
import { sliceIdx, initialBoxValues } from './data'
import { AppWrapper, BoxWrapper } from './style'

function App() {
  const [turn, setTurn] = useState('O')
  const [boxes, setBoxes] = useState(initialBoxValues)
  const [win, setWin] = useState({ isWin: false, indexes: [], symbol: '' })
  const [isDraw, setIsDraw] = useState(false)

  useEffect(() => {
    const winItem = sliceIdx
      .map((item) => {
        const boxSlice = boxes
          .filter((box) => item.includes(box.id) && box)
          .map(({ val }) => val)

        const uniqueSymbols = [...new Set(boxSlice)]
        const isWin =
          uniqueSymbols.length === 1 && ['O', 'X'].includes(uniqueSymbols[0])

        if (isWin) return item
        return null
      })
      .filter(Boolean)

    if (winItem.length) {
      setWin({
        isWin: true,
        indexes: winItem[0],
        symbol: turn === 'X' ? 'O' : 'X',
      })
      return
    }

    const boxValList = boxes.map(({ val }) => val).filter((val) => val !== '')
    if (boxValList.length === 9) setIsDraw(true)
  }, [boxes, turn])

  return (
    <AppWrapper>
      <button
        onClick={() => {
          setTurn('O')
          setBoxes(initialBoxValues)
          setWin({ isWin: false, indexes: [], symbol: '' })
          setIsDraw(false)
        }}
      >
        Reset
      </button>
      {win.isWin && !isDraw ? (
        <p>Player {win.symbol} won</p>
      ) : isDraw ? (
        <p>DRAW</p>
      ) : (
        <p>Turn: {turn}</p>
      )}
      <BoxWrapper isWin={win.isWin}>
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
