import { useRouter } from "next/router";
import Hero from "../components/Hero";
import Image from "next/image";

export default function About(props) {
  const router = useRouter();

  const profSkills = [
    "JavaScript",
    "React.js/Next.js",
    "Node.js",
    "C++",
    "Python",
    "TailwindCSS",
    "Bootstrap 5",
    "Data Structures",
    "Algorithms",
    "RestAPI",
    "PL/SQL",
    "UNIX",
    "Java",
    "Database Administration",
  ];

  const profSpans = profSkills.map((skill) => {
    return (
      <>
        <span key="{skill}">{`| ${skill} `}</span>
      </>
    );
  });

  const softSkills = [
    "Leadership",
    "Collaboration",
    "Time Management",
    "Problem Solving",
    "Organization",
    "Adaptability",
    "Interpersonal Communication",
  ];

  const softSpans = softSkills.map((skill) => {
    return (
      <>
        <span key="{skill}">{`| ${skill} `}</span>
      </>
    );
  });

  return (
    <>
      <div className="grid grid-cols-1 w-full p-4 gap-3">
        <div className="flex justify-center col-span-1">
          <div className="border-2 border-neutral-700 rounded-full me h-52 w-52"></div>
        </div>

          <span className="col-span-1 text-blue-500 font-semi-bold text-xl text-center flex justify-center items-center">
            About Me
          </span>
          <div className="text-white text-center text-lg rounded-xl border-2 border-neutral-700 bg-neutral-900 p-4 col-span-1">
            I am currently in my 4th semester of <a className="text-blue-500 underline" href="https://www.senecacollege.ca/programs/fulltime/CPA.html">Computer Programming & Analysis</a> @ <a className="text-blue-500 underline" href= "https://www.senecacollege.ca/home.html" >Seneca College</a>. In my spare time I enjoy practicing code with various little projects suchs as making websites or working on my Discord bot.
          </div>

        <span className="col-span-1 text-blue-500 font-semi-bold text-xl text-center flex justify-center items-center">
          Professional Skills
        </span>
        <div className="text-white text-center text-lg rounded-xl border-2 border-neutral-700 bg-neutral-900 p-4 col-span-1">
          {profSpans} |
        </div>

        <span className="col-span-1 text-blue-500 font-semi-bold text-xl text-center flex justify-center items-center">
          Soft Skills
        </span>
        <div className="text-white text-center text-lg rounded-xl border-2 border-neutral-700 bg-neutral-900 p-4 col-span-1">
          {softSpans} |
        </div>
      </div>
    </>
  );
}
