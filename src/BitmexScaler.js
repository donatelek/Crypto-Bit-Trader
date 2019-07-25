import React, { Component } from 'react';
import './scss/BitmexScaler.css'
import ScalerAuthentication from'./ScalerAuthentication'
import ScalerInterface from './ScalerInterface'
import { connect } from 'react-redux'
class BitmexScaler extends Component {
    state = {   
        platform:'https://testnet.bitmex.com',
        officialChecked:false,
        testnetChecked:true
     }

     handlePlatformChange=(e)=>{
        const id = e.target.id
        if(id==='official'){
           this.setState({
               platform:'https://www.bitmex.com',
               officialChecked:true,
               testnetChecked:false
           })
        }else if(id==='testnet'){
           this.setState({
               platform:'https://testnet.bitmex.com',
               officialChecked:false,
               testnetChecked:true
           })
        }
    }

    render() { 
        return ( 
            <div className="bitmexScaler">
                {this.props.apiKey&&this.props.apiSecret?<ScalerInterface platform={this.state.platform} />:<ScalerAuthentication officialChecked={this.state.officialChecked} testnetChecked={this.state.testnetChecked} handlePlatformChange={this.handlePlatformChange} />}
            </div>
         );
    }
}
const mapStateToProps = state =>{
    return{
        apiKey:state.apiKey,
        apiSecret:state.apiSecret,
    }
  }
 
export default connect(mapStateToProps)(BitmexScaler);