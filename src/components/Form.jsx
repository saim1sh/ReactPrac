import { useRef } from "react";

export default function Form() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div>
      <input ref={ref} type="text" className="border-2 border-blue-200 p-4" />
      <button
        onClick={handleClick}
        className="px-3 py-2 bg-blue-500 text-blue-200 rounded-lg m-4 "
      >
        Submit
      </button>
    </div>
  );
}
