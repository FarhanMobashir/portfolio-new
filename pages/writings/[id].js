// Add this import
import React from "react";
import Head from "next/head";
import { getAllPostIds,getPostData } from "../../lib/posts";
import styled from "styled-components";
import Date from "../../components/Date";

const MainContainer = styled.div`
 word-wrap: break-word;
`;

export default function Post({ postData }) {
  return (
    <MainContainer>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>
      {/* Keep the existing code here */}
      <article>
        <h1>{postData.title}</h1>
        <div >
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </MainContainer>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}