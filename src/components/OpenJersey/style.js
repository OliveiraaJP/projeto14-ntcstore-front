import styled from 'styled-components';

export const $OpenJersey = styled.div`

header{
    position: sticky;
    top: 0;
    background-color: black;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 15px;
    img:first-child{
        width: 20px;
        cursor: pointer;
    }
    img:nth-child(2){
        width: 70px;
    }
    img:nth-child(3){
        width: 30px;
        cursor: pointer;
    }
}

article{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        font-size: 24px;
        text-align: center;
        margin: 10px 0 15px 0;
    }
    img{
        width: 300px;
        border-radius: 5px;
        margin-bottom: 15px;
    }
    span{
        text-align: center;
        font-size: 18px;
        font-weight: 700;
    }
    small{
        font-weight: 400;
        font-size: 15px;
        text-decoration: line-through;
    }
    select{
        width: 60px;
        max-width: 60px;
        height: 30px;
        background-color: #FFFFFF;
        border-radius: 5px;
        font-size: 18px;
        color: #000000;
        margin-left: 80px;
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
        margin-top: 20px;
    }
}

@media (min-width: 1100px) {
    header{
        height: 100px;
        padding-left: 50px;
        padding-right: 50px;
        img:first-child{
            width: 23px;
        }
        img:nth-child(2){
            width: 80px;
        }
        img:nth-child(3){
            width: 33px;
        }
    }
}
`;