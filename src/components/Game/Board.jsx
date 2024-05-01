import './board.css'
import { Circle } from '../Circle/Circle'
import React from 'react'

const initialBoard = Array(16).fill(null)
const turns = {
  player1: '❌',
  player2: '🔵'
}
const WINNER_COMBOS = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12]
]
function checkBoard (currentBoard) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c, d] = combo
    if (currentBoard[a] === currentBoard[b] && currentBoard[b] === currentBoard[c] && currentBoard[c] === currentBoard[d] && currentBoard[a] !== null) {
      return currentBoard[a]
    }
  }
  return null
}
function Board () {
  const [board, setBoard] = React.useState(initialBoard)
  const [turn, setTurn] = React.useState(turns.player1)
  const [winner, setWinner] = React.useState(null)
  function handleClick (index) {
    const newBoard = [...board]
    if (newBoard[index]) return
    if (winner !== null) return
    newBoard.splice(index, 1, turn)
    setBoard(newBoard)
    const filledBoard = newBoard.some(box => {
      console.log(box === null)
      return box === null
    })
    if (!filledBoard) {
      setWinner(false)
    }
    const isWinner = checkBoard(newBoard)
    if (isWinner !== null) {
      setWinner(isWinner)
      return
    }
    const newTurn = turn === turns.player1 ? turns.player2 : turns.player1
    setTurn(newTurn)
  }
  console.log(winner)
  return (
    <>
      <section className='board'>
        {board.map((circle, index) => {
          return (
            <Circle key={index} handleClick={handleClick} index={index}>
              {circle}
            </Circle>
          )
        })}
      </section>

      <section className='currentTurn'>
        <p>Le toca jugar al jugador de</p>
        <p className='currentTurnIcon'>{turn}</p>
      </section>
      {winner === false && <p>EMPATE</p>}
      {winner !== null && winner !== false && <p>{winner}</p>}
    </>
  )
}
export { Board }
