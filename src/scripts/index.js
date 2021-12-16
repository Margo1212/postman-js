import createTag from "./utils/createTag.js";
import httpMethods from "./utils/httpMethods.js";

//Send request DOM API elements
const divSend = createTag({ className: "send" });
const selectSend = createTag({ tagName: "select", className: "send__methods" });
const inputSend = createTag({ tagName: "input", className: "send__url" });
const btnSend = createTag({
  tagName: "button",
  tagText: "SEND",
  className: "send__submit",
});

divSend.appendChild(selectSend);
divSend.appendChild(inputSend);
divSend.appendChild(btnSend);
httpMethods.map((method) => {
  selectSend.appendChild(
    createTag({
      tagName: "option",
      tagText: method,
      tagAttrs: [{ key: "value", value: method.toLowerCase() }],
    })
  );
});

