import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Person from "../components/organisems/Person";
import Link from "../components/atoms/Link";

export default function About(props) {
  const { allTeammembers } = useStaticQuery(
    graphql`
        query {
            allTeammembers: allMarkdownRemark(
                filter: { fields: { collection: { eq: "teammembers" } } }
            ) {
                nodes {
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
                    about: html
                }
            }
        }
    `
  );

  const teammembers = allTeammembers.nodes.map(member =>
    <Person {...member.frontmatter} >
      {member.about}
    </Person>
  );


  return (
    <Layout>
      <SEO title={'About'} />
      <h1 className={"text-4xl"}>About</h1>
      <p className={"mb-2"}>RustFest is Europe’s Rust-dedicated conference. The next edition of RustFest will take place as a two-day event in the Netherlands.</p>
      <p className={"mb-4"}>We care about diversity and accessibility at this conference – please take a look at our <Link to={"/codeofconduct"}>Code of Conduct</Link> and <Link to={"/accessibility"}>Accessibility Statement</Link>.</p>
      <h2 className={"text-3xl mb-5"}>Team</h2>
      <div style={{display: "grid", gridTemplateColumns:"repeat(3, 1fr)", columnGap: "1rem", rowGap: "3rem"}}>
        {teammembers}
        {teammembers}
        {teammembers}
        {teammembers}
      </div>
    </Layout>
  );
}
