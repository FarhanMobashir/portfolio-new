// Add this import
import React from "react";
import Head from "next/head";
import { getAllProjectsIds, getProjectData } from "../../lib/projects";
import styled from "styled-components";
import Date from "../../components/Date";
import { typeScale } from "../../utils/typography";

const MainContainer = styled.div`
  word-wrap: break-word;
`;

const ContentContainer = styled.div``;

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

export default function Project({ postData }) {
  return (
    <MainContainer>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>
      {/* Keep the existing code here */}
      <article>
        <h1>{postData.title}</h1>
        <TechnologyUsedContainer>
          {postData.technology.map((tech) => {
            return <TechnologyUsed>{tech}</TechnologyUsed>;
          })}
        </TechnologyUsedContainer>
        <div>
          <Date dateString={postData.date} />
        </div>
        <ContentContainer
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </MainContainer>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id);
  return {
    props: {
      postData,
    },
  };
}
