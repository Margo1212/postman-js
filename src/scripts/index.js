import createTag from "./utils/createTag.js";

//Send request DOM API elements
const divSend = createTag({ className: "div-send-request" });
const spanSelectAndInput = createTag({
  tagName: "span",
  className: "span-select-and-input",
});
const selectSend = createTag({ tagName: "select", tagId: "select-send" });
const inputSend = createTag({ tagName: "input", tagId: "input-send" });
const btnSend = createTag({
  tagName: "button",
  tagText: "SEND",
  tagId: "btn-send",
});

divSend.appendChild(spanSelectAndInput);
spanSelectAndInput.appendChild(selectSend);
spanSelectAndInput.appendChild(inputSend);
divSend.appendChild(btnSend);