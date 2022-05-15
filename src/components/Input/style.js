import styled from 'styled-components';

export const $Input = styled.div`

input{
    width: 100vw;
    max-width: 326px;
    height: 58px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-size: 20px;
    color: #000000;
    padding-left: 15px;
}
div{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
span{
    color: red !important;
    font-weight: 400 !important;
    font-size: 13px !important;
    padding: 5px;
    width: 326px;
    display: none;
}
input:invalid[focused=true]{
    border: 1px solid red;
}
input:invalid[focused=true] ~ span{
    display: block;
}
`;