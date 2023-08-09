import  { useState } from 'react'

interface Props {
    children: string,
    maxChars?:number
}

const ExpandableText = ({children , maxChars=200}:Props) => {
    const [more , setMore] = useState(false)
  if(children.length <= maxChars) return  <p>{children}</p>
 
  const handleClick = () => {
    setMore(!more)
  }
  return (
    <div>
        {!more ? `${children.substring(0, maxChars)}...` : children}
        <button onClick={handleClick}  className='bg-slate-400 px-2 '>{!more ? 'more' : 'less'}</button>
    </div>
  )
}

export default ExpandableText
