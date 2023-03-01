import {All} from './UserName'
const  Users= () => {
    const Userlist = [
        {name :"ele", resident:"lugbe", age:23},
        {name: 'sadiq', resident:"kubwa", age:30}
    ];
    return ( 
        <div className="list">
        {Userlist.map((user,key)=>{
                return<All name={user.name} resident={user.resident} age={user.age}/>
        })}
        </div>
     )
    }


            
        
         
    

 
export default Users ;
 