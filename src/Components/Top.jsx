import React from "react";
import styled from "styled-components";

const Top = () => {
    return (
        <TopWrapper>
            <TopHello>
                Hi, my name is <span>EunJin Kim</span>
            </TopHello>
        </TopWrapper>
    );
};
export default Top;
const TopWrapper = styled.div``;
const TopHello = styled.div`
    color: #272341;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 56px;
    > span {
        color: #03adb0;
    }
`;
