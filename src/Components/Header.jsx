import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Genie's Web Portfolio</Title>
      <Email href="mailto:someone@yoursite.com" target="_blank">
        eunjin9639@gamil.com
      </Email>
    </HeaderWrapper>
  )
}

export default Header
const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: inherit;
  color: #00cdac;
  padding: 10px;
`

const Title = styled.div`
  font-weight: bold;
`

const Email = styled.a`
  color: #bdc3c7;
  font-weight: lighter;
`
