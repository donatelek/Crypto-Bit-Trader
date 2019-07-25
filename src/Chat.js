import React, { Component } from 'react';
import './scss/Chat.css';
import ChatAttachment from './ChatAttachment'

class Chat extends Component {
    state = { 
      showChat:false
     }
     handleShowChat=()=>{
       this.setState({
         showChat:!this.state.showChat
       })
     }

    render() { 
        return ( 
          <div className="chatWrapper">
            {!this.state.showChat?<div class="chat" onClick={this.handleShowChat} >
        <div class="container">
          <div class="support">Chat</div>
          <div class="supportIcon"><i class="far fa-comment"></i></div>
        </div>
      </div>:<div className="chatForm">
      <h1>Send Us a Message</h1>
        <div className="chatFormWrap">
        <label htmlFor="">E-mail Address</label>
        <br/>
        <input type="text"  />
        <br/>
        <label htmlFor="">How can we help you?</label>
        <br/>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br/>
        <label htmlFor="">Attachment</label>
        <br/>
        <ChatAttachment/>
        <br/>
        </div>
        <div className="buttonWrapper">
        <button className="cancel" onClick={this.handleShowChat} >Cancel</button>
        <button className="sendChatFrom">Send</button>
        </div>
        </div>}
    </div>
        )
    }
}
 
export default Chat;