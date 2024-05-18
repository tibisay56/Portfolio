import React from 'react'
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
    className="flex flex-col items-center justify-center py-20"
    id="projects"
  >
    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
      My Projects
    </h1>
    <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
        src="/legal.png"
        title="Modern Website"
        description="Página web moderna y funcional para una empresa legal, utilizando React y Tailwind CSS."
      />
      <ProjectCard
        src="/multi.png"
        title="Website"
        description="Página web para una empresa especializada en asesorías contables. Tecnologías Utilizadas: TypeScript, Chakra UI."
      />
      <ProjectCard
        src="/tibi.png"
        title="Portfolio"
        description="Portfolio Website with Next.js and Framer Motion."
      />
    </div>
  </div>
  )
}

export default Projects