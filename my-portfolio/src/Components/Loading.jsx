import React, { Component } from "react";
import styled from "styled-components";

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

class Loading extends Component {
  render() {
    return (
      <>
        <Container>
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
        </Container>
      </>
    );
  }
}

export default Loading;
