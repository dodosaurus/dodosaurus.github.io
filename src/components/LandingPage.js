import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const LandingPage = () => {

    const data = useStaticQuery(graphql`
    query LandingPageImages {
        allFile(filter: {relativeDirectory: {eq: "icons"}, extension: {}}) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: TRACED_SVG
                )
              }
              name
            }
          }
        }
      }
    `)

    const getFluidFromArray = (nameOfImage) => {
        return data.allFile.edges.filter(item => item.node.name === nameOfImage)[0].node.childImageSharp.gatsbyImageData;
    }

  return (
    <>
      <nav className="flex h-20 justify-center items-center">
          <GatsbyImage
            image={ getFluidFromArray("down-arrow") }
            className="w-9 md:w-14 m-3 inline-block"
            alt="arrow heading down"
          ></GatsbyImage>
          <div className="text-center">
            <p className="inline text-independence-text text-2xl font-light mx-3">
              Choose the part of my brain
            </p>
          </div>
          <GatsbyImage
            image={ getFluidFromArray("down-arrow") }
            className="w-9 md:w-14 m-3 inline-block"
            alt="arrow heading down"
          ></GatsbyImage>
      </nav>

      <section className="flex flex-grow lg:flex-row flex-col items-center justify-center h-auto p-5">

      <Link to="/automation" className="no-select relative flex flex-col items-center w-1/2 mx-3">
          <div className="absolute h-56 w-80 md:h-64 md:w-100 m-10 bg-greensheen rounded-lg shadow-xl transform -rotate-12 z-0"></div>
          <figure className="flex flex-col flex-shrink-0 items-center h-56 w-80 md:h-64 md:w-100 m-10 bg-eggshell rounded-lg shadow-xl z-10 hover:bg-greensheen-light transition ease-linear duration-500 cursor-pointer">
            <GatsbyImage image={ getFluidFromArray("robot") } className="w-32 m-5" src="icons/robot.png" alt=""></GatsbyImage>
            <h3 className="text-3xl md:text-4xl font-bold">Test Automation</h3>
          </figure>
        </Link>

        <Link to="/react" className="no-select relative flex flex-col items-center w-1/2 mx-3">
          <div className="absolute h-56 w-80 md:h-64 md:w-100 m-10 bg-terracotta rounded-lg shadow-xl z-0 transform rotate-12"></div>
          <figure className="flex flex-col flex-shrink-0 items-center h-56 w-80 md:h-64 md:w-100 m-10 bg-eggshell rounded-lg shadow-xl z-10 hover:bg-terracotta-light transition ease-linear duration-500 cursor-pointer">
            <GatsbyImage image={ getFluidFromArray("react") } className="w-32 m-5" src="icons/react.png" alt=""></GatsbyImage>
            <h3 className="text-3xl md:text-4xl font-bold">Personal projects</h3>
          </figure>
        </Link>

      </section>
    </>
  )
}

export default LandingPage
