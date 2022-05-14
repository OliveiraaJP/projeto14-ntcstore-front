import styled from 'styled-components';

export const $Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
height: 100px;
width: 80vw;
margin-bottom: 13px;

    .shirt{
        height: 80%;
        border-radius: 15px;
    }

    span{
        margin-left: -25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

export const $Trashcan = styled.img`
height: 30%;
font-size: 20px;
`;

export const $Span = styled.span`
display: flex;
flex-direction: column;
    
    div {
        border: 1px solid lightgray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70px;
        height: 30%;
        padding: 0px 5px;
        font-size: 25px;
         p{
             font-weight: bold;
             font-family: 'Courier New', Courier, monospace;
         }
    }
`;