import { graphql, useStaticQuery } from "gatsby"

export const useReactSectionQuery = () => {
  const data = useStaticQuery(graphql`
    query ReactSectionQuery {
      allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
      allContentfulProject(filter: { section: { eq: "react" } }) {
        nodes {
          bgImage {
            file {
              url
            }
          }
          desc {
            desc
          }
          link
          title
          id
        }
      }
      allContentfulTech(filter: { section: { eq: "react" } }) {
        nodes {
          desc {
            desc
          }
          id
          link
          section
          type
          name
          logoWidth
          logo {
            svg {
              content
              dataURI
            }
            file {
              url
            }
          }
        }
      }
    }
  `)

  const projects = data.allContentfulProject.nodes
  const images = data.allFile.nodes
  const techs = data.allContentfulTech.nodes

  return { projects, images, techs }
}
