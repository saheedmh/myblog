import {useState} from 'react';


const UseState = () => {
    const [name, setName] = useState('john')
    const handleClick =()=>{
        setName("mike");
    }
    return (
        <div className="home">

<h1>useState function</h1>
<p>{name}</p>
<button onClick={handleClick}>click here</button>
        </div>
    );
}
 
export default  UseState;