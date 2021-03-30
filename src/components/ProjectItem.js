import React from "react"

const ProjectItem = ({ project, type }) => {

  return (
    <div
      className="h-auto p-3 rounded-xl mb-2 shadow-xl"
      style={{
        backgroundImage: `url(${project.bgImage.file.url})`,
      }}
      key={project.id}
    >
      <div className="flex flex-col z-10 mt-20 md:mt-32 rounded-xl text-independence-text bg-independence p-5">
        <h3 className="font-bold mb-2">{project.title}</h3>
        <p className="mb-4 z-20">{project.desc.desc}</p>
        <a
          className={`self-center px-4 pt-2 pb-2.5 text-center text-${type}-light rounded-xl shadow-xl bg-${type} hover:text-independence transition ease-linear duration-300`}
          href={project.link}
        >
          Visit the website
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
