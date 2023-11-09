import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementBy5, increment, incrementBy5 } from '../redux/counter/counterAction';



const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const count2 = useSelector((state) => state.counter.count2);

    const dispatch =useDispatch()
  return (
    <div>
        <div>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>

Count {count}
<button onClick={()=>dispatch(increment())}>Increment</button>
        </div>
       
<br></br>
        <div>
<button onClick={()=>dispatch(incrementBy5(5))}>IncrementBy5</button>
{count2}
<button onClick={()=>dispatch(decrementBy5())}>DecrementBy5</button>

        </div>
      
    </div>
  )
}

export default Counter
