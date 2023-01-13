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
    <div className={`flex justify-center flex-wrap h-full gap-4 ${backgroundColor}`}>
      <h1 className={`flex items-end text-4xl font-semibold flex-grow ${headingColor}`}>{heading}</h1>
      <p className={`${messageColor} flex items-start flex-grow`}>{message}</p>
    </div>
    </>
  );
}
