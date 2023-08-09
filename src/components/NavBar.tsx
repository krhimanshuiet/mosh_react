import React from 'react'

interface Props {
    cartItemsCount:number,
    onClear:() => void
}

const NavBar = ({cartItemsCount,onClear}:Props) => {
  return (
    <div className='bg-green-400'>
    <p>  NavBar : {cartItemsCount}</p>
      <button onClick={onClear} className="bg-blue-400 px-4">clear</button>
    </div>
  )
}

export default NavBar
