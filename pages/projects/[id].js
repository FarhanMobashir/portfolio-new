// Add this import
import React from "react";
import Head from "next/head";
import { getAllProjectsIds, getProjectData } from "../../lib/projects";
import styled from "styled-components";
import Date from "../../components/Date";
import { typeScale } from "../../utils/typography";
import { A } from "../../components/CustomLink";
import { BiLinkExternal } from "react-icons/bi";

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

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0rem;
`;

const ViewProjectButton = styled.a`
  color: ${(props) => props.theme.textColor};
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
            return <TechnologyUsed key={tech}>{tech}</TechnologyUsed>;
          })}
        </TechnologyUsedContainer>
        <Date dateString={postData.date} />
        <LinksContainer>
          <ViewProjectButton href={postData.link} target="_blank">
            Live Link <BiLinkExternal />
          </ViewProjectButton>
          <ViewProjectButton href={postData.link} target="_blank">
            Source Code <BiLinkExternal />
          </ViewProjectButton>
        </LinksContainer>

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
