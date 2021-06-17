import React from "react";
import styled from "styled-components";

const About = () => {
    return (
        <AboutWrapper>
            <ProfileContainer>
                <ProfilePhoto>
                    <ProfileImage alt="profile" src="../Assets/profileImgSmile.jpg" />
                    <ProfileInfo>
                        <Name>EunJin Kim</Name>
                        <HashTag>#Genie #ENFP #끈기 #열정</HashTag>
                    </ProfileInfo>
                </ProfilePhoto>
            </ProfileContainer>
        </AboutWrapper>
    );
};

export default About;
const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;
const ProfileContainer = styled.div``;
const ProfilePhoto = styled.div``;
const ProfileImage = styled.img`
    width: 400px;
    height: 500px;
    border: 1px solid pink;
`;
const ProfileInfo = styled.div``;
const Name = styled.h2``;
const HashTag = styled.h4``;
