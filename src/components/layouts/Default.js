/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../organisems/Header';
import Container from '../atoms/Container';
import Base from './_Base';

const Default = ({ children, ...rest }) => {
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
    <Base {...rest}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>{children}</Container>
    </Base>
  );
};

export default Default;
