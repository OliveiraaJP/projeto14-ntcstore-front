import styled from 'styled-components';

export const $Entry = styled.div`

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
    margin-bottom: 30px;
    img{
        width: 70px;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 20px;
        gap: 6px;
    }
    span{
        color: #DDC05A;
        font-size: 15px;
        cursor: pointer;
    }
    button{
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        height: 25px;
        width: 70px;
        background-color: #DDC05A;
        color: #000;
        border: none;
    }
}

main{
    margin-left: 13px;
    h1{
        font-size: 24px;
        font-weight: 700;
    }
    h2{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;
        margin-top: 20px;
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
        img{
            width: 80px;
        }
        div{
        gap: 11px;
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