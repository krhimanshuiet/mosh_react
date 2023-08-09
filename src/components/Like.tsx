import  {useState} from 'react'
import {AiFillHeart , AiOutlineHeart} from 'react-icons/ai'

interface  Props  {
    onClick:() => void
}

const Like = ({onClick}:Props) => {
   const [status , setStatus] = useState(false)
   const handleClick = () => {
    setStatus(!status)
    onClick();
   }
   
  return (
    <button onClick={handleClick}>
     {status ?  <AiFillHeart color="#ff6b81" size="80"/> :  <AiOutlineHeart color="#ff6b81" size="80"/>}
    </button>
  )
}

export default Like
