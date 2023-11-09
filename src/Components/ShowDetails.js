import React from 'react'
import { useSelector } from 'react-redux'

const ShowDetails = () => {

    const {name,age} = useSelector((state)=>state.form)

  return (
    <div>
        <h3>Name :{name}</h3>
        <h3>Age : {age}</h3>
      
    </div>
  )
}

export default ShowDetails
