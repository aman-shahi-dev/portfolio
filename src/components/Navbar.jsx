import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="w-full max-w-4xl mx-auto h-16 flex items-center justify-center bg-white sticky top-0">
            <div className="bg-neutral-200 flex items-center justify-between flex-1 max-w-2xl rounded-full shadow-md px-2 py-2 md:px-10">
                <Link to="/" className="text-xl font-bold">
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
