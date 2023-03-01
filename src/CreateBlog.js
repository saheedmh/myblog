import { useState } from "react";
import './style/formClass.css';

const CreateNewBlog = () => {
    const [title, setTitle,] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('')
    let blog = {}

    const handleSubmit = (e) => {

        e.preventDefault()
        blog = {
            title: title,
            author: author,
            body: body
        }
        setTitle('')
        setAuthor('')
        setBody('')
        console.log(blog)
    }

    return (
        <main >
            
                
                <form className="form-class">
                <h1>Create New Blog</h1>
                    <label >Title:</label><br />
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                    <label>Author</label><br />
                    <input type="text"  value={author} onChange={(e) =>setAuthor(e.target.value)}/><br/>
                    <label >Body</label><br/>
                    <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e) =>setBody(e.target.value)}></textarea><br/>

                    <button className='btnAdd' onClick={handleSubmit}>submit</button>
                </form>
            
        </main>
    )
}

export default CreateNewBlog;