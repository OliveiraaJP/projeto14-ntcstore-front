import styled from 'styled-components';

export const $Home = styled.div`

header{
    background-color: black;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    img:first-child{
        width: 23px;
        cursor: pointer;
    }
    img:nth-child(2){
        width: 80px;
    }
    img:nth-child(3){
        width: 33px;
        cursor: pointer;
    }
}

main{
    margin-left: 13px;
    h1{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 22px;
    }
    h2{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;
    }
    div{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 13px;
        overflow-x: scroll;
        ::-webkit-scrollbar {
        display: none;
    }
    }
}

`;