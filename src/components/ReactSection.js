import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { useReactSectionQuery } from "../hooks/useReactSectionQuery"
import TechItem from "./TechItem"
import { Link } from "gatsby"
import ProjectItem from "./ProjectItem"

const ReactSection = () => {
  const { projects, images, techs } = useReactSectionQuery()

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
            src="icons/left-arrow.png"
            alt=""
          ></Img>
        </Link>
        <span>
          <h1 className="text-4xl font-bold mb-2">React Developer</h1>
        </span>
        <span>
          <Img
            fluid={getFluidFromArray("react")}
            className="w-14"
            src="icons/react.png"
            alt="Logo of React JS"
          ></Img>
        </span>
      </nav>

      <section className="flex lg:flex-row flex-col items-center justify-center m-2 p-3 bg-terracotta-light rounded-xl z-0 shadow-xl">
        <div className="flex md:flex-row flex-col justify-center items-center w-auto lg:w-1/2 p-5 m-2 bg-independence text-independence-text rounded-xl shadow-xl gap-4">
          <div className="flex flex-col text-center justify-items-start">
            <h3 className="font-bold m-2">JS frameworks:</h3>
              {techs
                .filter(node => node.type === "js-framework")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="terracotta"
                  />
                ))}
            <h3 className="font-bold m-2">CSS frameworks:</h3>
              {techs
                .filter(node => node.type === "css-framework")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="terracotta"
                  />
                ))}
            <h3 className="font-bold m-2">Backend platform:</h3>
              {techs
                .filter(node => node.type === "backend")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="terracotta"
                  />
                ))}
          </div>

          <div className="flex flex-col text-center justify-items-start">
            <h3 className="font-bold m-2">CMS:</h3>
              {techs
                .filter(node => node.type === "CMS")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="terracotta"
                  />
                ))}
            <h3 className="font-bold m-2">Other tooling I use(d):</h3>
              {techs
                .filter(node => node.type === "other")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="terracotta"
                  />
                ))}
            <h3 className="font-bold m-2">Also related to this:</h3>
              {techs
                .filter(node => node.type === "related")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="terracotta"
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
              <p>{techDetails.desc.desc}</p>
            </div>
          </div>
        )}

        {techDetails === null && (
          <div className="flex md:flex-row flex-col justify-center items-center w-auto lg:w-1/2 p-5 m-2 bg-independence-text text-independence rounded-xl shadow-xl">
            <div className="text-center m-2">
              <h3 className="flex lg:flex-row flex-col items-center text-black mb-2 italic">
                Click on tech from the list to get more info.
              </h3>
            </div>
          </div>
        )}
      </section>

      <section className="flex flex-col p-5 m-2 mb-3 bg-terracotta-light rounded-xl items-center shadow-xl">
        {projects &&
          projects.map(project => (
            <ProjectItem project={ project } type="terracotta" />
          ))}

        <div className="w-full h-auto p-3 bg-dino-green rounded-xl mb-2 mt-2 shadow-xl">
          <div className="flex flex-col z-10 rounded-xl bg-independence text-independence-text p-5">
            <h3 className="font-bold mb-2">...this website</h3>
            <p className="mb-2">
              Static site generator Gatsby used for logic layer (it is based on
              React), Contentful for storing and providing content. For styling
              I used Tailwind.{" "}
            </p>
            <p
              className="self-center px-4 pt-2 pb-2.5 text-center text-dino-yellow"
            >
              Just look around, you don't need to leave this magnificient page.
            </p>
          </div>
        </div>
        <p className="mt-1 text-independence">More to come...</p>
      </section>

      <div className="flex-grow"></div>
    </>
  )
}

export default ReactSection
