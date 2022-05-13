import styled from 'styled-components';

export const $Cart = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

    header{
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100vw;
        height: 55px;
        font-size: 20px;

        span{
            color: white;
            margin: 0 20px 0 15px;
            font-size: 25px;
            font-weight: bold;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }

        p{
            color: white;
        }
    }
`;

export const $EmptyCart = styled.div`
margin-top: 15px;

border: 1px solid #a0c5e8;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
height: 30px;
color: #a0c5e8;
padding: 15px 40px;
`;