import { handleKeyUp, selectItem } from "../utils/headers/autompleteHeaders";

const addHeaders = () => {
  let rowCounter = 0;
  const form = document.getElementById("headers");
  const parentDiv = form.children;
  const btn = document.getElementById("btn");
  const btnForm = document.getElementById("btn-form");
  const suggestion = document.getElementById("list-container");
  let lastRow = document.querySelectorAll(".row");
  const inp = document.getElementById("first__input");
  let selectedInput;
  let inpst = inp;

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
  btnForm.addEventListener("click", () => {
    generateObjHeader(Headers);
  });

  function generateObjHeader() {
    let headers = [];

    for (let i = 0; i < parentDiv.length; i++) {
      const inputArr = Array.from(parentDiv[i].children);
      headers.push(inputArr.map(x => x.value));
    }

    headers = headers.filter(e => !e.includes(""));

    return Object.fromEntries(headers);
  }

  suggestion.addEventListener("click", (event) => {
    selectItem(event, inpst, suggestion);
  });

  inpst.addEventListener("keyup", (event) => {
    handleKeyUp(event, suggestion);
  });

  return generateObjHeader;
};


export default addHeaders;
