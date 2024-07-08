import React from "react";
import ProjectCard from "@/app/project/components/ProjectCard";
import PROJECTS from "@/constants/projects";

export default function ProjectPage() {
  return (
    <>
      <main className=" grid grid-cols-2 gap-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            github={project.github}
            link={project.link}
            image={project.image}
          />
        ))}
      </main>
    </>
  );
}
