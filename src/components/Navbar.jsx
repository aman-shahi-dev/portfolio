import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 mx-auto flex h-16 w-full max-w-4xl items-center justify-center border-r border-b border-l border-neutral-300 bg-white px-4">
      <div className="flex max-w-2xl flex-1 items-center justify-between rounded-full bg-white px-4 py-2 shadow-[0px_0px_0px_2px_rgba(0,0,0,0.1)] backdrop-blur-sm md:px-10">
        <Link to="/" className="text-sm font-bold md:text-xl">
          <img
            src="./as-logo.svg"
            className="h-8 w-8 rounded-full object-cover object-center transition duration-300 hover:scale-110 hover:-rotate-12 hover:bg-neutral-100 active:scale-95 active:rotate-12"
            alt=""
          />
        </Link>

        <ul className="hidden gap-2 md:flex md:items-center md:justify-evenly">
          <li>
            <Link
              to="/projects"
              className="cursor-pointer rounded-full px-4 py-2 text-neutral-600 transition duration-300 hover:bg-neutral-200 hover:text-neutral-900"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="cursor-pointer rounded-full px-4 py-2 text-neutral-600 transition duration-300 hover:bg-neutral-200 hover:text-neutral-900"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hidden cursor-pointer text-neutral-600 hover:text-neutral-900"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
