/* time */
const title = document.querySelector(".title");

setInterval(() => {
  const d = new Date();
  title.innerHTML = d.toLocaleTimeString();
}, 1000);

console.log("dsdsdsdsdsd");
