import React, { useState, useEffect } from "react"
import { useReactSectionQuery } from "../hooks/useReactSectionQuery"
import TechItem from "./TechItem"
import { Link } from "gatsby"
import ProjectItem from "./ProjectItem"
import { GatsbyImage } from "gatsby-plugin-image"

const ReactSection = () => {
  const { projects, images, techs } = useReactSectionQuery()

  const getFluidFromArray = nameOfImage => {
    return images.filter(item => item.name === nameOfImage)[0].childImageSharp
      .gatsbyImageData
  }

  const [techDetails, setTechDetails] = useState(null)

  useEffect(() => {
    setTechDetails(null)
  }, [])

  return (
    <>
      <nav className="flex h-20 px-5 m-2 mt-4 justify-between rounded-xl items-center gap-4 bg-eggshell shadow-xl">
        <Link to="/">
          <GatsbyImage
            image={getFluidFromArray("left-arrow")}
            className="inline-block w-10"
            alt="arrow back"
          ></GatsbyImage>
        </Link>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-0 md:mb-2">React Developer</h1>
        </div>
        <span>
          <GatsbyImage
            image={getFluidFromArray("react")}
            className="w-14"
            src="icons/react.png"
            alt="Logo of React JS"
          ></GatsbyImage>
        </span>
      </nav>

      <section className="flex flex-col justify-center m-2 p-3 bg-terracotta-light rounded-xl z-0 shadow-xl">
        <h3 className="text-3xl text-terracotta mb-3 self-center">
          Stuff I know...
        </h3>
        <div className="flex lg:flex-row flex-col justify-around">
          <div className="flex md:flex-row flex-col justify-around items-center w-auto lg:w-1/2 p-5 pb-7 m-2 bg-independence text-independence-text rounded-xl shadow-xl gap-4">
            <div className="flex flex-col text-center justify-around -mb-3 md:mb-0">
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

            <div className="flex flex-col text-center justify-between">
              <h3 className="font-bold m-2 mb-1">CMS:</h3>
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
                  <img style={{width: '3rem'}} className={`w-${techDetails.logoWidth * 2} mr-2 inline-block`} src={techDetails.logo.file.url} alt={`${techDetails.name} logo`}/>
                  {/* <div
                    style={{width: '3rem'}}
                    className={`w-${
                      techDetails.logoWidth * 2
                    } mr-2 inline-block`}
                    alt={`${techDetails.name} logo`}
                    dangerouslySetInnerHTML={{
                      __html: techDetails.logo.svg.content,
                    }}
                  /> */}
                  <h3 className="flex lg:flex-row flex-col items-center text-black mb-2 ml-2 font-bold text-2xl">
                    {techDetails.name}
                  </h3>
                </span>
                <p className="mb-3">{techDetails.desc.desc}</p>
                {techDetails.name === "GitHub" && (
                  <p>
                    Click{" "}
                    <a
                      className="font-semibold hover:text-terracotta transition ease-linear duration-200"
                      href={techDetails.link}
                    >
                      HERE
                    </a>
                  </p>
                )}
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
        </div>
      </section>

      <section className="flex flex-col p-5 m-2 mb-3 bg-terracotta-light rounded-xl items-center shadow-xl">
        <h3 className="text-3xl text-terracotta mb-5">I worked on...</h3>
        {projects &&
          projects.map(project => (
            <ProjectItem project={project} type="terracotta" key={project.id} />
          ))}

        <div className="w-full h-auto p-3 bg-dino-green rounded-xl mb-2 mt-2 shadow-xl">
          <div className="flex flex-col z-10 rounded-xl bg-independence text-independence-text p-5">
            <h3 className="font-bold mb-2">...this website</h3>
            <p className="mb-2">
              Static site generator Gatsby used for logic layer (it is based on
              React), Contentful for storing and providing content. For styling
              I used Tailwind.{" "}
            </p>
            <p className="self-center px-4 pt-2 pb-2.5 text-center text-dino-yellow">
              Just look around :)
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
