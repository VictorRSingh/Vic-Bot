import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function MainNav(props) {
  const router = useRouter();
  const [toggled, setToggled] = useState(false);

  const handleNav = () => {
    setToggled(!toggled);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 items-center rounded-br-full rounded-tr-full border-b-2 border-r-2 border-neutral-500 shadow-neutral-600 shadow-md">
        <span className="text-3xl col-span-2 p-4">
          <span className="text-blue-500 font-bold">Victor</span> <span className="font-semibold">Singh</span>
        </span>
        {/* Mobile Button */}
        <span
          onClick={handleNav}
          className="col-span-1 sm:hidden z-10 flex justify-end p-4"
        >
          {toggled ? (
            <AiOutlineClose
              size={20}
              className="animate-bounce text-blue-500"
            />
          ) : (
            <AiOutlineMenu size={20} className="animate-pulse text-blue-500" />
          )}
        </span>
        {/* Mobile Menu */}
        <div
          className={
            toggled
              ? "sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-neutral-800 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-neutral-800 text-center ease-in duration-300"
          }
        >
          <ul className="text-white font-semibold">
            <li
              onClick={handleNav}
              className={`p-4 text-3xl hover:text-blue-400 ${
                router.pathname == "/" ? "text-blue-700" : ""
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className={`p-4 text-3xl hover:text-blue-400 ${
                router.pathname == "/about" ? "text-blue-700" : ""
              }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className={`p-4 text-3xl hover:text-blue-400 ${
                router.pathname == "/projects" ? "text-blue-700" : ""
              }`}
            >
              <Link href="/projects">Projects</Link>
            </li>
            <li
              onClick={handleNav}
              className={`p-4 text-3xl hover:text-blue-400 ${
                router.pathname == "/resume" ? "text-blue-700" : ""
              }`}
            >
              <Link href="/resume">Resume</Link>
            </li>
            <li
              onClick={handleNav}
              className={`p-4 text-3xl hover:text-blue-400 ${
                router.pathname == "/contact" ? "text-blue-700" : ""
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
