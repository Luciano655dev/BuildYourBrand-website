import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  min-height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  button {
    width: 20em;
    height: 5em;
    border-radius: 15px;
    border: 3px solid black;
    background-color: #e7b149;

    font-weight: bold;
    transition: 0.2s;

    &:active {
      filter: brightness(60%);
      transform: translateY(3px);
    }
  }

  .info {
    top: 0;
    object-fit: contain;
    margin-top: 2em;
    width: 20em;
    border-radius: 5px;
  }
  .cards {
    bottom: 0;
    object-fit: contain;
    width: 25em;
    margin: 2em;
    border-radius: 5px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 14em;
      text-align: center;
    }
    p {
      font-size: 2em;
      line-height: 1;
      font-weight: bold;
    }
  }
`
