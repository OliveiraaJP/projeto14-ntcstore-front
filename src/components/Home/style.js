import styled from 'styled-components';

export const $Home = styled.div`

header{
    position: sticky;
    top: 0;
    background-color: rgba(0, 0, 0);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
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

main{
    margin-left: 13px;
    h1{
        font-size: 24px;
        font-weight: 700;
        color: #fff;
    }
    h2{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;
        margin-top: 20px;
        color: #fff;
    }
    article{
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
    main{
        margin: 0 10px 20px 50px;
        article{
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            align-items: center;
            gap: 13px;
        }
        h1,
        h2{
            color: #000;
        }
    }
}
`;

export const Loading = styled.div`
header{
    position: sticky;
    top: 0;
    background-color: black;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 15px;
    img{
        width: 70px;
    }
}

height: 100%;
width: 100%;
svg{
    margin: 0 auto;
    margin-top: 120px;
}

@media (min-width: 1100px) {
    header{
        height: 100px;
        padding-left: 50px;
        padding-right: 50px;
        img{
            width: 80px;
        }
    }
}
`;