import {
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
  IconBrandXFilled,
  IconRosetteDiscountCheckFilled,
  IconArrowUpRight,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import { Heading } from "../components/Heading";
import { homeProjects } from "../constants/homeProjects";
import { ProjectCard } from "../components/ProjectCard";
import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import { BlogCard } from "../components/BlogCard";
import { homeBlogs } from "../constants/homeBlogs";
import { DividingLine } from "../components/DividingLine";

export const Home = () => {
  // useScrollToTop();
  return (
    <div className=" flex flex-col flex-1 h-full">
      {/* HOME SECTION */}
      <div className="px-4 py-2 md:py-6">
        <div className="flex items-center justify-center gap-4 md:gap-10 p-2">
          <img
            src="./me-anime-dp-crop.png"
            alt=""
            className="w-25 h-25 md:w-40 md:h-40 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] object-cover"
          />
          <div className="flex   items-center justify-center gap-1 py-4 flex-col">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight flex gap-1 items-center ">
              Aman Shahi{" "}
              <IconRosetteDiscountCheckFilled
                className="text-blue-400"
                size={30}
              />
            </h1>
            <h2 className="text-sm md:text-xl text-neutral-500 tracking-tight font-medium">
              Web Developer
            </h2>
          </div>
        </div>
        <h2 className="text-center mt-2 text-neutral-500 text-md md:text-lg">
          Building products that helps people ease their work.
        </h2>
        <div>
          <div className="text-center mt-4  text-md md:text-lg flex items-center justify-center gap-4 md:gap-6">
            <a
              target="_blank"
              className="text-neutral-500 hover:text-neutral-700 cursor-pointer active:scale-95 flex  w-fit gap-1 items-center justify-center"
              href="https://www.linkedin.com/in/aman-shahi-dev/"
            >
              <IconBrandLinkedinFilled /> <span>LinkedIn</span>
            </a>
            <a
              target="_blank"
              className="text-neutral-500 hover:text-neutral-700 cursor-pointer active:scale-95 flex  w-fit gap-1 items-center justify-center"
              href="https://github.com/aman-shahi-dev"
            >
              <IconBrandGithubFilled /> <span>Github</span>
            </a>
            <a
              target="_blank"
              className="text-neutral-500 hover:text-neutral-700 cursor-pointer active:scale-95 flex  w-fit gap-1 items-center justify-center"
              href="https://x.com/TheBinaryCoder0"
            >
              <IconBrandXFilled /> <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <DividingLine />
      <div className="px-4 py-2 md:py-6">
        <div className="p-2  w-full flex flex-col items-start justify-start">
          <Heading className="mb-4 py-1 px-4 text-shadow-lg">Projects</Heading>
          <div className="gap-6 w-full grid grid-cols-1 md:grid-cols-2">
            {homeProjects.map((project, idx) => (
              <ProjectCard project={project} key={idx || project.title} />
            ))}
          </div>
          <Link
            to="/projects"
            className="select-none px-4 py-2 mt-4 md:mt-6 mx-auto bg-black text-white rounded-md hover:bg-neutral-700 hover:cursor-pointer active:scale-95 transition duration-300 gap-1 flex items-center justify-center"
          >
            View All Projects <IconArrowUpRight />
          </Link>
        </div>
      </div>

      {/* BLOG SECTION */}
      <DividingLine />
      <div className="px-4 py-2 md:py-6">
        <div className="p-2 w-full flex flex-col items-start justify-start">
          <Heading className="mb-4 py-1 px-4 text-shadow-lg">Blogs</Heading>
          <div className="gap-6 flex flex-col w-full">
            {homeBlogs.map((blog, idx) => (
              <BlogCard blog={blog} key={idx || blog.title} />
            ))}
          </div>
          <Link
            to="/blogs"
            className="select-none px-4 py-2 mt-4 md:mt-6 mx-auto bg-black text-white rounded-md hover:bg-neutral-700 hover:cursor-pointer active:scale-95 transition duration-300 gap-1 flex items-center justify-center"
          >
            View All Blogs <IconArrowUpRight />
          </Link>
        </div>
      </div>
      {/* CONTACT SECTION */}
      <DividingLine />
      <div className="px-4 py-2 md:py-6">
        <div className="p-2 w-full flex flex-col items-start justify-start">
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            <a
              target="_blank"
              href="https://github.com/aman-shahi-dev"
              className="p-2 active:scale-95 rounded-md border border-neutral-300 text-neutral-500 hover:text-black transition duration-300"
            >
              <IconBrandGithubFilled />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/TheBinaryCoder0"
              className="p-2 active:scale-95 rounded-md border border-neutral-300 text-neutral-500 hover:text-black transition duration-300"
            >
              <IconBrandXFilled />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aman-shahi-dev/"
              className="p-2 active:scale-95 rounded-md border border-neutral-300 text-neutral-500 hover:text-black transition duration-300"
            >
              <IconBrandLinkedinFilled />
            </a>
          </div>
          <p className="text-sm text-shadow-lg text-center w-full mt-4">
            Build with 💗 by Aman
          </p>
        </div>
      </div>
    </div>
  );
};
