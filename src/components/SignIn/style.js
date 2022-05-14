import styled from 'styled-components';

export const $SignIn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 110px;
input,
select{
    width: 100vw;
    max-width: 326px;
    height: 58px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-size: 20px;
    color: #000000;
    padding-left: 15px;
}
button{
    width: 100vw;
    max-width: 326px;
    height: 46px;
    background: #000;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
    margin-bottom: 36px;
}
span{
    font-weight: 700;
    font-size: 15px;
    color: #000;
}
img{
    width: 120px;
    border-radius: 50%;
    margin-bottom: 50px;
}
`;

export const AutoLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80vh;
h1{
    font-size: 23px;
    color: #000000;
}
`;