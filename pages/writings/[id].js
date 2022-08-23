// Add this import
import React from "react";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styled from "styled-components";
import Date from "../../components/Date";
import { typeScale } from "../../utils/typography";
import { getPostMinute } from "../../lib/helpers";
import { FaRegClock } from "react-icons/fa";

const MainContainer = styled.div`
  word-wrap: break-word;
`;

const ProgressBar = styled.div`
  height: 5px;
  width: ${(props) => props.progress}%;
  background-color: #b278ff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0rem;
`;

const Article = styled.article``;

const DateAndReadingTime = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0rem;
`;

const ReadingTime = styled.small`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${(props) => props.theme.textColorLight};
  font-size: ${typeScale.paragraph};
`;

const ContentContainer = styled.div``;

export default function Post({ postData }) {
  // add reading progress bar
  const [scrollPercentage, setScrollPercentage] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainContainer>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>
      {/* Keep the existing code here */}
      <ProgressBar progress={scrollPercentage} />
      <Article>
        <Title>{postData.title}</Title>
        <DateAndReadingTime>
          <Date dateString={postData.date} />
          <ReadingTime>
            {getPostMinute(postData.contentHtml)} min read <FaRegClock />
          </ReadingTime>
        </DateAndReadingTime>
        <ContentContainer
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </Article>
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
