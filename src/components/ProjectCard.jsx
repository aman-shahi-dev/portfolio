import { IconBrandGithubFilled, IconExternalLink } from "@tabler/icons-react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="flex items-center justify-start flex-col p-4 bg-hatch shadow-md border border-neutral-200 rounded-md">
      <div
        style={{
          backgroundImage: `url(./card-bg-${project.number}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`w-full h-40 md:h-50 border-2 rounded-b-none border-neutral-300 rounded-md flex items-end justify-center overflow-hidden md:grayscale-100 md:hover:grayscale-0 transition duration-300`}
      >
        <div className="border-b-0 border-2 md:border-b-0 md:border-3 hover:scale-105 rounded-md rounded-b-none border-neutral-300 w-3/4 h-3/4 object-cover object-center transition duration-300">
          <img
            src={project.img}
            alt=""
            className="rounded-md rounded-b-none w-full h-full object-cover object-center transition"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-start p-2 bg-white">
        <h1 className="text-lg md:text-xl">{project.title}</h1>
        <p className="text-sm text-wrap mt-2 mb-1 md:text-md text-neutral-500">
          {project.description}
        </p>
        <div className="flex items-center justify-center gap-4 mt-2 w-full">
          <a
            target="_blank"
            href={project.liveLink}
            className="select-auto px-3 py-1 bg-black text-white rounded-md hover:bg-neutral-700 hover:cursor-pointer active:scale-95 transition duration-300 flex items-center justify-center gap-1"
          >
            Live Link <IconExternalLink size={20}/>
          </a>
          <a
            target="_blank"
            href={project.githubRepoLink}
            className="select-none px-3 py-1 bg-black text-white rounded-md hover:bg-neutral-700 hover:cursor-pointer active:scale-95 transition duration-300 flex items-center justify-center gap-1"
          >
            Github <IconBrandGithubFilled size={20}/>
          </a>
        </div>
      </div>
    </div>
  );
};
