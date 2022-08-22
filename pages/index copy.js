import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import Layout from "../components/Layout";
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

const SectionContainer = styled.div`
  padding: 1rem 0rem;
`;

const SectionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ViewAllText = styled.p`
  color: ${(props) => props.theme.textColorLight};
  font-size: ${typeScale.paragraph};
  font-weight: bold;
  cursor: pointer;
`;

const SectionTitle = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: ${typeScale.header1};
  margin: 0;
  padding: 0;
`;

const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
  padding: 1rem;
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.lightBgColor};
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    border: 3px solid ${(props) => props.theme.primaryColor};
    padding: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: ${typeScale.header3};
  margin: 0;
  padding: 0;
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.textColorLight};
  font-size: ${typeScale.paragraph};
`;

// markup
const IndexPage = () => {
  return (
    <Layout>
      <HeroSectionContainer>
        <ContentContainer>
          <UserName>Mobashir Farhan</UserName>
          <UserProfession>FrontEnd | Javascript | ReactJs</UserProfession>
          <UserIntro>
            Helping developers build a faster web. Teaching about web
            development, serverless, and React / Next.js. Helping developers
          </UserIntro>
        </ContentContainer>
        <Avatar src="https://i.ibb.co/52ns5nT/prof.jpg" />
      </HeroSectionContainer>
      <SectionContainer>
        <SectionTitle>My Projects</SectionTitle>
        <SectionListContainer>
          {[1, 2, 3].map((project) => (
            <ProjectBox>
              <ProjectTitle>Project {project}</ProjectTitle>
              <ProjectDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptas, quod, quia, voluptates quae voluptatem quibusdam
                voluptatum quos quas quidem nesciunt. Quisquam, quae. Quisquam
                quae, quod quibusdam voluptas quos quidem.
              </ProjectDescription>
            </ProjectBox>
          ))}
        </SectionListContainer>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/projects"
        >
          <ViewAllText>
            View all projects
            <i class="uil uil-arrow-right"></i>
          </ViewAllText>
        </Link>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Blogs</SectionTitle>
        <SectionListContainer>
          {[1, 2, 3].map((project) => (
            <ProjectBox>
              <ProjectTitle>Blog {project}</ProjectTitle>
              <ProjectDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptas, quod, quia, voluptates quae voluptatem quibusdam
                voluptatum quos quas quidem nesciunt. Quisquam, quae. Quisquam
                quae, quod quibusdam voluptas quos quidem.
              </ProjectDescription>
            </ProjectBox>
          ))}
        </SectionListContainer>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/writings"
        >
          <ViewAllText>
            View all Blogs <i class="uil uil-arrow-right"></i>
          </ViewAllText>
        </Link>
      </SectionContainer>
    </Layout>
  );
};

export default IndexPage;
