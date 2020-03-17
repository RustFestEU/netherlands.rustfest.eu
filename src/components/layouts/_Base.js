/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo } from 'react';
import GlobalStyle from '../atoms/GlobalStyle';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Footer from '../organisems/Footer';

const Base = ({ Header, headerTitleAs, children }) => {
  // Mark the document as having JavaScript support. useMemo will run once
  // during page hydration at which point window will be defined. Window is not
  // defined when Gatsby statically builds the pages causing a false value.
  const jsSupport = useMemo(() => typeof window !== 'undefined', []);

  // Get some metadata for the site.
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet htmlAttributes={{ class: jsSupport ? 'js' : 'no-js' }} />
      <GlobalStyle />
      <Header
        titleAs={headerTitleAs}
        siteTitle={data.site.siteMetadata.title}
      />
      {children}
      <Footer />
    </>
  );
};

export default Base;
