import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const LandingPage = () => {

    const data = useStaticQuery(graphql`
    query LandingPageImages {
        allFile(filter: {relativeDirectory: {eq: "icons"}, extension: {}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
              name
            }
          }
        }
      }
    `)

    const getFluidFromArray = (nameOfImage) => {
        return data.allFile.edges.filter(item => item.node.name === nameOfImage)[0].node.childImageSharp.fluid;
    }

  return (
    <>
      <nav className="flex h-20 justify-center items-center">
          <Img
            fluid={ getFluidFromArray("down-arrow") }
            className="w-9 md:w-14 m-3 inline-block"
            alt="arrow heading down"
          ></Img>
          <div className="text-center">
            <p className="inline text-independence-text text-2xl font-light mx-3">
              Choose the part of my brain
            </p>
          </div>
          <Img
            fluid={ getFluidFromArray("down-arrow") }
            className="w-9 md:w-14 m-3 inline-block"
            alt="arrow heading down"
          ></Img>
      </nav>

      <section className="flex flex-grow lg:flex-row flex-col items-center justify-center h-auto p-5">
        <Link to="/react" className="no-select relative flex flex-col items-center w-1/2 mx-3">
          <div className="absolute h-56 w-80 md:h-64 md:w-100 m-10 bg-terracotta rounded-lg shadow-xl z-0 transform rotate-12"></div>
          <figure className="flex flex-col flex-shrink-0 items-center h-56 w-80 md:h-64 md:w-100 m-10 bg-eggshell rounded-lg shadow-xl z-10 hover:bg-terracotta-light transition ease-linear duration-500 cursor-pointer">
            <Img fluid={ getFluidFromArray("react") } className="w-32 m-5" src="icons/react.png" alt=""></Img>
            <h3 className="text-3xl md:text-4xl font-bold">React Developer</h3>
          </figure>
        </Link>

        <Link to="/automation" className="no-select relative flex flex-col items-center w-1/2 mx-3">
          <div className="absolute h-56 w-80 md:h-64 md:w-100 m-10 bg-greensheen rounded-lg shadow-xl transform -rotate-12 z-0"></div>
          <figure className="flex flex-col flex-shrink-0 items-center h-56 w-80 md:h-64 md:w-100 m-10 bg-eggshell rounded-lg shadow-xl z-10 hover:bg-greensheen-light transition ease-linear duration-500 cursor-pointer">
            <Img fluid={ getFluidFromArray("robot") } className="w-32 m-5" src="icons/robot.png" alt=""></Img>
            <h3 className="text-3xl md:text-4xl font-bold">Automation Engineer</h3>
          </figure>
        </Link>
      </section>
    </>
  )
}

export default LandingPage
