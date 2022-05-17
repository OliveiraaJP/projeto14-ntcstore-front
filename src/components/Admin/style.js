import styled from 'styled-components';

export const $Admin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 80px;
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
    color: #fff;
}
img{
    width: 120px;
    border-radius: 50%;
    margin-bottom: 50px;
}
a{
    p{
        font-size: 15px;
        color: #474a51;
        text-align: center;
    }
    img{
        width: 28px;
        border-radius: 0;
        margin-bottom: 0;
        position: absolute;
        right: 20px;
        top: 20px;
    }
}
h2{
    font-size: 22px;
    font-weight: 700;
    position: absolute;
    top: 30px;
    color: #a9a9a9;
}

@media (min-width: 1100px) {
    span{
        color: #000;
    }
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