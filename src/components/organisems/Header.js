import React from "react";
import { Link as GatsbyLink } from 'gatsby';
import styled from "styled-components";

const HeaderWrapper = styled.div`
  margin-bottom: 5px;
  background-color: rgba(200,216,217,.3);
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0.5rem;
`;

const NavBar = styled.div`
  margin-left: auto;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

const HeaderLink = styled(GatsbyLink)`
   color: #2b6cb0;
   text-decoration: none;
   
   &:hover, &:focus {
    text-decoration: underline;
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
          <HeaderLink className={"focus:underline hover:underline"} to="/about">About</HeaderLink>
        </NavBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
}