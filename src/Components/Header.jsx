import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrapper>
            <Title>Genie's Web Portfolio</Title>
            <Email>eunjin9639@gamil.com</Email>
        </HeaderWrapper>
    );
};

export default Header;
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: inherit;
    color: white;
    margin: 10px;
`;

const Title = styled.div`
    font-weight: bold;
`;

const Email = styled.div`
    color: #bdc3c7;
    font-weight: lighter;
`;
