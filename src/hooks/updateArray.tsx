import  { useState } from 'react'

const UpdateArray = () => {
    const 
    [tags , setTags] = useState(['happy' , 'cheerfull'])

    const handleClick = () => {

        //add
        setTags([...tags , "wonderfull"])
        //remove
        setTags(tags.filter(tag => tag !== 'happy'))
        // update
        setTags(tags.map(tag => tag === 'cheerfull' ? 'wow' : tag))
    }
  return (
    <div>
        <p>{tags.join(' ,')}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default UpdateArray
