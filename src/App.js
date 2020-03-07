import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom'
import Landing from './components/landing/landing';
import Login from './components/landing/login';
import Signup from './components/landing/signup';
import User from './components/userPage/user';
import Verify from './components/landing/verifyEmail';
import ActualBlog from './components/landing/viewBlog';
import UserProfile from './components/userPage/userProfile'
import socketIOClient from 'socket.io-client'

let socket 
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      endpoint:"https://glacial-inlet-12222.herokuapp.com"
    }
    
  }
  componentDidMount(){
    socket = socketIOClient(this.state.endpoint)
    socket.on("connected",data=>{
      console.log(data)
    })
  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/user" component={User}/>
          <Route exact path="/verify/email" component={Verify}/>
          <Route exact path="/actual/blog" component={ActualBlog}/>
          <Route exact path="/user/profile" component={UserProfile}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
export {
  socket
}

