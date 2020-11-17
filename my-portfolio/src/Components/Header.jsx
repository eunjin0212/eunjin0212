import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: bold;
`;

const Email = styled.div`
  color: #bdc3c7;
  font-weight: lighter;
`;

class Header extends Component {
  render() {
    return (
      <>
        <Container>
          <Title>Genie's Web Portfolio</Title>
          <Email>eunjin9639@gamil.com</Email>
        </Container>
      </>
    );
  }
}

export default Header;
