import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count+1)
  }
  const decrease = () =>{
    setCount(count - 1);
  }
  const reset= ()=>{
    setCount(0 );
  }
    return ( 
        <div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>reset</button>
            {count}
        </div>
    );
}
 

export default Counter;