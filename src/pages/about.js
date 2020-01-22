import React from "react";
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Person from "../components/organisems/Person";
import { Link } from "gatsby";

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  column-gap: 1rem;
  row-gap: 3rem;
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

  console.log(allTeammembers.nodes)

  const teammembers = allTeammembers.nodes.map(member =>
    <Person key={member.id} {...member.frontmatter} >
      {member.about}
    </Person>
  );


  return (
    <Layout>
      <SEO title={'About'} />
      <h1>About</h1>
      <p>RustFest is Europe’s Rust-dedicated conference. The next edition of RustFest will take place as a two-day event in the Netherlands.</p>
      <p>We care about diversity and accessibility at this conference – please take a look at our <Link to={"/codeofconduct"}>Code of Conduct</Link> and <Link to={"/accessibility"}>Accessibility Statement</Link>.</p>
      <h2>Team</h2>
      <TeamGrid>
        {teammembers}
      </TeamGrid>
    </Layout>
  );
}
