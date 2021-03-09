/*fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.text())
  .then(data => document.body.innerHTML = data);*/
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log(data));