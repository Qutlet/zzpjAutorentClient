import React, { Component } from 'react'
import SockJsClient from 'react-stomp';
import styled from 'styled-components';

class Chat extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        //const {content, sender, recipient, creationTime} = this.props.chat;
        return (
            <>
            <SockJsClient url='http://localhost:8080/chat-app/'
                              topics={['/topic/messages']}
                              onConnect={() => {
                                  console.log("connected");
                              }}
                              onDisconnect={() => {
                                  console.log("Disconnected");
                              }}
                              onMessage={(msg) => {
                                  var jobs = this.state.messages;
                                  jobs.push(msg);
                                  this.setState({messages: jobs});
                                  console.log(this.state);
                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
                <ChatText> Wiadomości </ChatText>
                <ChatWrapper>
                    <TextField>
                    </TextField>
                    <Button> Wyślij </Button>
                </ChatWrapper>
            </>
        )
    }
}

export default Chat;

export const ChatText = styled.h1`
    padding: 0.2rem 0.2rem;
    font-size: 3rem;
    text-align: center;
    margin-top: 10px;

`;

export const ChatWrapper = styled.div`
    diplay: flex;
    flex-direction: horizontal;
    width: 500px;
    height: 600px;
    background: #e1edeb;
    margin-right: auto;
    margin-left: auto; 
`;

export const TextField = styled.input`
    height: 40px;
    width: 430px;
    margin-top: 560px;
    border-style: solid;
    border-color: #2a2c70;
`;

export const Button = styled.button`
    text-transform: capitalize;
    font-size:1rem;
    width: 70px;
    height: 40.5px;
    background: #2a2c70;
    color: #ffffff;
    border-style: solid;
    border-color: #2a2c70;
`;