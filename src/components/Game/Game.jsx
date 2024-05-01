import './game.css'
import { Endgame } from '../Endgame/Endgame'
import { useBoard } from '../../hooks/useBoard'
import { Board } from '../Board/Board'
import { CurrentTurn } from '../CurrentTurn/CurrentTurn'
import React from 'react'

function Game () {
  const { board, handleClick, turn, winner, resetGame } = useBoard()
  return (
    <>
      <Board board={board} handleClick={handleClick} />
      <CurrentTurn turn={turn} />
      {winner !== null && <Endgame winner={winner} resetGame={resetGame} />}
    </>
  )
}
export { Game }
