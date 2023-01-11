import { useRouter } from "next/router";

export default function About(props) {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-2 grid-flow-row-dense gap-5 p-4 mt-[3rem]">
        <h1 className="flex flex-wrap col-span-2 text-blue-500 text-3xl font-semibold">
          About Me
        </h1>
        <p className="col-span-1 flex flex-wrap bg-neutral-800 text-white rounded-xl justify-center text-center shadow-white shadow-inner p-2 items-center">
          Currently enrolled at Seneca College for Computer Programming &
          Analysis
        </p>
        <p className="col-span-1 flex flex-wrap bg-neutral-800 text-white rounded-xl justify-center text-center shadow-white shadow-inner p-2 items-center">
          Retail experience at a management level
        </p>
      </div>

      <div className="grid grid-cols-2 grid-flow-row-dense gap-5 p-4">
        <h1 className="flex flex-wrap col-span-2 text-blue-500 text-3xl font-semibold justify-end text-center">
          My Hobbies
        </h1>
        <p className="col-span-2 flex flex-wrap bg-neutral-800 text-white rounded-xl text-center shadow-white shadow-inner p-2 items-center">
          I enjoy playing video games and going to the movies. I also enjoy
          learning new programming languages. Recently I got more involved into
          JavaScript creating a Discord bot the use of DiscordJS.
        </p>
      </div>
    </>
  );
}
