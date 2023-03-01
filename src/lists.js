const Items = () => {
    const names = ['john', 'joy', 'sahad', 'fatima', 'ahmed'];
    return ( 
        <div className="Names">
            {names.map((val, key) =>{
            return<h1 key ={key}>{val}</h1>
            }
            )}
        </div>
     );
}
 
export default Items;