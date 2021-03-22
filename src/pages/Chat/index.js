import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useReactMediaRecorder } from "react-media-recorder";

import logo from '../../assets/space-chat-logo.png';
import rocketIcon from '../../assets/rocketIcon.png';
import astronautIcon from '../../assets/astronaut.png';

import { ENDPOINT } from '../../services/api';

import { Container, Header, ChatBoard, ChatHeader, ChatBody, RoomHeader, ConversationHeader, RoomBody, ConversationBody, Passenger, Messages, Sender, MessageItem, Media, AudioRecorder, IconBox, AudioBox, CheckIcon, CloseIcon } from './styles';
import { FormatColorReset } from '@styled-icons/material-rounded';

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
  const [isOpen, setIsOpen] = useState(false)

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl
  } = useReactMediaRecorder({ 
    audio: true, 
    blobPropertyBag: {
      type: "audio/wav"
    } 
  });

  console.log("Status do audio =>", status)

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

  // useEffect(() => {
  //   handleAudioBlob()
  // },[])
  

  // HANDLERS
  const handleAudioBlob = async () => {
    const audioBlob = await fetch(mediaBlobUrl).then(r => r.blob());
    console.log("Audio Blob => ", audioBlob);
    // const audiofile = new File([audioBlob], "audiofile.webm", { type: "audio/webm" })
    var reader = new FileReader();
    reader.readAsDataURL(audioBlob); 
    reader.onloadend = function() {
      var base64data = reader.result;                
      return base64data
    }
  }

  const handleAudio = () => {
    setIsOpen(true)
    startRecording()
  }

  const handleStopAudio = () => {
    stopRecording()
    setIsOpen(false)
    clearBlobUrl()
  }

  const handleSendAudio = () => {
    stopRecording()
    setIsOpen(false)
  
  }

  const sendMessage = (e) => {
    e.preventDefault()

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

          {isOpen ? <AudioBox >
            <IconBox width="50px" height="50px" color="red">
              <CloseIcon onClick={handleStopAudio} />
            </IconBox>
            <IconBox width="50px" height="50px">
              <CheckIcon onClick={handleSendAudio} />
            </IconBox>
          </AudioBox> : null}

          <Sender>
            <textarea onKeyPress={e => e.which === 13 ? sendMessage(e) : null} placeholder="DIGITE ALGO..." type="text" value={message} onChange={e => setMessage(e.target.value)} />
            <IconBox margin="0 10px 0 10px">
              <Media />
            </IconBox>
            <IconBox onClick={handleAudio}>
              <AudioRecorder />
            </IconBox>
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