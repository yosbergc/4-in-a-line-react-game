function CurrentTurn ({ turn }) {
  return (
    <section className='currentTurn'>
      <p>Le toca jugar al jugador de</p>
      <p className='currentTurnIcon'>{turn}</p>
    </section>
  )
}
export { CurrentTurn }
