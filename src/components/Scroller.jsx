import { useRef } from "react";

export default function Scroller() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="px-3 py-2 bg-blue-500 text-blue-200 rounded-lg m-4 "
      >
        Scroll to Balsal
      </button>
      <div ref={ref}>
        <div className="text-2xl font-bold mt-360 p-4">Balsal</div>
      </div>
    </>
  );
}
