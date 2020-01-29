import React from "react";
import { Link as GatsbyLink } from 'gatsby';
import styled from "styled-components";
import ActionBotton from "../atoms/ActionButton";

const HeaderWrapper = styled.div`
  margin-bottom: 5px;
  background-color: #211a74;
  color: #fff;
  display: flex;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0.5rem;
  align-self: flex-start;
`;

const NavBar = styled.div`
  margin-left: auto;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 15px 0 0;
`;

const HeaderLink = styled(GatsbyLink)`
   color: #fff;
   text-decoration: none;
   margin: 0 10px;
   &, &:visited {
    color: #fff;
    text-decoration: none;
   }
   
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
        <ActionBotton/>
    </HeaderWrapper>
  );
}