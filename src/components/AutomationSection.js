import React, { useState, useEffect } from "react"
import { useAutomationSectionQuery } from "../hooks/useAutomationSectionQuery"
import TechItem from "./TechItem"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AutomationSection = () => {
  const { projects, images, techs } = useAutomationSectionQuery()

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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Test Automation</h1>
        </div>
        <span>
          <GatsbyImage
            image={getFluidFromArray("robot")}
            className="w-16"
            alt="Logo of robot"
          ></GatsbyImage>
        </span>
      </nav>

      <section className="flex flex-col justify-center m-2 p-3 bg-greensheen-light rounded-xl z-0 shadow-xl">
        <h3 className="text-3xl text-greensheen mb-3 self-center">
          Stuff I know...
        </h3>
        <div className="flex lg:flex-row flex-col justify-around">
          <div className="flex md:flex-row flex-col justify-around items-center w-auto lg:w-1/2 p-5 pb-7 m-2 bg-independence rounded-xl shadow-xl gap-4">
            <div className="flex flex-col text-center justify-between -mb-3 md:mb-0">
              <h3 className="font-bold m-2 text-independence-text">Test automation:</h3>
              {techs
                .filter(node => node.type === "auto-test")
                .map(node => (
                  <TechItem
                    tech={node}
                    key={node.id}
                    setTechDetails={setTechDetails}
                    type="greensheen"
                  />
                ))}
              <h3 className="font-bold m-2 text-independence-text">Manual testing:</h3>
              {techs
                .filter(node => node.type === "manual-test")
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
              <h3 className="font-bold m-2 text-independence-text">Other:</h3>
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
                    className={`w-${
                      techDetails.logoWidth * 2
                    } mr-2 inline-block`}
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

      <section className="flex flex-col p-5 m-2 mb-3 bg-greensheen-light rounded-xl items-center shadow-xl">
        <h3 className="text-3xl text-greensheen mb-5">I worked on...</h3>
        {projects &&
          projects.map(project => (
            <div
              className="h-auto p-3 rounded-xl mb-2 shadow-xl"
              style={{
                backgroundImage: `url(${project.bgImage.file.url})`,
              }}
              key={project.id}
            >
              <div className="flex flex-col z-10 md:mt-40 rounded-xl bg-independence text-independence-text p-5">
                <h3 className="font-bold mb-2"> {project.title}</h3>
                <p className="z-20">{project.desc.desc}</p>
                <ul className="list-disc pl-6 my-3">
                  <li>store, validate and provide data about charging stations</li>
                  <li>handle authorizations, based on the way customer is charging the car</li>
                  <li>load management system, that allowed clients dynamically manage kWh load coming to their infrastructure</li>
                  <li>route the info about the each charging session performed to other parts of domain matrix and many more</li>
                </ul>
                <p className="mb-4">Through the years, I was part of different teams and had different responsiblities, here are some key points:</p>
                <p className="mb-4">2018 to 2019 -&gt; E2E test automation - using <b>UFT/ALM</b>, automating long flows that started from web application frontend, came through microservice matrix and ended for ex. in SAP or Salesforce</p>
                <p className="mb-4">2019 to 2021 -&gt; functional test automation - coming down the project structure, I started working on more specific backend functional tests - using <b>UFT/ALM</b>, usually contacting REST/messaging API then checking database, or checking if service emitted expected data structure; part of responsibility was also doing integration tests (mostly manual, highly specific testcases in cooperation with other team)</p>
                <p className="mb-4">2021 to present -&gt; still testing on same level, but breaking point was introduction of <b>Cypress</b> to backend test automation instead of obsolete UFT; with previous Cypress experience, I played and I am playing big role in designing framework, planning migration, doing system wise decisions and last but not least - supporting other colleagues with getting into the new way of working.</p>
                <a
                  className={`self-center px-4 pt-2 pb-2.5 text-center text-greensheen-light rounded-xl shadow-xl bg-greensheen hover:text-independence transition ease-linear duration-300`}
                  href={project.link}
                >
                  To learn more
                </a>
              </div>
            </div>
          ))}
      </section>

      <div className="flex-grow"></div>
    </>
  )
}

export default AutomationSection
