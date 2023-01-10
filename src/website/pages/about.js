import { useRouter } from "next/router";

export default function About(props) {
  const router = useRouter();

  return (
    <>
      <div className="h-5/6 flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-y-16">
          <div className="col-span-1 text-left flex items-center">
            <h1 className="text-blue-500 font-semibold text-5xl">About Me</h1>
          </div>
          <div className=" col-span-1 text-center">
            <p className="text-white text-xl">
              I am currently a student currently enrolled at Seneca College
            </p>
          </div>
          <div className="border-2 rounded-xl col-span-2 bg-blue-500 p-4">
            <h1 className="text-white text-2xl">Why Programming?</h1>
            <p className="text-black font-semibold p-4">
              I chose to go into programming because I have always admired the
              idea of being able to create any program that can do anything y              wanted.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
