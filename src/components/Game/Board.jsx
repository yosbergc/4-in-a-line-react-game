import './board.css'
import { Circle } from '../Circle/Circle'
import React from 'react'

const initialBoard = Array(16).fill(null)
const turns = {
  player1: 'X',
  player2: 'Y'
}
const WINNER_COMBOS = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15]
]
function Board () {
  const [board, setBoard] = React.useState(initialBoard)
  const [turn, setTurn] = React.useState(turns.player1)
  const [winner, setWinner] = React.useState()
  function handleClick (index) {
    const newBoard = [...board]
    const filledBoard = newBoard.some(box => box === null)
    if (newBoard[index]) return
    if (!filledBoard) {
      setWinner(false)
    }
    newBoard.splice(index, 1, turn)
    setBoard(newBoard)
    const newTurn = turn === turns.player1 ? turns.player2 : turns.player1
    setTurn(newTurn)
  }

  return (
    <section className='board'>
      {board.map((circle, index) => {
        return (
          <Circle key={index} handleClick={handleClick} index={index}>
            {circle}
          </Circle>
        )
      })}
    </section>
  )
}
export { Board }
