import Head from "next/head";
import Button from "../components/Button";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 items-center">
        <div className="mt-40">
          <Hero
            heading={"Welcome to my website"}
            message={"The website is still under development"}
          />
        </div>
      </div>
      <div className="flex px-8">
          <Button text="Learn More"/>
        </div>
    </>
  );
}
