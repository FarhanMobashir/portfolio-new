import React from "react";
import { GlobalStyle } from "../utils/Global";
import { useThemeContext } from "../contexts/ThemeContext";
import { defaultTheme } from "../utils/theme";
import styled from "styled-components";
import { typeScale } from "../utils/typography";
import Link from "next/link";
import { A } from "./CustomLink";
import { BiMoon, BiSun } from "react-icons/bi";

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
  align-items: center;
  padding: 8px 16px;
  color: ${(props) => props.theme.textColor};
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
          {activeTheme === defaultTheme ? <BiMoon /> : <BiSun />}
        </ThemeToggleButton>
      </AppHeader>

      <main>{children}</main>
      <Footer>
        <FooterText>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://nextjs.org">NextJs</a>
        </FooterText>
      </Footer>
    </>
  );
};
