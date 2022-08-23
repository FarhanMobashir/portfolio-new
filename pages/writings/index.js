import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { A } from "../../components/CustomLink";
import Date from "../../components/Date";
import { getPostMinute } from "../../lib/helpers";
import { getSortedPostsData } from "../../lib/posts";
import { typeScale } from "../../utils/typography";

const Heading = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: ${typeScale.bigHeader};
  margin: 5px 0px;
`;

const Desciption = styled.p`
  color: ${(props) => props.theme.textColorLight};
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

const DateText = styled.small`
  color: ${(props) => props.theme.textColorLight};
  font-size: ${typeScale.helperText};
`;

const TimeText = styled.small`
  color: ${(props) => props.theme.textColorLight};
  font-size: ${typeScale.paragraph};
`;

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Writings({ allPostsData }) {
  return (
    <>
      <Heading>Writings</Heading>
      <Desciption>
        I write about my experiences and learnings. I also write about the
        technologies I use and the problems I face.
      </Desciption>
      {allPostsData.map(({ id, date, title, content }) => (
        <BlogBox key={id}>
          <Link href={`/writings/${id}`}>
            <BlogCardTitle>{title}</BlogCardTitle>
          </Link>
          <DateText>
            <Date dateString={date} />
          </DateText>
          <TimeText>{getPostMinute(content)} min read</TimeText>
        </BlogBox>
      ))}
    </>
  );
}
