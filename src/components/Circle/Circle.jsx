import './Circle.css'
function Circle ({ handleClick, index, children }) {
  return (
    <div className='freeTurn' onClick={() => { handleClick(index) }}>
      {children}
    </div>
  )
}
export { Circle }
