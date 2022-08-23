import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { A } from "../../components/CustomLink";
import Date from "../../components/Date";
import { getSortedProjectsData } from "../../lib/projects";
import { typeScale } from "../../utils/typography";
import { BiLinkExternal } from "react-icons/bi";

const Heading = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: ${typeScale.bigHeader};
  margin: 5px 0px;
`;

const Desciption = styled.p`
  color: ${(props) => props.theme.textColorLight};
  text-decoration: none;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BlogBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
`;

const BlogCardTitle = styled.a`
  color: ${(props) => props.theme.textColor};
  font-size: ${typeScale.header3};
  text-decoration: underline;
  font-weight: bold;
  margin: 5px 0px;
  cursor: pointer;
`;

const TechnologyUsedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0rem;
`;

const TechnologyUsed = styled.div`
  color: ${(props) => props.theme.buttonColor};
  padding: 0.2rem 0.5rem;
  border-radius: 50px;
  font-size: ${typeScale.helperText};
  background-color: ${(props) => props.theme.textColorLight};
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0rem;
`;

const ViewProjectButton = styled.a`
  color: ${(props) => props.theme.textColorLight};
  font-size: ${typeScale.paragraph};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  text-decoration: underline;
`;

export async function getStaticProps() {
  const allPostsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Projects({ allPostsData }) {
  return (
    <>
      <Heading>Projects</Heading>
      <Desciption>
        I have worked on a few projects. I have also contributed to open source
        projects.
      </Desciption>
      {allPostsData.map(
        ({ id, date, title, technology, liveLink, sourceCode }) => (
          <BlogBox key={id}>
            <TitleContainer>
              <Link href={`/projects/${id}`}>
                <BlogCardTitle>{title}</BlogCardTitle>
              </Link>
            </TitleContainer>

            <TechnologyUsedContainer>
              {technology.map((tech) => (
                <TechnologyUsed key={tech}>{tech}</TechnologyUsed>
              ))}
            </TechnologyUsedContainer>
            <small>
              <Date dateString={date} />
            </small>
            <LinksContainer>
              <ViewProjectButton href={liveLink} target="_blank">
                Live Link <BiLinkExternal />
              </ViewProjectButton>
              <ViewProjectButton href={sourceCode} target="_blank">
                Source Code <BiLinkExternal />
              </ViewProjectButton>
            </LinksContainer>
          </BlogBox>
        )
      )}
    </>
  );
}
