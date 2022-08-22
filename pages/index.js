import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import { typeScale } from "../utils/typography";
import { FaSpotify } from "react-icons/fa";

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
`;

const NowPlayingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0rem;
`;

const NowPlayingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SongName = styled.h3`
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

const SongArtist = styled.h4`
  color: ${(props) => props.theme.textColor};
  margin: 0;
  font-weight: normal;
`;

const AlbumCover = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  object-fit: cover;
`;

export const getStaticProps = async () => {
  const res = await fetch("https://mobashirfarhan.vercel.app/api/top-tracks");
  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      data: data ? data.data : null,
    },
  };
};

// markup
const IndexPage = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/top-tracks")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <>
      <HeroSectionContainer>
        <ContentContainer>
          <UserName>Mobashir Farhan</UserName>
          <UserProfession>FrontEnd | Javascript | ReactJs</UserProfession>
          <UserIntro>
            Helping developers build a faster web. Teaching about web
            development, serverless, and React / Next.js. Helping developers
          </UserIntro>
          <ButtonContainer>
            <SmallButton>Casual</SmallButton>
            <SmallButton>Professional</SmallButton>
          </ButtonContainer>
        </ContentContainer>
        <Avatar src="https://i.ibb.co/52ns5nT/prof.jpg" />
      </HeroSectionContainer>
      <NowPlayingContainer>
        <NowPlayingContainer>
          <FaSpotify color="green" size={40} />
          <NowPlayingText>
            {data ? "Now Playing" : "Not Playing"}
          </NowPlayingText>
        </NowPlayingContainer>
        <NowPlayingContentContainer>
          {data && (
            <>
              <SongName>{data.item.name} by</SongName>
              <SongArtist>{data.item.artists[0].name}</SongArtist>
              <AlbumCover src={data.item.album.images[0].url} />
            </>
          )}
        </NowPlayingContentContainer>
      </NowPlayingContainer>
    </>
  );
};

export default IndexPage;
