import React from "react";
import Typical from "react-typical";
import styled from "styled-components";

const Motto = ["가장 만족스러웠던 날들을 생각해보라.\n 그 날은 아무것도 하지 않고 편히 쉬기만 한 날이 아니라, \n 할 일이 태산이였는데도 결국은 그 것을 모두 해낸 날이다.", 100];
const MottoPeople = ["Margaret Thatcher", 10000];
const Ending = () => {
    return (
        <EndingWrapper>
            <Typical wrapper="span" steps={Motto} loop={1} className={"loading"} />
            <Typical wrapper="span" steps={MottoPeople} loop={2} className={"mottoPeople"} />
        </EndingWrapper>
    );
};
export default Ending;

const EndingWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
