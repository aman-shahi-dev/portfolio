export const ProjectCard = ({ project }) => {
  return (
    <div className="flex items-center justify-start flex-col border border-dashed p-2">
      <img
        src={project.img}
        alt=""
        className="w-full h-40 md:h-50 object-cover border"
      />
      <div className="w-full flex flex-col items-center justify-start p-2">
        <h1 className="text-lg md:text-xl">{project.title}</h1>
        <p className="text-sm text-wrap mt-2 mb-1 md:text-md text-neutral-500">
          {project.description}
        </p>
        <div className="flex items-center justify-center gap-4 mt-2 w-full">
          <a
            target="_blank"
            href={project.liveLink}
            className="select-auto px-3 py-1 border border-dashed rounded-full border-neutral-400  hover:bg-neutral-400 hover:cursor-pointer hover:text-white active:scale-95 transition duration-300"
          >
            Live Link
          </a>
          <a
            target="_blank"
            href={project.githubRepoLink}
            className="select-auto px-3 py-1 border border-dashed rounded-full border-neutral-400  hover:bg-neutral-400 hover:cursor-pointer hover:text-white active:scale-95 transition duration-300"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
