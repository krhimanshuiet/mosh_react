import React, { useState } from 'react'

const UpdateNestedObjects = () => {
    const [customer , setCustomer] = useState({
        name:'john',
        address:{
            city:'mumbai',
            zipcode:110077,
        }
    })
    const handleClick = () => {
        setCustomer({
            ...customer , address:{...customer.address , city:'delhi'}
        })
    }
  return (
    <div>
        <p>{customer.name} {customer.address.city}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default UpdateNestedObjects
