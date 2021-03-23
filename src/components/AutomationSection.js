import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { useAutomationSectionQuery } from "../hooks/useAutomationSectionQuery"
import TechItem from "./TechItem"
import { Link } from "gatsby"
import ProjectItem from "./ProjectItem"

const AutomationSection = () => {
  const { projects, images, techs } = useAutomationSectionQuery()

  const getFluidFromArray = nameOfImage => {
    return images.filter(item => item.name === nameOfImage)[0].childImageSharp
      .fluid
  }

  const [techDetails, setTechDetails] = useState(null)

  useEffect(() => {
    setTechDetails(null)
  }, [])

  return (
    <>
      <nav className="flex h-20 px-5 m-2 mt-4 justify-between rounded-xl items-center gap-4 bg-eggshell shadow-xl">
        <Link to="/">
          <Img
            fluid={getFluidFromArray("left-arrow")}
            className="inline-block w-10"
            alt="arrow back"
          ></Img>
        </Link>
        <span>
          <h1 className="text-4xl font-bold mb-2">Automation Engineer</h1>
        </span>
        <span>
          <Img
            fluid={getFluidFromArray("robot")}
            className="w-16"
            alt="Logo of robot"
          ></Img>
        </span>
      </nav>

      <section className="flex lg:flex-row flex-col items-center justify-center m-2 p-3 bg-greensheen-light rounded-xl z-0 shadow-xl">
        <div className="flex md:flex-row flex-col justify-around items-center w-auto lg:w-1/2 p-5 pb-7 m-2 bg-independence text-independence-text rounded-xl shadow-xl gap-4">
          <div className="flex flex-col text-center justify-between -mb-3 md:mb-0">
            <h3 className="font-bold m-2">Tools:</h3>
              {techs
                .filter(node => node.type === "js-framework")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="greensheen"
                  />
                ))}
            <h3 className="font-bold m-2">Frameworks:</h3>
              {techs
                .filter(node => node.type === "css-framework")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="greensheen"
                  />
                ))}
            <h3 className="font-bold m-2">Test management:</h3>
              {techs
                .filter(node => node.type === "backend")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="greensheen"
                  />
                ))}
          </div>

          <div className="flex flex-col text-center justify-between">
            <h3 className="font-bold m-2">Handy apps:</h3>
              {techs
                .filter(node => node.type === "CMS")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="greensheen"
                  />
                ))}
            <h3 className="font-bold m-2">Other:</h3>
              {techs
                .filter(node => node.type === "other")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="greensheen"
                  />
                ))}
          </div>
        </div>

        {techDetails !== null && (
          <div className="flex md:flex-row flex-col justify-around items-start w-auto lg:w-1/2 p-2 m-2 bg-independence-text text-black rounded-xl shadow-xl">
            <div className="flex flex-col justify-center items-start text-left m-2">
              <span className="flex items-center justify-start mb-2">
                <div
                  className={`w-${techDetails.logoWidth * 2} mr-2 inline-block`}
                  alt="logo"
                  dangerouslySetInnerHTML={{
                    __html: techDetails.logo.svg.content,
                  }}
                />
                <h3 className="flex lg:flex-row flex-col items-center text-black mb-2 ml-2 font-bold text-2xl">
                  {techDetails.name}
                </h3>
              </span>
              <p className="mb-3">{techDetails.desc.desc}</p>
              {techDetails.name === "GitHub" && <p>Click <a className="font-semibold hover:text-greensheen transition ease-linear duration-200" href={techDetails.link}>HERE</a></p>}
            </div>
          </div>
        )}

        {techDetails === null && (
          <div className="flex md:flex-row flex-col justify-center items-center w-auto lg:w-1/2 p-5 m-2 bg-independence-text text-independence rounded-xl shadow-xl">
            <div className="text-center p-2">
              <h3 className="flex lg:flex-row flex-col items-center text-black mb-2 italic">
                Choose tech from the list to get more info.
              </h3>
            </div>
          </div>
        )}
      </section>

      <section className="flex flex-col p-5 m-2 mb-3 bg-greensheen-light rounded-xl items-center shadow-xl">
        {projects &&
          projects.map(project => (
            <ProjectItem project={ project } type="greensheen" />
          ))}
        <p className="mt-1 text-independence">More to come...</p>
      </section>

      <div className="flex-grow"></div>
    </>
  )
}

export default AutomationSection
