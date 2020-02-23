import React from 'react';
import styled from 'styled-components';
import {graphql} from "gatsby";
// import Img from 'gatsby-image';

import Splash from "../components/layouts/Splash";
import SEO from '../components/Seo';
import Container from "../components/atoms/Container";
import BgImage from "../components/atoms/BgImage";
import MainNavigation from "../components/organisems/MainNavigation";

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  min-height: 200px;
  overflow:hidden;
  max-height: 600px;
  
  background: rgba(0,0,0,0.5);
  color: white;
  
  padding-top: 6rem;
  
  @media (min-width: 780px) {
    height: 100vh;
    max-height: unset;
  }
`;

// Styling of h2.
const Location = styled.span`
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin-block-start: .83em;
  margin-block-end: .83em;
`;

const Date = Location;

const IndexPage = ({data}) => (
  <Splash>
    <SEO title={'Home'} />
    <MainNavigation />
    <Hero>
      <BgImage fluid={data.file.childImageSharp.fluid} position={'center 10%'} height={'100%'} />
      <Location>Utrecht</Location> <Date>June 6 - 7</Date>
    </Hero>
    <Container>
    <div className="placeholder">
      <p>
        The RustFest Netherlands team are working hard behind the scenes on
        getting everything ready. We hope to tell you more soon so keep an eye
        on the{' '}
        <a href="https://blog.rustfest.eu/" title="The RustFest blog">
          RustFest blog
        </a>{' '}
        and follow us on{' '}
        <a href="https://twitter.com/rustfest" title="RustFest on Twitter">
          Twitter
        </a>
        !
      </p>
    </div>
    </Container>
  </Splash>
);

export default IndexPage;

export const query = graphql`
  query {
      file(relativePath: { eq: "Noorderlicht_Juri_Hiensch.jpg" }) {
          childImageSharp {
              fluid(maxWidth: 2000, maxHeight: 1333) {
                  ...GatsbyImageSharpFluid
              }
          }
      }
  }
`;