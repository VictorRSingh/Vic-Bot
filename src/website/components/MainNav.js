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
      <nav className="sticky left-0 top-0 w-full z-10 ease-in duration-300">
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
          <Link href="/">
            <div className="text-2xl">
              <span className="font-bold text-blue-500">Victor</span> <span className="font-semibold">Singh</span>
            </div>
          </Link>
          <ul className="hidden sm:flex">
            <li className={`p-4 ${router.pathname == '/' ? "text-blue-500 border-b-4 border-blue-800" : "hover:text-blue-300"}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`p-4 ${router.pathname == '/about' ? "text-blue-500 border-b-4 border-blue-800" : "hover:text-blue-300"}`}>
              <Link href="/about">About</Link>
            </li>
            <li className={`p-4 ${router.pathname == '/projects' ? "text-blue-500 border-b-4 border-blue-800" : "hover:text-blue-300"}`}>
              <Link href="/projects">Projects</Link>
            </li>
            <li className={`p-4 ${router.pathname == '/resume' ? "text-blue-500 border-b-4 border-blue-800" : "hover:text-blue-300"}`}>
              <Link href="/resume">Resume</Link>
            </li>
            <li className={`p-4 ${router.pathname == '/contact' ? "text-blue-500 border-b-4 border-blue-800" : "hover:text-blue-300"}`}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {toggled ? (
              <AiOutlineClose size={20} className="animate-bounce text-blue-500"/>
            ) : (
              <AiOutlineMenu size={20} className="animate-pulse text-blue-500"/>
            )}
          </div>
          
          {/* Mobile Menu */}
          <div
            className={
              toggled
                ? "sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-neutral-800 text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-neutral-800 text-center ease-in duration-300"
            }
          >
            <ul>
              <li onClick={handleNav} className={`p-4 text-3xl hover:text-blue-400 ${router.pathname == '/' ? 'text-blue-700' : ""}`}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={handleNav} className={`p-4 text-3xl hover:text-blue-400 ${router.pathname == '/about' ? 'text-blue-700' : ""}`}>
                <Link href="/about">About</Link>
              </li>
              <li onClick={handleNav} className={`p-4 text-3xl hover:text-blue-400 ${router.pathname == '/projects' ? 'text-blue-700' : ""}`}>
                <Link href="/projects">Projects</Link>
              </li>
              <li onClick={handleNav} className={`p-4 text-3xl hover:text-blue-400 ${router.pathname == '/resume' ? 'text-blue-700' : ""}`}>
                <Link href="/resume">Resume</Link>
              </li>
              <li onClick={handleNav} className={`p-4 text-3xl hover:text-blue-400 ${router.pathname == '/contact' ? 'text-blue-700' : ""}`}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
