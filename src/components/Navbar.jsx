import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="w-full max-w-4xl mx-auto h-16 px-4 flex items-center justify-center bg-white sticky top-0 border-l border-r border-neutral-300 border-b">
            <div className="bg-white flex items-center justify-between flex-1 max-w-2xl rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_4px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)] px-2 py-2 md:px-10 backdrop-blur-sm">
                <Link to="/" className="text-sm md:text-xl font-bold">
                    Aman's Portfolio
                </Link>

                <ul className="gap-6 hidden md:flex">
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
