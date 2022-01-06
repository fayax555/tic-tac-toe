import styled from 'styled-components'

// App styles
export const AppWrapper = styled.div`
  max-width: 256px;
  padding: 20px;
  margin: auto;

  > p {
    font-size: 20px;
    font-weight: bold;
  }
`

export const BoxWrapper = styled.div`
  width: 252px;
  border: 2px solid #000;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  pointer-events: ${({ isWon }) => (isWon ? 'none' : 'auto')};
`

// Box.js styles
export const StyledBox = styled.div`
  height: 70px;
  width: 80px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 30px;
  cursor: pointer;
  background-color: ${({ isWinIdx }) => (isWinIdx ? 'lightgreen' : 'white')};
`
