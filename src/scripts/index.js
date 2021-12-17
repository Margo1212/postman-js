import makeRequestAsync from './send/sendRequest';

let result = {};
const user = {
  id: 2,
  name: "mateusz",
};
const url = "https://jsonplaceholder.typicode.com/users";

const btn = document.getElementById("send");
btn.addEventListener("click", async () => {
  result = await makeRequestAsync(url);
  console.log(result);
});
