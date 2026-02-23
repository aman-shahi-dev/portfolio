import {
    IconBrandLinkedinFilled,
    IconBrandGithubFilled,
    IconBrandXFilled,
    IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";

export const Home = () => {
    return (
        <div className=" flex flex-col flex-1 h-full px-2 py-2 md:py-6">
            <div className="flex items-center justify-center gap-4 md:gap-10 p-2">
                <img
                    src="./me-anime-dp.png"
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
    );
};
