import React from 'react';
import { graphql } from 'gatsby';
import Default from '../layouts/Default';
import SEO from '../Seo';

export default ({ data }) => {
  const { page } = data;

  return (
    <Default>
      <SEO title={page.frontmatter.title} />
      <article>
        <h1>{page.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </article>
    </Default>
  );
};

export const query = graphql`
  query($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
