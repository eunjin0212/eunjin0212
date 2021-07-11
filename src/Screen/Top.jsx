import React from 'react'
import styled from 'styled-components'

const Top = () => {
  return (
    <TopWrapper>
      <TopHello>
        Hi, my name is <span>EunJin Kim</span>
        <br />
        I'm a Front-end Developer.
      </TopHello>
    </TopWrapper>
  )
}
export default Top
const TopWrapper = styled.div`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0;
  background: #fff;
  font-weight: 400;
  color: #272341;
  padding: 0 5.6rem;
  margin-bottom: 0;
  z-index: -1;
`
const TopHello = styled.div`
  font-size: 5.6rem;
  font-weight: 700;
  margin-bottom: 3.2rem;
  text-align: left;
  > span {
    background-image: linear-gradient(135deg, #02aab0, #00cdac);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
