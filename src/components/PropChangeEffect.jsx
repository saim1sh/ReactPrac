import { useEffect } from "react";

export default function PropChangeEffect({ id }) {

   
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [id]);


  return (
    <div>
      <h1>Prop Change Effect</h1>
      <p>Id: {id}</p>
    </div>
  );
}
