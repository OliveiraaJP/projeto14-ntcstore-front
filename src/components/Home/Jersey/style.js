import styled from 'styled-components';

export const $Jersey = styled.div`

height: 200px;
width: 150px;
min-width: 150px;
border: solid 1px #dcdcdc;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding-bottom: 5px;
border-radius: 5px;
background-color: #d3d3d3;

img{
    width: 148px;
    height: 148px;
    border-radius: 5px;
}

span{
    text-align: center;
    font-size: 16px;
}

span:nth-child(2){
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    min-height: 16px;
}

span:nth-child(3){
    font-weight: 700;
}

@media (min-width: 1100px) {
    height: 210px;
    width: 160px;
    min-width: 160px;
    img{
        width: 158px;
        height: 158px;
    }
    span{
        font-size: 17px;
    }
}
`;