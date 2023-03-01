
import './style/buttons.css';
import './style/main.css';

const HomePage = ({blogs}) => {

    return ( 
        <main >
        <button className="btncl">LogOut</button>
        <h1>My blog</h1>
       {blogs.map((blog, index)=>(
        <div key={blog.index}>
        <h1>Title:cd{blog.title}</h1>
        <p>Author:{blog.author}</p>
        <p>body:{blog.body}</p>
        </div>
       ))}
       
       
        </main>
     )
}
 
export default HomePage;