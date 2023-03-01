
const  Compare = () => {
    const age = 14; 
    return (  
        <div className="Age">
            {age >=15 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
        </div>
    );
}
 

export default Compare ;