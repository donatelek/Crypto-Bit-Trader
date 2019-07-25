import React, { Component } from 'react';
import { connect } from 'react-redux'
class UserInformation extends Component {
    state = {  }
    render() { 
        const userInfo = ()=>{
            if(this.props.user){
                return <div className='userInformation'>Logged as {this.props.user}</div>
            }
        }
        return ( 
            <>
            {userInfo()}
            </>
         );
    }
}
 
const mapStateToProps = state =>{
    return{
        user:state.user
    }
  }

export default connect(mapStateToProps)(UserInformation);