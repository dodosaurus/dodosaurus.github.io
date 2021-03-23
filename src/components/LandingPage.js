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
          <p className="inline-block text-independence-text text-xl font-light">
            Choose the part of my brain
          </p>
          <Img
            fluid={ getFluidFromArray("down-arrow") }
            className="w-9 md:w-14 m-3 inline-block"
            alt="arrow heading down"
          ></Img>
      </nav>

      <section className="flex flex-grow lg:flex-row flex-col items-center justify-center h-auto p-5">
        <Link to="/react" className="relative flex flex-col items-center w-1/2 mx-3 group">
          <div className="absolute h-64 w-100 m-10 bg-terracotta rounded-lg shadow-xl z-0 transform rotate-12 group-hover:rotate-6"></div>
          <figure className="flex flex-col flex-shrink-0 items-center h-64 w-100 m-10 bg-eggshell rounded-lg shadow-xl z-10 group-hover:bg-terracotta-light cursor-pointer">
            <Img fluid={ getFluidFromArray("react") } className="w-32 m-5" src="icons/react.png" alt=""></Img>
            <h3 className="text-4xl font-bold">React Developer</h3>
          </figure>
        </Link>

        <Link to="/react" className="relative flex flex-col items-center w-1/2 mx-3">
          <div className="absolute h-64 w-100 m-10 bg-greensheen rounded-lg shadow-xl transform -rotate-12 z-0"></div>
          <figure className="flex flex-col flex-shrink-0 items-center h-64 w-100 m-10 bg-eggshell rounded-lg shadow-xl z-10 hover:bg-greensheen-light cursor-pointer">
            <Img fluid={ getFluidFromArray("robot") } className="w-32 m-5" src="icons/robot.png" alt=""></Img>
            <h3 className="text-4xl font-bold">Automation Engineer</h3>
          </figure>
        </Link>
      </section>
    </>
  )
}

export default LandingPage
