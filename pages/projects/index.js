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
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0rem;
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
  font-weight: bold;
  margin: 5px 0px;
  text-decoration: none;
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptas, quod, quia, voluptates quae voluptatem quibusdam voluptatum
        quos quas quidem nesciunt. Quisquam, quae. Quisquam quae, quod quibusdam
      </Desciption>
      {allPostsData.map(({ id, date, title, technology }) => (
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
        </BlogBox>
      ))}
    </>
  );
}
