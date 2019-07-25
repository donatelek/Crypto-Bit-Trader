import React, { Component } from 'react';
import './scss/style.css'
import { connect } from 'react-redux'
import * as actionCreators from './store/actions'
import Chat from './Chat';
import MainPage from './MainPage'
import {Nav,NavLogo} from './Nav'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import {Route,withRouter} from 'react-router-dom';
import * as actionTypes from './store/actions'
class App extends Component {
  state = {}
  // 1150
  //  jutro live price z bitmexa, czyscimy kod naprawiamy bledy z konsoli dodajemy na githuba aktualizujemy portfolio naprawiamy znalezione bugi we wszystkich projektach dodajemy usunieta baze danych w edm piszemy CV
   UNSAFE_componentWillMount(){
    const token = localStorage.getItem('bitTraderUser');
    if(!token){
       return
    }
    fetch('http://localhost:3005/getlocalstorage',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
          token
      })
  }).then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.user&&data.token){
      const user=data.user
      const token=data.token
      this.props.saveUser(user,token)
    }else {
      this.props.history.push('/login')
    }
  })

  //    const token = localStorage.getItem('bitTraderUser');
  //   if(!token){
  //      return
  //   }
  //   fetch('http://localhost:3005/getlocalstorage',{
  //     method:'post',
  //     headers:{'Content-Type':'application/json'},
  //     body: JSON.stringify({
  //         token
  //     })
  // }).then(res=>res.json())
  // .then(data=>{
  //   console.log(data)
  //   if(data.user&&data.token){
  //     const user=data.user
  //     const token=data.token
  //     this.props.saveUser(user,token)
  //   }else{
  //     this.props.history.push('/login')
  //   }
    
    // if(user[1]){
    //   console.log(user[1])
    //   this.props.saveUser(user,hash)
    //   localStorage.setItem('bitTraderUser', hash)
    //   this.props.history.push('/dashboard')
    //   // this.props.handleSaveUser()
    //  }else{
    //   this.props.history.push('/login')
    //  }
  // })
}
  render() { 
      const path = this.props.location.pathname;
    return ( 
   <>
      {this.props.user==='testtest'&&<div>njkasdnjkadsnjnjkads</div>}
      {path!=='/dashboard'&&<Nav/>}
          <div class="body-wrap" id='wrapper'>
        {path!=='/dashboard'&&<NavLogo/>}
        <Route path='/register' exact='true' render={(props)=>(
   <Register {...props}/>
 )}/>
        <Route path='/login' exact='true' render={(props)=>(
   <Login {...props}/>
 )}/>
<Route path='/' exact='true' render={(props)=>(
    <MainPage  />
 )}/>
    {this.props.isAuth&&<Route path='/dashboard' exact='true' component={Dashboard}/>}
      {path!=='/dashboard'&&<Footer/>}
      </div>
      <Chat/>
      </>
     );
  }
}
const mapStateToProps = state =>{
  return{
      path:state.path,
      email:state.email,
      isAuth:state.isAuth
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    handleSaveUser:()=>dispatch(actionCreators.handleSaveUser()),
    saveUser:(user,token)=>dispatch(actionTypes.saveUser(user,token))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));

