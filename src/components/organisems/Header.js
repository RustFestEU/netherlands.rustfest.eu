import React from "react";
import { Link as GatsbyLink } from 'gatsby';
import styled from "styled-components";
import CallToAction from "../atoms/CallToAction";
import Container from "../atoms/Container";
import Logo from "../atoms/Logo";

const HeaderWrapper = styled.div`
  margin-bottom: 5px;
  background-color: #211a74;
  color: #fff;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const Title = styled.div`
  // Visually hidden on moible
  position: absolute;
  height: 1px; 
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
  
  // Shown on desktop
  @media (min-width: 780px) {
    // Reset visually hidden
    position: initial;
    width: auto;
    height: auto;
    overflow: initial;
    clip: unset;
    white-space: initial;
  
    // Normal style
    display: inline-block;
    vertical-align: middle;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 15px 0 1rem;
  }
`;

const HeaderLink = styled(GatsbyLink)`
  &, &:visited {
    color: inherit;
    text-decoration: none;
  }
   
  &:hover, &:focus {
    text-decoration: underline;
  }
`;

const NavBar = styled.div`
  margin-left: auto;
  
  a, button {
    margin-left: .5rem;
  }
`;

export default function Header({ siteTitle, isFront }) {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLink to={"/"}>
          <Logo width={80} height={80} />
          <Title as={isFront ? "h1" : "div"}>{siteTitle}</Title>
        </HeaderLink>
        <NavBar>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/info">Info</HeaderLink>
          <CallToAction href="https://cfp.rustfest.eu">Submit a talk</CallToAction>
        </NavBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
}