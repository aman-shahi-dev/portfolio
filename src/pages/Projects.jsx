import { allProjects } from "../constants/allProjects";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  return (
    <div className="flex flex-col flex-1 h-full px-2 py-6">
      <div className="w-full flex flex-col items-start justify-start">
        <h1 className="text-2xl md:text-4xl font-semibold mx-auto mb-4 md:mb-6 bg-hatch py-1 px-6 select-none shadow-md">
          My Projects
        </h1>
        <div className="gap-6 w-full grid grid-cols-1 md:grid-cols-2">
          {allProjects.map((project, idx) => (
            <ProjectCard project={project} key={idx || project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
