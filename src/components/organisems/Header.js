import React from "react";
import { Link } from 'gatsby';
import styled from "styled-components";
import Container from "../atoms/Container";
import Logo from "../atoms/Logo";
import {Menu, MenuCallToAction, MenuLink, MenuToggle} from "../molecules/Menu";
import SkipLinkContainer from "../molecules/SkipLinkContainer";
import SkipLink from "../atoms/SkipLink";
import MainNavigation from "./MainNavigation";

const HeaderWrapper = styled.div`
  ${({isFront}) => isFront ? `
    position: absolute;
    left: 0;
    right: 0;
    z-index: 10;
  ` : `
    background-color: #211a74;
  `}
  ${({isFront}) => !isFront ? `background-color: #211a74;` : null }
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

export default function Header({ siteTitle, isFront }) {
  return (
    <>
      <SkipLinkContainer>
        <SkipLink href={"#main-content"}>
          Skip to main content
        </SkipLink>
      </SkipLinkContainer>
      <MainNavigation />
      <HeaderWrapper isFront={isFront}>
        <HeaderContainer>
          <Link to={"/"}>
            <Logo width={80} height={80}/>
            <Title as={isFront ? "h1" : "div"}>{siteTitle}</Title>
          </Link>
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
}