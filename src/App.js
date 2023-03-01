import React from 'react';
import Header from './header';
import Homepage from './Homepage';
import CreateBlog from './CreateBlog';
import UseState from './element';
import Counter from './Home/Counter';
import Compare from './Home/tenary';
import Items from './lists';
import Users from './UserList';
import Contact from './contact';
import Navbar from './assignment/mypage';



const App = () => {

  const blogs = [
    {
      id: 1,
      title:

        'My First Blog Page',
      author: 'saheed',
      body: 'my first page'
    },
    {
      id: 2,
      title: 'my Second Blog Page',
      author: 'saheed',
      body: 'my Second paragraph'
    },
    {
      id: 3,
      title: 'my Third Blog page',
      author: 'saheed',
      body: 'my Third paragraph'
    }
  ]
  const Secondblog = [
    {
      ids: 2,
      titles:
        'this is my New page',

      authors: '<Harun>',
      bodys:
        'this is my NewBlog Page'
    },
  ]

  return (
  
      <div className="App">
        {/**<Header />*/}
        
        {/*<Items/>*/}
        {/*<Users/>*/}
    
        
        
        

       {/** <Homepage blogs={blogs}/>*/} 
       {/**<CreateBlog Secondblog={Secondblog}/> */} 
        <Navbar/>
       {/**<Compare/> */} 
       {/**<UseState /> */ }
       {/**<Contact
          name="saheed"
          location="lugbe"
          phone="04044040440"
        />**/}
      </div>
  
  );
}

export default App;
