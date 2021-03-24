import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ContactModal from "./ContactModal"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query FooterContent {
      site {
        siteMetadata {
          infoFooter
          funnyFooter
        }
      }
      file(relativePath: { eq: "icons/dino.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [modalShown, setModalShown] = useState(false)

  const handleClick = () => {
    setModalShown(true)
  }

  const { infoFooter } = data.site.siteMetadata
  const { fluid: dino } = data.file.childImageSharp

  return (
    <main className="bg-independence font-sans">
      {modalShown && <ContactModal setModalShown={setModalShown} />}

      <div className="md:container md:mx-auto flex flex-col min-h-screen text-xl font-light">
        {children}

        <footer className="flex lg:flex-row flex-col min-h-20 p-5 -mt-2 justify-center items-center bg-independence">
          <button className="tech-item" onClick={handleClick}>
            <Img
              fluid={dino}
              className="w-20 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500"
              alt="dinosaur"
            ></Img>
          </button>
          <div className="ml-4 text-center">
            <p className="text-independence-text text-xl font-light">
              {infoFooter}
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default Layout
