import Effect from "./components/Effect";
import PropChangeEffect from "./components/PropChangeEffect";
import Time from "./components/Time";
export default function App() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Effect />
      <PropChangeEffect id={4} />
      <Time />
    </div>
  );
}
