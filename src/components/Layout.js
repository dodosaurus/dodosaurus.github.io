import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image";

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query FooterContent {
      site {
        siteMetadata {
          infoFooter
          funnyFooter
        }
      }
      file(relativePath: {eq: "icons/dino.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { infoFooter, funnyFooter } = data.site.siteMetadata;
  const { fluid: dino } = data.file.childImageSharp;

  return (
    <main className="bg-independence font-sans">
      <div className="md:container md:mx-auto flex flex-col min-h-screen text-xl font-light">
        {children}

        <footer className="flex lg:flex-row flex-col min-h-20 p-5 justify-between items-center bg-independence">
          <span>
            <p className="text-independence-text text-xl font-light">
              { funnyFooter }
            </p>
          </span>
          <Img fluid={ dino } className="w-20" src="icons/dino.png" alt=""></Img>
          <span>
            <p className="text-independence-text text-xl font-light">
              { infoFooter }
            </p>
          </span>
        </footer>
      </div>
    </main>
  )
}

export default Layout
