import './game.css'
import { Circle } from '../Circle/Circle'
import { Endgame } from '../Endgame/Endgame'
import { useBoard } from '../../hooks/useBoard'
import React from 'react'

function Game () {
  const { board, handleClick, turn, winner, resetGame } = useBoard()
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
      {winner !== null && <Endgame winner={winner} resetGame={resetGame} />}
    </>
  )
}
export { Game }
