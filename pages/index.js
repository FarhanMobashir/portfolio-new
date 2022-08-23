import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import { typeScale } from "../utils/typography";
import { FaExternalLinkAlt, FaSpotify } from "react-icons/fa";
import { getSortedProjectsData } from "../lib/projects";
import { getSortedPostsData } from "../lib/posts";
import { FaArrowRight } from "react-icons/fa";

const HeroSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const ContentContainer = styled.div`
  flex-basis: 75%;
  @media (max-width: 800px) {
    flex-basis: 100%;
  }
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
  flex-basis: 25%;
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
  border-radius: 50px;
  border: none;
  font-weight: bold;
  background-color: ${(props) => props.theme.textColorLight};
  color: ${(props) => props.theme.buttonColor};
  border: ${(props) =>
    props.status === "active" ? `2px solid ${props.theme.textColor}` : "none"};
`;

const SectionContainer = styled.div``;

const SectionTitle = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: ${typeScale.header2};
  font-weight: bold;
  margin: 0;
`;

const SectionSubtitle = styled.h4`
  color: ${(props) => props.theme.textColorLight};
  font-size: ${typeScale.header4};
  font-weight: normal;
  margin: 0.5rem 0rem;
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.textColorLight};
  margin: 2rem 0rem;
`;

const ViewAllButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: ${typeScale.h4};
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  background-color: none;
  color: ${(props) => props.theme.textColor};
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;

const UnorderedListForProjects = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.2rem;
  padding: 0;
`;

const ListItem = styled.li`
  /* color: ${(props) => props.theme.textColorLight}; */
  font-size: ${typeScale.helperText};
  border: 1px solid ${(props) => props.theme.textColorLight};
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin: 0;
  font-weight: normal;
`;

const NowPlayingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const NowPlayingContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NowPlayingTitleAndArtistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
`;

const SongName = styled.h6`
  color: ${(props) => props.theme.textColor};
  margin: 0;
  font-weight: bold;
`;

const NowPlayingText = styled.p`
  color: ${(props) => props.theme.textColor};
  margin: 0;
  font-weight: bold;
  font-size: small;
`;

const SongArtist = styled.h6`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
`;

const AlbumCover = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  object-fit: cover;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectTitle = styled.h3`
  color: ${(props) => props.theme.textColor};
  margin: 0;
  text-decoration: underline;
  font-weight: bold;
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
`;

const ProjectLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ProjectLink = styled.a`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
  text-decoration: underline;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ProjectSourceCode = styled.a`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
  text-decoration: underline;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BlogTitle = styled.h3`
  color: ${(props) => props.theme.textColor};
  margin: 0;
  font-weight: bold;
`;

const BlogDescription = styled.p`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
`;

const BlogLink = styled.a`
  color: ${(props) => props.theme.textColorLight};
  margin: 0;
  font-weight: normal;
  text-decoration: underline;
`;

const Blog = ({ title, description, link }) => {
  return (
    <BlogContainer>
      <BlogTitle>{title}</BlogTitle>
      <BlogDescription>{description}</BlogDescription>
      <Link href={`/writings/${link}`}>
        <BlogLink>Read more</BlogLink>
      </Link>
    </BlogContainer>
  );
};

const Project = ({ title, description, liveLink, sourceCode, link }) => {
  return (
    <ProjectContainer>
      <Link href={`/projects/${link}`}>
        <ProjectTitle>{title}</ProjectTitle>
      </Link>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLinkContainer>
        <ProjectLink href={liveLink}>
          Live Link
          <FaExternalLinkAlt />
        </ProjectLink>
        <ProjectSourceCode href={sourceCode}>
          Source Code
          <FaExternalLinkAlt />
        </ProjectSourceCode>
      </ProjectLinkContainer>
    </ProjectContainer>
  );
};

const HeroData = {
  casual: {
    profession: "Singing | Photography | Music",
    intro:
      "This is Mobashir Farhan, and he enjoys watching the sunset, eating candyfloss and waking up late in the morning.Just kidding, more importantly his friend will describe him as someone who loves to draw beautiful things, cook delicious foods, play guitar and loves to motivate them to start learning programming which sometimes irritate them 😂",
    avatar: "https://i.ibb.co/WfTLdny/pro-c.jpg",
  },
  professional: {
    profession: "FrontEnd | Javascript | ReactJs",
    intro:
      "I am a FrontEnd Developer with 2+ years of experience in building web applications. I have worked on various projects using ReactJs, NextJs, NodeJs, ExpressJs, MongoDB, Firebase, and many more.",
    avatar: "https://i.ibb.co/52ns5nT/prof.jpg",
  },
};

export const getStaticProps = async () => {
  const allProjectsData = getSortedProjectsData().slice(0, 3);
  const allPostsData = getSortedPostsData().slice(0, 3);

  return {
    props: {
      projects: allProjectsData,
      blogs: allPostsData,
    },
  };
};

// markup
const IndexPage = ({ projects, blogs }) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/top-tracks")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const [isCasual, setIsCasual] = React.useState(false);

  return (
    <>
      <HeroSectionContainer>
        <ContentContainer>
          <UserName>Mobashir Farhan</UserName>
          <UserProfession>
            {isCasual
              ? HeroData.casual.profession
              : HeroData.professional.profession}
          </UserProfession>
          <UserIntro>
            {isCasual ? HeroData.casual.intro : HeroData.professional.intro}
          </UserIntro>
          <ButtonContainer>
            <SmallButton
              onClick={() => {
                setIsCasual(false);
              }}
              status={!isCasual ? "active" : "inactive"}
            >
              Professional
            </SmallButton>
            <SmallButton
              onClick={() => {
                setIsCasual(true);
              }}
              status={isCasual ? "active" : "inactive"}
            >
              Casual
            </SmallButton>
          </ButtonContainer>
        </ContentContainer>
        <Avatar
          src={isCasual ? HeroData.casual.avatar : HeroData.professional.avatar}
        />
      </HeroSectionContainer>
      {/* sections */}

      <SectionContainer>
        <SectionTitle>Projects</SectionTitle>
        <SectionSubtitle>
          These are some of the projects I have worked on
        </SectionSubtitle>
        <UnorderedList>
          {projects.map((project) => (
            <Project
              key={project.id}
              link={project.id}
              title={project.title}
              description={project.description}
              liveLink={project.liveLink}
              sourceCode={project.sourceCode}
            />
          ))}
        </UnorderedList>
        <Link href="/projects">
          <ViewAllButton>
            View all <FaArrowRight />
          </ViewAllButton>
        </Link>
        <SectionDivider />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Blogs</SectionTitle>
        <SectionSubtitle>
          These are some of the blogs I have written on
        </SectionSubtitle>
        <UnorderedList>
          {blogs.map((project) => (
            <Blog
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.id}
            />
          ))}
        </UnorderedList>
        <Link href="/writings">
          <ViewAllButton>
            View all blogs <FaArrowRight />
          </ViewAllButton>
        </Link>
        <SectionDivider />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Technologies I have worked with</SectionTitle>
        <SectionSubtitle>
          These are the technologies I have worked with in the past
        </SectionSubtitle>
        <UnorderedListForProjects>
          <ListItem>ReactJs</ListItem>
          <ListItem>NextJs</ListItem>
          <ListItem>NodeJs</ListItem>
          <ListItem>ExpressJs</ListItem>
          <ListItem>MongoDB</ListItem>
          <ListItem>Git</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JavaScript</ListItem>
        </UnorderedListForProjects>
        <SectionDivider />
      </SectionContainer>
      <NowPlayingContainer>
        <NowPlayingContainer>
          <FaSpotify size={40} />
          <NowPlayingText>
            {data ? "Now Listening" : "Not Playing"}
          </NowPlayingText>
        </NowPlayingContainer>
        <NowPlayingContentContainer>
          {data && (
            <>
              <NowPlayingTitleAndArtistContainer>
                <SongName>
                  {data.item.name.length > 20
                    ? data.item.name.slice(0, 20) + "..."
                    : data.item.name}{" "}
                </SongName>
                <SongArtist>by {data.item.artists[0].name}</SongArtist>
              </NowPlayingTitleAndArtistContainer>
              <AlbumCover src={data.item.album.images[0].url} />
            </>
          )}
        </NowPlayingContentContainer>
      </NowPlayingContainer>
    </>
  );
};

export default IndexPage;
