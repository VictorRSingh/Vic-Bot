import Link from "next/link";
import { useRouter } from 'next/router';
export default function MainNav(props) {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center pt-10 pb-10 lg:px-28 md:px-24 xs:px-12">
        <div className="text-4xl">
          <span className="text-cyan-400">Victor</span>
          <span className="text-white"> Singh</span>
        </div>
        <div>
          <ul className="flex text-white">
            <li className={`px-4 py-4 ${router.pathname == "/" ? "active" : ""}`}><Link href="/">Home</Link></li>
            <li className={`px-4 py-4 ${router.pathname == "/about" ? "active" : ""}`}><Link href="/about">About</Link></li>
            <li className={`px-4 py-4 ${router.pathname == "/projects" ? "active" : ""}`}><Link href="/projects">Projects</Link></li>
            <li className={`px-4 py-4 ${router.pathname == "/resume" ? "active" : ""}`}><Link href="/resume">Resume</Link></li>
            <li className={`px-4 py-4 ${router.pathname == "/contact" ? "active" : ""}`}><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
