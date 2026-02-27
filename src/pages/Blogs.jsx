import useScrollToTop from "../hooks/useScrollToTop";
import { allBlogs } from "../constants/allBlogs";
import { BlogCard } from "../components/BlogCard";
export const Blogs = () => {
  useScrollToTop();
  return (
    <div className="flex flex-col flex-1 h-full px-2 py-6">
      <div className="w-full flex flex-col items-start justify-start px-4">
        <h1 className="text-2xl md:text-4xl font-semibold mx-auto mb-4 md:mb-6 bg-hatch py-1 px-6 select-none shadow-md border border-neutral-200 rounded-md">
          My Blogs
        </h1>
        <div className="gap-6 flex flex-col w-full">
          {allBlogs.map((blog, idx) => (
            <BlogCard blog={blog} key={idx || blog.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
