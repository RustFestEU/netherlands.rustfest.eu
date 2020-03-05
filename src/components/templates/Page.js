import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import SEO from '../Seo';

/**
 * Prevent paragraphs in list items with nested lists.
 *
 * See https://github.com/gatsbyjs/gatsby/issues/10870
 */
const ContentDiv = styled.div`
  li > p {
    font-size: inherit;
    line-height: inherit;
    max-width: initial;
    margin: 0;
  }
`;

export default ({ data }) => {
  const { page } = data;

  return (
    <Layout>
      <SEO
        title={page.frontmatter.title}
      />
      <article>
        <h1>{page.frontmatter.title}</h1>
        <ContentDiv dangerouslySetInnerHTML={{ __html: page.html }} />
      </article>
    </Layout>
  );
};

export const query = graphql`
    query($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        },
    }
`;
