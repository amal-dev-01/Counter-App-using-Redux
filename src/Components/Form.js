import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submitForm } from '../redux/form/formAction'





const Form = () => {
    const [name,setName]=useState("")
    const [age,setAge]=useState(0)
    const dispatch =useDispatch()


    return (
    <div>
   <input type='text' value={name} onChange={(e) => setName(e.target.value)}/><br/>
<input type='text' value={age} onChange={(e) => setAge(e.target.value)}/><br/>

<button onClick={() => dispatch(submitForm({name, age}))}>Submit</button>
      
    </div>
  )
}

export default Form
