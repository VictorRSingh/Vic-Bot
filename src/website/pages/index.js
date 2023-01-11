export default function Home() {
  return (
    <>
      <div className="grid grid-rows-2 py-8 mb-8 sm:mb-24 px-4 gap-y-4">
        <h1 className="text-4xl text-blue-500 font-bold flex items-end mb-4">
          Welcome to my website!
        </h1>
        <div className="text-white text-center text-xl rounded-xl bg-neutral-900 p-4 flex items-center mb-4 flex-wrap justify-center">
        <p>
          The website is still being developed. Thank you for visiting!
        </p>
        <p>
        Links in <span className="text-red-500">red</span> are not complete, Links in <span className="text-green-500">green</span> have been complete/worked on.
        </p>
        </div>

      </div>
    </>
  );
}
