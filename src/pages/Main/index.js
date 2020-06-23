import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/space-chat-logo.png'
import BG from '../../assets/background.png'

import { Container, Content, Header, Button, Background } from './styles';

function Main() {

    const history = useHistory()

    const [name, setName] = useState('');

    return <Container>
        <Header>
            <img src={logo} alt=""/>
        </Header>
        <Content>
            <h1>Bem vindo ao Space Chat</h1>
            <h2>O Space Chat é um chat onde você pode conversar com pessoas de todos os lugares da galáxia!</h2>
            <h2>Para evitar uma crise diplomática entre galáxias, daremos um nome e uma foto anônimos para você utilizar quando entrar.</h2>
            <Button onClick={() => history.push('/chat')}>Embarcar nessa Nave</Button>
        </Content>
        <Background src={BG} alt=""/>
    </Container>;
}

export default Main;