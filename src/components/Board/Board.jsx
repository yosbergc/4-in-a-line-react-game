import { Circle } from '../Circle/Circle'
function Board ({ board, handleClick }) {
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
