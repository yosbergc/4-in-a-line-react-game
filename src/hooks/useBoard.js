import { WINNER_COMBOS, initialBoard, turns } from '../Consts/boardConst'
import confetti from 'canvas-confetti'
import React from 'react'
function useBoard () {
  const [board, setBoard] = React.useState(initialBoard)
  const [turn, setTurn] = React.useState(turns.player1)
  const [winner, setWinner] = React.useState(null)
  function checkBoard (currentBoard) {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c, d] = combo
      if (currentBoard[a] === currentBoard[b] && currentBoard[b] === currentBoard[c] && currentBoard[c] === currentBoard[d] && currentBoard[a] !== null) {
        return currentBoard[a]
      }
    }
    return null
  }
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
      confetti()
      return
    }
    const newTurn = turn === turns.player1 ? turns.player2 : turns.player1
    setTurn(newTurn)
  }
  function resetGame () {
    setBoard(initialBoard)
    setTurn(turns.player1)
    setWinner(null)
  }
  return { board, handleClick, turn, winner, resetGame }
}
export { useBoard }
