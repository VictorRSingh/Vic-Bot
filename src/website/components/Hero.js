import { useRouter } from "next/router";

export default function Hero({
  heading,
  headingColor = "text-blue-500",
  message,
  messageColor = "text-white",
  backgroundColor = "bg-transparent",
}) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-wrap p-4 gap-4 sm:w-1/2 sm:justify-center sm:gap-8 lg:gap-12 lg:justify-center sm:text-center">
        <h1 className={`${headingColor} text-3xl font-semibold sm:text-4xl lg:text-6xl`}>{heading}</h1>
        <p className={`${messageColor} text-xl sm:text-2xl lg:text-2xl`}>{message}</p>
      </div>
      <div className="hero-img sm:h-full sm:w-1/2"></div>
    </>
  );
}
