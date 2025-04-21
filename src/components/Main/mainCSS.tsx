import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  .logo {
    top: 0;
    z-index: -10;
    object-fit: contain;
    margin-top: 2em;
    width: 15em;
  }
  .infoImage {
    bottom: 0;
    z-index: -10;
    object-fit: contain;
    margin-bottom: 2em;
    width: 25em;
    opacity: 70%;
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
