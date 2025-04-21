import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

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
    padding: 1em;
    text-align: start;
    h1 {
      color: #fef8f1;
      flex-wrap: wrap;
      font-size: 6em;
      line-height: 1;
      margin: 0;
    }

    h2 {
      color: #e7b149;
      font-size: 3em;
      margin: 0;
    }
  }
`
