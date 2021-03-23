import React from "react"

const TechItem = ({ tech, setTechDetails, type }) => {

    const handleClick = () => {
        setTechDetails(tech)
    }

  return (
    <button className={`tech-item outline-none flex mt-1 p-1 justify-center items-center cursor-pointer hover:text-${type} transition ease-linear duration-300 font-light`} onClick={ handleClick }>
      <div
        className={`w-${tech.logoWidth} mr-2 inline-block`}
        alt="logo"
        dangerouslySetInnerHTML={{ __html: tech.logo.svg.content }}
      />
      <h4>{tech.name}</h4>
    </button>
  )
}

export default TechItem
