import { useRouter } from "next/router";

export default function Hero({ heading, message, button = false }) {
  const router = useRouter();
  const handleButton = () => {
    router.push('/about');
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen mb-12">
        {/* Overlay */}
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-[2]" />
        <div className="p-5 text-white z-[2] mt-[-5rem]">
          <h2 className="text-5xl text-blue-500 font-bold">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
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
