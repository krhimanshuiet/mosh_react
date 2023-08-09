import  { useState } from 'react'

const UpdateObj = () => {
    const [drink , setDrink] = useState({
        title:"Americano",
        price:5
    })
    const handleClick = () => {
        setDrink({...drink, price:drink.price + 5})
    }

  return (
    <div>
        <p>{drink.price}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default UpdateObj
