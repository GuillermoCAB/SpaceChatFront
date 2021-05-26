import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/space-chat-logo.png';
import rocketIcon from '../../assets/rocketIcon.png';
import astronautIcon from '../../assets/astronaut.png';
import clip from '../../assets/clip.png';

import { ENDPOINT } from '../../services/api';

import { MessageImage, InvisibleInput, Container, Header, ChatBoard, ChatHeader, ChatBody, RoomHeader, ConversationHeader, RoomBody, ConversationBody, Passenger, Messages, Sender, MessageItem, AnnexButton } from './styles';
import Axios from 'axios';

let socket;

function Chat() {

  const history = useHistory();
  const bottomMarker = useRef(null);

  const fileInput = useRef()

  const userName = useSelector(state => state.name, []);
  const image = useSelector(state => state.image, []);

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [messageItems, setMessageItems] = useState([])
  const [users, setUsers] = useState([])

  // LIFECYCLE

  useEffect(() => {
    getInitialMessages()
  }, [])

  const getInitialMessages = async () => {
    const fetch = await Axios.get("http://localhost:3333/message")

    console.log(fetch)
    setMessages(previous => [...previous, ...fetch.data]);
  }

  useEffect(() => {
    socket = io(ENDPOINT, {
      withCredentials: false
    });
    console.log('socket,', socket)

    socket.emit('guest.new', { name: userName, image }, () => alert('Um erro ocorreu, por favor tente novamente!'));
  }, [userName, image])

  useEffect(() => {
    socket.on('message.show', ({ sender, content, type }) => {
      setMessages(previous => [...previous, { sender, content, type }]);
    })
  }, [])

  useEffect(() => {
    socket.on('guest.show', ({ name, image }) => {
      setUsers(u => [...u, { name, image }]);
      if (name !== userName) {
        setMessages(m => [...m, { sender: 'admin', text: `${name} acabou de entrar na sala!` }])
      }
    })
  }, [])

  useEffect(() => {
    socket.on('updateList', (connectedUsers) => {
      setUsers(connectedUsers);
    })
  }, [])

  useEffect(() => {
    socket.on('leave', (payload) => {
      setUsers(payload.connectedUsers);
      console.log(payload.user)
      setMessages(m => [...m, { sender: 'admin', text: `${payload.user.name} acabou de sair da sala!` }])
    })
  }, [])


  useEffect(() => {
    renderMessages()
  }, [messages])

  // HANDLERS

  const sendMessage = async (e) => {
    e.preventDefault()

    if (message) {
      await Axios.post('http://localhost:3333/message', { sender: userName, content: message, type: 'text' })
      socket.emit('message.new', { sender: userName, content: message, type: 'text' }, () => alert('Um erro ocorreu, por favor tente novamente!'))
      setMessage('')
    }
  }

  const handleAnnex = () => {
    fileInput.current.click()
  }

  const handleUpload = async (e) => {
    console.log('Files', e.target.files)
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0]

      if (!verifyType(e.target.files[0])) {
        return alert('invalidType')
      }

      if (!verifySize(e.target.files[0])) {
        return alert('invalidSize')
      }

      let midiaData = new FormData()
      midiaData.append('file', e.target.files[0])

      let fetch = await Axios.post('http://localhost:3333/midiaUpload', midiaData)
      console.log(file)
      let midiaType = file.type.includes('image') ? 'image' : 'video'

      let message = { sender: userName, content: fetch.data, type: midiaType }

      socket.emit('message.new', message, () => alert('Um erro ocorreu, por favor tente novamente!'))

      await Axios.post('http://localhost:3333/message', message)
    }
  }

  // VERIFIERS

  const verifyType = (file) => {
    if (file.type.includes('image')) return true
    if (file.type.includes('video')) return true
    if (file.type.includes('audio')) return true

    return false
  }

  const getFileType = (file) => {
    if (file.type.includes('image')) return 'image'
    if (file.type.includes('video')) return 'video'
    if (file.type.includes('audio')) return 'audio'

    return false
  }

  const verifySize = (file) => {
    if (file.size <= 50000000) return true
    return false
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
        arr.push(renderMessageByType(message))
      })
    }

    setMessageItems(arr)
    bottomMarker.current.scrollIntoView({ behavior: "smooth" });
  }

  const renderMessageByType = (message) => {
    console.log(message)
    switch (message.type) {
      case 'text':
        return <MessageItem fromYou={message.sender === userName}>
          <img title={message.sender} src={findImage(message.sender)} alt="" />
          <span></span>
          <p>{message.content}</p>
        </MessageItem>

      case 'image':
        return <MessageItem fromYou={message.sender === userName}>
          <img title={message.sender} src={findImage(message.sender)} alt="" />
          <span></span>
          <MessageImage src={message.content} />
        </MessageItem>

      case 'video':
        return <MessageItem fromYou={message.sender === userName}>
          <img title={message.sender} src={findImage(message.sender)} alt="" />
          <span></span>
          <video autoPlay controls src={message.content} />
        </MessageItem>



      default:
        break;
    }
  }

  return <Container>
    <Header>
      <img onClick={() => history.push('/')} src={logo} alt="" />
    </Header>
    <ChatBoard>

      <ChatHeader>

        <RoomHeader>
          <h2>Passageiros</h2>
        </RoomHeader>

        <ConversationHeader>
          <img src={image} alt="" />
          <h3>{userName}</h3>
          <AnnexButton onClick={handleAnnex}>
            <img src={clip} alt="" />
          </AnnexButton>
          <InvisibleInput onChange={e => handleUpload(e)} type="file" ref={fileInput} />
        </ConversationHeader>

      </ChatHeader>

      <ChatBody>

        <RoomBody>
          {users.map(user => {
            return <Passenger>
              <img src={user.image} alt="" />
              <p>{user.name === userName ? "Você" : user.name}</p>
            </Passenger>
          })}
        </RoomBody>

        <ConversationBody>
          <Messages>
            {messageItems}
            <div style={{ height: "50px" }} ref={bottomMarker}></div>
          </Messages>

          <Sender>
            <textarea onKeyPress={e => e.which === 13 ? sendMessage(e) : null} placeholder="DIGITE ALGO..." type="text" value={message} onChange={e => setMessage(e.target.value)} />
            <button onClick={sendMessage}>
              <img src={rocketIcon} alt="" />
            </button>
          </Sender>
        </ConversationBody>

      </ChatBody>

    </ChatBoard>
  </Container>;
}

export default Chat;