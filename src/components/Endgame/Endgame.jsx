import './Endgame.css'
function Endgame ({ winner, resetGame }) {
  return (
    <section id='modal'>
      <section className='innerModal'>
        {winner === false ? <p>EMPATE</p> : <p>El ganador es: {winner}</p>}
        <button onClick={resetGame}>Iniciar de nuevo</button>
      </section>
    </section>
  )
}
export { Endgame }
