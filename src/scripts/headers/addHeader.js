import { handleKeyUp, selectItem } from "../utils/headers/autompleteHeaders";

const addHeaders = () => {
  let rowCounter = 0;
  const form = document.getElementById("headers");
  // const parentDiv = form.children;
  const btn = document.getElementById("btn");
  // const btnForm =document.getElementById('btn-form');
  const suggestion = document.getElementById("list-container");
  let lastRow = document.querySelectorAll(".row");
  const inp = document.getElementById("first__input");
  let selectedInput;
  let inpst = inp;
  // const Headers =[];

  btn.addEventListener("click", () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("row");
    const newInputKey = document.createElement("input");
    const newInputValue = document.createElement("input");
    newInputKey.setAttribute("type", "text");
    newInputKey.classList.add("row-input");
    newInputValue.classList.add("row-input");
    newInputValue.setAttribute("type", "text");
    newInputKey.setAttribute("placeholder", "key");
    newInputValue.setAttribute("placeholder", "value");
    newDiv.appendChild(newInputKey);
    newDiv.appendChild(newInputValue);
    form.appendChild(newDiv);
    rowCounter++;
    lastRow = document.querySelectorAll(".row")[rowCounter];

    selectedInput = lastRow.children[0];
    selectedInput.addEventListener("keyup", (event) => {
      handleKeyUp(event, suggestion);
    });
    inpst = selectedInput;
  });
  // btnForm.addEventListener('click',()=> {
  //     for (let i=0; i<parentDiv.length;i++) {
  //         const inputArr = Array.from(parentDiv[i].children);
  //         Headers.push(inputArr.map(x=>x.value))
  //     }
  //     generateObjHeader(Headers);
  // })

  // this function return an object which will be pass to makeRequestAsync as an argument
  // function generateObjHeader(array){
  //     const obj = Object.fromEntries(array);
  //     console.log(obj)
  // }

  suggestion.addEventListener("click", (event) => {
    selectItem(event, inpst, suggestion);
  });

  inpst.addEventListener("keyup", (event) => {
    handleKeyUp(event, suggestion);
  });
};
export default addHeaders;
