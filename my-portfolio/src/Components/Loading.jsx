import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  top: 80px;
  background-color: white;
  height: 5px;
  width: 300px;
  text-align: center;
  border-radius: 3px;
`;
const move = keyframes`
  from {
    left: 0px;
    opacity: 1;
  }
  
	50% {
    left: 150px;
    opacity: 1;
  }
  to {
    left: 300px;
    opacity: 0;
  }
`;
const MoveBar = styled.div`
  position: absolute;
  width: 50px;
  height: 2px;
  background-color: #81d4fa;
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
