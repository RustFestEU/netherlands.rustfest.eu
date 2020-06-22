import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Splash from '../components/layouts/Splash';
import SEO from '../components/Seo';
import Container from '../components/atoms/Container';
import BgImage from '../components/atoms/BgImage';
import { breakpoints } from '../components/tokens';
import RecentBlogPost from '../components/molecules/RecentBlogPost';
import MailChimpSubscriptionForm from '../components/molecules/MailChimpSubscriptionForm';
import { Twitter as TwitterIcon } from '../components/atoms/icons';

const { TITLE_BREAKPOINT } = breakpoints;

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background: rgba(0, 0, 0, 0.5);
  color: white;

  padding-top: 6rem;

  .js & {
    height: 100vh;
  }
`;

// Styling of h2.
const City = styled.span`
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin-block-start: 0.83em;
  margin-block-end: 0.5rem;
`;

const Date = styled(City)`
  .no-js & {
    margin-bottom: 5rem;
  }
`;

const SplashTitle = styled.h1`
  margin: 0 15px 0 1rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;

  @media (min-width: ${TITLE_BREAKPOINT}) {
    display: none;
  }
`;

const IndexPage = ({ data }) => (
  <Splash headerTitleAs={'h1'}>
    <SEO title={'Home'} />
    <Hero>
      <BgImage
        fluid={data.file.childImageSharp.fluid}
        position={'center 10%'}
        height={'100%'}
      />
      <SplashTitle>{'RustFest.eu Netherlands'}</SplashTitle>
      <City>Online</City> <Date>7th & 8th November 2020</Date>
    </Hero>
    <Container>
      <h2>Latest news</h2>
      <RecentBlogPost />
      <h2>Updates right to your inbox</h2>
      <p>Join our mailing list to always receive the latest info:</p>
      <MailChimpSubscriptionForm />
      <h2>
        <TwitterIcon style={{ verticalAlign: 'middle' }} />
        Hear us chirp
      </h2>
      <a href="https://www.twitter.com/rustfest">
        Follow @rustfest on Twitter.
      </a>
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
