import React from "react";
import { GlobalStyle } from "../utils/Global";
import { useThemeContext } from "../contexts/ThemeContext";
import { defaultTheme } from "../utils/theme";
import styled from "styled-components";
import { typeScale } from "../utils/typography";
import Link from "next/link";
import { A } from "./CustomLink";
import { HiOutlineLightBulb, HiOutlineMoon } from "react-icons/hi";
import { Seo } from "./Seo";
import {
  FaArrowCircleUp,
  FaGithub,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

// conmponents

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 16px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
`;

const LinksContainer = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  list-style-type: none;
`;
const NavLinks = styled.li`
  text-decoration: none;
  color: ${(props) => props.theme.textColorLight};
  cursor: pointer;
`;

const ThemeToggleButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.lightBgColor};
  color: ${(props) => props.theme.textColor};
  font-size: ${typeScale.header3};
  border-radius: 5px;
  padding: 5px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  color: ${(props) => props.theme.textColor};
`;

const CopyrightTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0rem;
`;

const FooterText = styled.p`
  font-size: ${typeScale.paragraph};
  position: sticky;
  bottom: 0;
`;

export const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {
  // state
  const { toggleTheme, activeTheme } = useThemeContext();

  return (
    <>
      <Seo />
      <GlobalStyle />
      <AppHeader>
        <LeftContainer>
          <Link href="/">
            <A>
              <Logo>m.</Logo>
            </A>
          </Link>
          <LinksContainer>
            <NavLinks>
              <Link href="/projects">
                <A>Projects</A>
              </Link>
            </NavLinks>
            <NavLinks>
              <Link href="/writings">
                <A>Writings</A>
              </Link>
            </NavLinks>
          </LinksContainer>
        </LeftContainer>
        <ThemeToggleButton onClick={() => toggleTheme()}>
          {activeTheme === defaultTheme ? (
            <HiOutlineMoon />
          ) : (
            <HiOutlineLightBulb />
          )}
        </ThemeToggleButton>
      </AppHeader>

      <main>{children}</main>
      <Footer>
        <CopyrightTextContainer>
          <FooterText>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://nextjs.org">NextJs</a>
          </FooterText>
          <FaArrowCircleUp
            size={24}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </CopyrightTextContainer>
        <SocialIconsContainer>
          <FaTwitter size={24} />
          <FaGithub size={24} />
          <FaLinkedin size={24} />
        </SocialIconsContainer>
      </Footer>
    </>
  );
};
