import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full max-w-4xl mx-auto h-16 px-4 flex items-center justify-center bg-white sticky top-0 border-l border-r border-neutral-300 border-b z-50">
      <div className="bg-white flex items-center justify-between flex-1 max-w-2xl rounded-full shadow-[0px_0px_0px_2px_rgba(0,0,0,0.1)] px-4 py-2 md:px-10 backdrop-blur-sm">
        <Link to="/" className="text-sm md:text-xl font-bold">
          <img src="./as-logo.svg" className="w-8 h-8 object-cover object-center hover:bg-neutral-100 transition duration-300 active:scale-95 rounded-full" alt="" />
        </Link>

        <ul className="gap-6 hidden md:flex">
          <li>
            <Link
              to="/projects"
              className="text-neutral-600 hover:text-neutral-700 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="text-neutral-600 hover:text-neutral-700 cursor-pointer"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-neutral-600 hover:text-neutral-700 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
