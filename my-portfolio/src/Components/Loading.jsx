import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "../CSS/loading.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;
const LandomMotto = styled.span`
  text-align: center;
  font-size: 40px;
  color: pink;
  white-space: pre-wrap;
`;

const ItalicSpan = styled.i`
  font-size: 13px;
  color: #bdc3c7;
`;

const LoadingBar = styled.div`
  position: relative;
  display: flex;
  top: 80px;
  background-color: inherit;
  height: 3px;
  width: 300px;
  border-radius: 3px;
`;
const move = keyframes`
  from {
    left: 0px;
    opacity: 1;
  }
  
	50% {
    left: 175px;
    opacity: 1;
  }

  to {
    left: 350px;
    opacity: -1;
  }
`;
const MoveBar = styled.div`
  position: absolute;
  width: 50px;
  height: 3px;
  background-color: pink;
  animation: ${move} 1.5s linear infinite;
  border-radius: 3px;
`;

class Loading extends Component {
  render() {
    return (
      <>
        <Container className="container">
          <LandomMotto>
            {
              "The more you gain by pretending,\nThe less you're gonna actually have."
            }
          </LandomMotto>
          <p>
            <ItalicSpan>
              거짓으로 얻는 게 많을수록 진짜로 얻는 것은 적어지지.
            </ItalicSpan>
          </p>
          <ItalicSpan>-Aladdin(2019)-</ItalicSpan>
          <LoadingBar>
            <MoveBar></MoveBar>
          </LoadingBar>
        </Container>
      </>
    );
  }
}

export default Loading;
