import './board.css'
import { Circle } from '../Circle/Circle'
import React from 'react'
function Board () {
    const initialBoard = Array(16).fill(null)
    const [board, setBoard] = React.useState(initialBoard)
    return (<section className="board">
        {board.map((circle, index) => {
            return <Circle key={index}/>
        })}
    </section>)
}
export { Board }