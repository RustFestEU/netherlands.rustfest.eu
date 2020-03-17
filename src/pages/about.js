import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Default from '../components/layouts/Default';
import SEO from '../components/Seo';
import Person from '../components/organisems/Person';
import { Link } from 'gatsby';
import { breakpoints } from '../components/tokens';

const { TEAM_GRID_2_BREAKPOINT, TEAM_GRID_3_BREAKPOINT } = breakpoints;

const TeamGrid = styled.div`
  @media (min-width: ${TEAM_GRID_2_BREAKPOINT}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 3rem;
  }

  @media (min-width: ${TEAM_GRID_3_BREAKPOINT}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function About(props) {
  const { allTeammembers } = useStaticQuery(
    graphql`
      query {
        allTeammembers: allMarkdownRemark(
          filter: { fields: { collection: { eq: "teammembers" } } }
        ) {
          nodes {
            id
            about: html
            frontmatter {
              name
              image {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              website
              twitter
              linkedin
              github
              gitlab
              behance
              medium
              discord
            }
          }
        }
      }
    `
  );

  const teammembers = allTeammembers.nodes.map(member => (
    <Person key={member.id} {...member.frontmatter}>
      {member.about}
    </Person>
  ));

  return (
    <Default>
      <SEO title={'About'} />
      <h1>About</h1>
      <p>
        RustFest is Europe’s Rust-dedicated conference. The next edition of
        RustFest will take place as a two-day event in the Netherlands.
      </p>
      <p>
        We care about diversity and accessibility at this conference – please
        take a look at our <Link to={'/code-of-conduct'}>Code of Conduct</Link>{' '}
        and <Link to={'/accessibility'}>Accessibility Statement</Link>.
      </p>
      <h2>Team</h2>
      <TeamGrid>{teammembers}</TeamGrid>
    </Default>
  );
}
