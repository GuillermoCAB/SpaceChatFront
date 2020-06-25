import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/space-chat-logo.png';
import rocketIcon from '../../assets/rocketIcon.png';
import astronautIcon from '../../assets/astronaut.png';

import { ENDPOINT } from '../../services/api';

import { Container, Header, ChatBoard, ChatHeader, ChatBody, RoomHeader, ConversationHeader, RoomBody, ConversationBody, Passenger, Messages, Sender, MessageItem } from './styles';

let socket;

function Chat() {

  const history = useHistory();
  const bottomMarker = useRef(null);

  const userName = useSelector(state => state.name, []);
  const image = useSelector(state => state.image, []);

  const [message, setMessage] = useState('')  
  const [messages, setMessages] = useState([])
  const [messageItems, setMessageItems] = useState([])
  const [users, setUsers] = useState([])

  // LIFECYCLE

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('guest.new', {name: userName, image}, () => alert('Um erro ocorreu, por favor tente novamente!'));
  }, [userName, image])

  useEffect(() => {
    socket.on('message.show', ({sender, text}) => {
      setMessages(previous => [...previous, {sender, text}]);
    })
  }, [])

  useEffect(() => {
    socket.on('guest.show', ({name, image}) => {
      setUsers(u => [...u, {name, image}]);
      if(name !== userName) {
        setMessages(m => [...m, {sender: 'admin', text: `${name} acabou de entrar na sala!`}])
      }
    })
  }, [])

  useEffect(() => {
    renderMessages()
  },[messages])

  // HANDLERS

  const sendMessage = () => {
    if(message) {
      socket.emit('message.new', {sender: userName, text: message },  () => alert('Um erro ocorreu, por favor tente novamente!'))
      setMessage('')
    }
  }

  // UI

  const findImage = (sender) => {
    let payload = astronautIcon

    users.forEach(user => {
      console.log(user.image, user.name === sender)
      if (user.name === sender) {
        payload = user.image
      }        
    })

    return payload
  }

  // RENDERS 
  
  const renderMessages = () => {
    let arr = []

    if (messages) {
      messages.forEach(message => {
        console.log(findImage(message.sender))
        arr.push(<MessageItem fromYou={message.sender === userName}>
          <img title={message.sender} src={findImage(message.sender)} alt=""/>
          <span></span>
          <p>{message.text}</p>
        </MessageItem>)
      })
    }

    setMessageItems(arr)
    bottomMarker.current.scrollIntoView({ behavior: "smooth" });
  }

  return <Container>
    <Header>
      <img onClick={() => history.push('/')} src={logo} alt=""/>
    </Header>
    <ChatBoard>

      <ChatHeader>

        <RoomHeader>
          <h2>Passageiros</h2>
        </RoomHeader>

        <ConversationHeader>
          <img src={image} alt=""/>
          <h3>{userName}</h3>
        </ConversationHeader>

      </ChatHeader>

      <ChatBody>

        <RoomBody>
          {users.map(user => {
            return <Passenger>
              <img src={user.image} alt=""/>
              <p>{user.name === userName ? "Você" : user.name }</p>
            </Passenger>
          })}
        </RoomBody>

        <ConversationBody>
          <Messages>
            {messageItems}
            <div style={{height: "50px"}} ref={bottomMarker}></div>
          </Messages>

          <Sender>
            <textarea placeholder="DIGITE ALGO..." type="text" value={message} onChange={e => setMessage(e.target.value)} />
            <button onClick={sendMessage}>
              <img src={rocketIcon} alt=""/>
            </button>
          </Sender>
        </ConversationBody>

      </ChatBody>
      
    </ChatBoard>
  </Container>;
}

export default Chat;