const data = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((json) => display(json));
};

const display = (data) => {
   data.forEach((element) => {
     console.log(element.title);
   });
}

data();