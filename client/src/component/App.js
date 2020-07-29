import React from 'react';
import Header from "./header/Header"
import LoginButton from './header/LoginButton';
import PostList from './postlist/PostList';
import Profile from './profile/Profile';

class App extends React.Component{

  constructor(){
    super()
  }


  render(){
    return (
      <div>
        <Header />
        <Profile/>
        <PostList />
      </div>

    )
  }
  
}

export default App;
