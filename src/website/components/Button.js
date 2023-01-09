export default function Button({text}, props) {
  return (
    <>
      <button>
        <div className="border-2 rounded-full px-8 py-4">
            <h1 className="text-blue-500">{text}</h1>
        </div>

      </button>
    </>
  );
}
