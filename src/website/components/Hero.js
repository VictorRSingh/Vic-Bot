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
      <div className={`grid grid-cols-1 px-4 m-4`}>
        <h1 className={`text-4xl py-4 font-semibold ${headingColor}`}>{heading}</h1>
        <p className={`text-xl py-4 ${messageColor}`}>{message}</p>
      </div>
    </>
  );
}
