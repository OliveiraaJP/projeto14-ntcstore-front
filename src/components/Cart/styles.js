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
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;

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

    main{
        margin-top: 60px;
    }

    footer{
        width: 80vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        h1{
            font-size: 30px;
            font-weight: bold;
        }
        span{
            p{
                display: flex;
                justify-content: flex-end;
                font-size: 23px;
                font-weight: bold;
            }
            h2{
                font-size: 15px;
                    b{
                        font-weight: bold;
                    }
            }
        }
        
    }

    button{
        width: 80vw;
        height: 50px;
        border-radius: 40px;
        font-weight: bold;
        font-size: 14px;
        color: white;
        background-color: black;
        margin-bottom: 20px;
    }
`;

export const $EmptyCart = styled.div`
margin-top: 85px;

border: 1px solid #a0c5e8;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
height: 30px;
color: #a0c5e8;
padding: 15px 40px;
`;