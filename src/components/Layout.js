/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, {createGlobalStyle} from "styled-components";
import Header from "./organisems/Header";

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    font-family: "Proxima Nova","Helvetica Neue","Helvetica","Arial",sans-serif;
    /*background-color: rgba(200, 216, 217, 0.3);*/
    color: rgb(10, 20, 30);
    margin: 0;
}

.placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
}

p {
    font-size: 1.2rem;
    line-height: 1.4;
    max-width: 600px;
}
`;

const Container = styled.main`
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
`

const Layout = ({ children, isFront = false }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `);

  return (
    <>
      <GlobalStyle />
      <Header isFront={isFront} siteTitle={data.site.siteMetadata.title} />
      <Container>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
