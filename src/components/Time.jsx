import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  console.log("first")

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}
