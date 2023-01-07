import { useRouter } from "next/router";

export default function Hero({ heading, message, button = false }) {
  const router = useRouter();
  const handleButton = () => {
    router.push("/about");
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-hidden">
        <div className="p-8 mt-[10rem]">
          <h2 className="text-5xl text-blue-500 font-bold">{heading}</h2>
          <p className="py-8 text-xl text-white">{message}</p>
          {button ? (
            <button
              onClick={handleButton}
              className="px-8 py-2 text-blue-500 border"
            >
              {button}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
