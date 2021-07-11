import React from 'react'
import styled from 'styled-components'

const Top = () => {
  let screenHeight = window.innerHeight - 41

  return (
    <TopWrapper style={{ height: screenHeight }}>
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
  background: #fff;
  font-weight: 400;
  color: #272341;
  padding: 0 5.6rem;
  z-index: -1;
  display: flex;
`
const TopHello = styled.label`
  font-size: 5.6rem;
  font-weight: 700;
  text-align: left;
  height: auto;
  width: inherit;
  display: block;
  margin: auto 0;
  > span {
    background-image: linear-gradient(135deg, #02aab0, #00cdac);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
