import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import { typeScale } from "../utils/typography";

const HeroSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const ContentContainer = styled.div`
  flex-basis: 70%;
`;

const UserName = styled.h1`
  color: ${(props) => props.theme.textColor};
  margin: 5px 0px;
`;

const UserProfession = styled.h4`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  margin: 0;
  font-weight: normal;
`;

const UserIntro = styled.p`
  font-size: ${typeScale.paragraph};
  color: ${(props) => props.theme.textColorLight};
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 800px) {
    width: 120px;
    height: 120px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0rem;
`;

const SmallButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.buttonBgColor};
  color: ${(props) => props.theme.buttonColor};
`;

// markup
const IndexPage = () => {
  return (
    <>
      <HeroSectionContainer>
        <ContentContainer>
          <UserName>Mobashir Farhan</UserName>
          <UserProfession>FrontEnd | Javascript | ReactJs</UserProfession>
          <UserIntro>
            Helping developers build a faster web. Teaching about web
            development, serverless, and React / Next.js. Helping developers
          </UserIntro>
          <ButtonContainer>
            <SmallButton>Small</SmallButton>
            <SmallButton>Big</SmallButton>
          </ButtonContainer>
        </ContentContainer>
        <Avatar src="https://i.ibb.co/52ns5nT/prof.jpg" />
      </HeroSectionContainer>
    </>
  );
};

export default IndexPage;
