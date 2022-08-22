import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { A } from "../../components/CustomLink";
import Date from "../../components/Date";
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
  margin: 5px 0px;
  text-decoration: none;
  cursor: pointer;
`;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptas, quod, quia, voluptates quae voluptatem quibusdam voluptatum
        quos quas quidem nesciunt. Quisquam, quae. Quisquam quae, quod quibusdam
      </Desciption>
      {allPostsData.map(({ id, date, title }) => (
        <BlogBox key={id}>
          <Link href={`/writings/${id}`}>
            <BlogCardTitle>{title}</BlogCardTitle>
          </Link>
          <small>
            <Date dateString={date} />
          </small>
        </BlogBox>
      ))}
    </>
  );
}
