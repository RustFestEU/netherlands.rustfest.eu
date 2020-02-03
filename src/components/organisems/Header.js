import React from "react";
import { Link as GatsbyLink } from 'gatsby';
import styled from "styled-components";
import CallToAction from "../atoms/CallToAction";
import Container from "../atoms/Container";

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
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 15px 0 0;
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
          <Title as={isFront ? "h1" : "div"}>{siteTitle}</Title>
        </HeaderLink>
        <NavBar>
          <HeaderLink to="/about">About</HeaderLink>
          <CallToAction href="https://cfp.rustfest.eu">Submit a talk</CallToAction>
        </NavBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
}