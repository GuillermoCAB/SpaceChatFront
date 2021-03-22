import styled from 'styled-components';
import { Paperclip, Mic, Check2, X } from '@styled-icons/bootstrap/'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background: transparent linear-gradient(160deg, #0C4873 0%, #06243A 100%) 0% 0% no-repeat padding-box;
    opacity: 0.92;

    h2 {
        font: Bold 24px/30px Nunito;
        text-align: center;
        color: ${props => props.theme.white};

        @media only screen and (max-device-width: 500px) {
            font: Bold 18px/24px Nunito;
        }
    }

    h3 {
        font: Normal 18px/24px Nunito;
        text-align: center;
        color: ${props => props.theme.lightGray};

        @media only screen and (max-device-width: 500px) {
            font: Bold 14px/20px Nunito;
        }
    }
`;

export const Header = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 200px;
        height: auto;

        opacity: 1;

        @media only screen and (max-device-width: 500px) {
            width: 80px;
        }
    }
`;

export const ChatBoard = styled.div`
    width: 80%;
    height: 100%;
    max-height: calc(100vh - 220px);
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color: ${props => props.theme.gray};
    border-radius: 7px;

    @media only screen and (max-device-width: 500px) {
        width: 100%;
        max-height: calc(100vh - 80px);
        border-radius: 7px 7px 0 0;
    }
`;

export const ChatHeader = styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ChatBody = styled.div`    
    width: 100%;
    height: calc(100vh - 280px);

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-device-width: 500px) {
        width: 100%;
        height: calc(100vh - 140px);
    }
`;

export const RoomHeader = styled.div`
    width: 30%;
    height: 60px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px; 

    background-color: ${props => props.theme.green};
    border-radius: 7px 0 0 0;
    
    @media only screen and (max-device-width: 500px) {
        display: none;
    }
`;

export const RoomBody = styled.div`
    width: 30%;
    height: 100%;
    overflow: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    

    background-color: ${props => props.theme.green + '55'};
    border-radius: 0 0 0 7px;

    &::-webkit-scrollbar {
        width: 0;
    }
    
    @media only screen and (max-device-width: 500px) {
        display: none;
    }
`;

export const ConversationHeader = styled.div`
    width: 70%;
    height: 60px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 40px;    

    background-color: ${props => props.theme.lightGreen};
    border-radius: 0 7px 0 0;
    
    @media only screen and (max-device-width: 500px) { 
        border-radius: 7px 7px 0 0;  
        width: 100%;
    }

    img {
        width: 45px;
        height: 45px;
        margin: 0 20px 0 0;

        border-radius: 100%;
    }
`;

export const ConversationBody = styled.div`
    width: 70%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; 

    background-color: ${props => props.theme.lightGreen + '55'};
    border-radius: 0 0 7px 0;
    
    @media only screen and (max-device-width: 500px) {   
        border-radius: 0;
        width: 100%;
    }
`;

export const Passenger = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;

    img {
        width: 30px;
        height: 30px;
        margin: 0 20px 0 0;

        border-radius: 100%;
    }

    p {
        font: Normal 18px/24px Nunito;
        text-align: center;
        color: ${props => props.theme.lightGray};

        @media only screen and (max-device-width: 500px) {
            font: Bold 14px/20px Nunito;
        }
    }
`;

export const Messages = styled.div`
    width: 100%;
    height: calc(100% - 50px);
    overflow: auto;

    padding: 20px 20px 20px 50px;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const Sender = styled.div`
    width: 100%;
    height: 100px;
    
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    padding: 0 10px;

    background-color: ${props => props.theme.lightGray};
    border-radius: 0 0 7px 0;
    
    @media only screen and (max-device-width: 500px) {   
        border-radius: 0;
    }

    textarea {
        width: calc(100% - 70px);
        height: 70px;

        padding: 10px;

        border-radius: 7px;
        resize: none;
        font: Normal 18px/24px Nunito;

        &::-webkit-scrollbar {
            width: 0;
        }
    }

    button {
        width: 50px;
        height: 50px;
        margin: 0 0 0 10px;

        border-radius: 100%;
        border: none;
        background-color: ${props => props.theme.green};

        &:hover {
            cursor: pointer;
        }

        img {
            width: 40px;
        }
    }
`;

export const MessageItem = styled.div`
    width: 300px;
    height: auto;
    min-height: 40px;
    margin: ${props => props.fromYou ? '10px 0 10px auto' : '10px auto 10px 0'};

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px 10px;

    border-radius: 7px;
    background-color: ${props => props.fromYou ? props.theme.darkGray : props.theme.green};

    p {        
        margin: ${props => props.fromYou ? '-25px 0 0 0' : '-35px 0 0 0'};

        max-width: 280px;
        word-break: break-word;
        font: Normal 18px/24px Nunito;
        text-align: left;
        color: ${props => props.theme.lightGray};

        @media only screen and (max-device-width: 500px) {
            font: Bold 14px/20px Nunito;
            margin: ${props => props.fromYou ? '-25px 0 0 0' : '0 0 0 10px'};
        }
    }

    span {
        width: 0; 
        height: 0;
        position: relative;
        margin: ${props => props.fromYou ? "5px 0 auto 290px" : "5px 290px auto 5px"};

        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;         
        border-left: ${props => props.fromYou ? "10px solid #777" : "none"}; 
        border-right: ${props => props.fromYou ? "none" : "10px solid #139A43"}; 

        @media only screen and (max-device-width: 500px) {
            width: 200px;
            margin: ${props => props.fromYou ? "5px 0 auto 190px" : "5px 0 auto -185px"};
        }
    }

    img {        
        width: 30px;
        height: 30px;     
        position: relative;
        margin: 0 0 0 -55px;
        
        display: ${props => props.fromYou ? "none" : "flex"};

        border-radius: 100%;
    }

    @media only screen and (max-device-width: 500px) {
        width: 200px;
    }
`;

export const AudioBox = styled.div`
    position: absolute;
    transition: all 0.3s ease;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    
    width: ${p => p.isActive ? "300px" : "300px"};
    height: ${p => p.isActive ? "100px" : "100px"};;
    
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;

    margin: 446px 0 0 750px;
`;

//ICONES

export const IconBox = styled.div`
    width: ${p => p.width || "35px"};
    height: ${p => p.height || "35px"};
    background: ${p => p.color || "#139A43"};
    cursor: pointer;
    border-radius: 100px;
    /* padding: 6px; */
    margin: ${p => p.margin };
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${p => p.animationOn ? "blinker 1s linear infinite" : ""};

    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }

    :hover{
        opacity: 0.8;
    }

    :active{
        transform: scale(0.9);
    }
`;

export const IconBoxLabel = styled.label`
    width: ${p => p.width || "35px"};
    height: ${p => p.height || "35px"};
    background: ${p => p.color || "#139A43"};
    cursor: pointer;
    border-radius: 100px;
    /* padding: 6px; */
    margin: ${p => p.margin };
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${p => p.animationOn ? "blinker 1s linear infinite" : ""};

    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }

    :hover{
        opacity: 0.8;
    }

    :active{
        transform: scale(0.9);
    }
`;

export const IconBoxInput = styled.input`
  display: none;

`;

export const Text = styled.p`
    font-size: 14px;
    color: black;
    margin: 0 0 0 -28px;
`;

export const Media = styled(Paperclip)`
    width: 20px;
    height: auto;
    color: white;
    padding: 0;
    margin: 0;
`;

export const AudioRecorder = styled(Mic)`
    width: 20px;
    height: auto;
    color: white;
    padding: 0;
    margin: 0;
`;

export const CheckIcon = styled(Check2)`
    width: 36px;
    height: auto;
    color: white;
    padding: 0;
    margin: 0;
`;

export const CloseIcon = styled(X)`
    width: 42px;
    height: auto;
    color: white;
    padding: 0;
    margin: 0;
`;



