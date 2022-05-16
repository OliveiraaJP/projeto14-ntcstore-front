import styled from 'styled-components';

export const $Container = styled.div`
  background-color: aliceblue;

  header {
    position: sticky;
    top: 0;
    left: 0;
    height: 100px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    img {
      width: 50px;
      cursor: pointer;
    }
  }

  h1:first-child {
  }
`;

export const $BuySafe = styled.div`
  background-color: lightgreen;
  height: 30px;
  display: flex;
  font-size: 13px;
  justify-content: space-evenly;
  padding: 0 30px;
  align-items: center;
  b {
    font-weight: bold;
  }

  img {
    height: 22px;
  }
`;

export const $Main = styled.main`
  padding: 0 20px;
  
  h1 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    span {
      font-weight: 400;
    }
  }

  input {
    height: 40px;
    border-radius: 7px;
    width: 100%;
    border-color: lightgray;
    padding-left: 10px;
    margin-bottom: 10px;
  }
  select {
    margin-top: 11px;
    width: 40%;
    height: 40px;
    width: 180px;
    font-size: 20px;
    padding-left: 20px;
  }

  button {
    display: block;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 326px;
    width: 250px;
    height: 46px;
    background: #000;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
  }
`;
