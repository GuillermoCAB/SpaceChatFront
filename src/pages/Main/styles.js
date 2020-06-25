import styled from 'styled-components';

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

export const Content = styled.div`
    width: 80%;
    margin: 25px 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
        margin: 0 auto;

        font: Bold 32px/38px Nunito;
        text-align: center;
        color: ${props => props.theme.white};

        @media only screen and (max-device-width: 500px) {
            font: Bold 24px/30px Nunito;
        }
    }

    h3 {
        margin: 10px auto;

        font: Normal 18px/24px Nunito;
        text-align: center;
        color: ${props => props.theme.lightGray};

        @media only screen and (max-device-width: 500px) {
            font: Bold 14px/20px Nunito;
        }
    }
`;

export const Button = styled.button`
    height: 45px;
    margin: 40px auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    border-radius: 7px;
    border: none;
    background-color: ${props => props.theme.green};
    font: Normal 18px/24px Nunito;
    text-align: center;
    color: ${props => props.theme.white};
    box-shadow: 4px 4px 10px 2px #0d0d0dAA;
    transition: all ease-in 0.3s;

    &:hover {
        cursor: pointer;
        filter: brightness(0.7);
    }
`;

export const Background = styled.img`
    width: 1200px;
    position: fixed;
    bottom: -180px;
    z-index: -1;

    opacity: 0.17;

    @media only screen and (max-device-width: 500px) {
        width: 100%;
        bottom: 0px;
    }
`;
