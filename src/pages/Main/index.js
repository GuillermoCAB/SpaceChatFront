import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import logo from '../../assets/space-chat-logo.png'
import BG from '../../assets/background.png'

import { api } from '../../services/api';

import { Container, Content, Header, Button, Background } from './styles';

function Main() {

    const history = useHistory();
    const dispatch = useDispatch();

    const signIn = async () => {
        try {
            let fetch = await api.get()

            let person = fetch.data.results[0]

            let payload = {
                name: person.name.first + ' ' + person.name.last,
                image: person.picture.medium
            }

            dispatch({ type:'SINGIN', payload})

            history.push('/chat')
        } catch (error) {
            alert('Falhamos ao conecta-lo com a nave mãe, por favor tente novamente!')
        }
    }

    return <Container>
        <Header>
            <img src={logo} alt=""/>
        </Header>
        <Content>
            <h1>Bem vindo ao Space Chat</h1>
            <h3>O Space Chat é um chat onde você pode conversar com pessoas de todos os lugares da galáxia!</h3>
            <h3>Para evitar uma crise diplomática entre galáxias, daremos um nome e uma foto anônimos para você utilizar quando entrar.</h3>
            <Button onClick={() => signIn()}>Embarcar nessa Nave</Button>
        </Content>
        <Background src={BG} alt=""/>
    </Container>;
}

export default Main;