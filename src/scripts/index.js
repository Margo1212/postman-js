import createTag from "./utils/createTag.js";
import httpMethods from "./utils/httpMethods.js";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/yonce.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/lint/lint.js";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/json-lint.js";
import httpHeaders from "./utils/headers/httpHeaders";
import {handleKeyUp, selectItem} from "./utils/headers/autompleteHeaders";
import addHeader from "./headers/addHeader";

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

//section for Headers and Body
const requestInfo = createTag({
  tagName: "section",
  className: "request-info",
});
const requestInfoMainTitle = createTag({
  tagName: "h2",
  className: "request-info__main-title",
  tagText: "Request info",
});

const headersButton = createTag({
  tagName: "button",
  className: "request-info__btn",
  tagText: "Headers",
});
const bodyButton = createTag({
  tagName: "button",
  className: "request-info__btn",
  tagText: "Body",
});

//Body container and textarea
const requestInfoBody = createTag({ className: "request-info__body" });
const requestInfoBodyForm = createTag({
  tagName: "form",
  className: "request-info__body-form",
  tagAttrs: [
    { key: "method", value: "" },
    { key: "action", value: "" },
  ],
});
const textareaLabel = createTag({
  tagName: "label",
  tagAttrs: [{ key: "for", value: "textarea" }],
});
const requestInfoBodyTextBox = createTag({
  tagName: "textarea",
  className: "request-info__body-text-box",
  tagId: "textarea",
});

//Headers and Body section structure
requestInfo.appendChild(requestInfoMainTitle);
requestInfo.appendChild(headersButton);
requestInfo.appendChild(bodyButton);

//Body container
requestInfo.appendChild(requestInfoBody);
requestInfoBody.appendChild(requestInfoBodyForm);
requestInfoBodyForm.appendChild(textareaLabel);
requestInfoBodyForm.appendChild(requestInfoBodyTextBox);

CodeMirror.fromTextArea(requestInfoBodyTextBox, {
  lineNumbers: true,
  theme: "yonce",
  mode: 'application/json',
  lint: true,
});

document.body.appendChild(requestInfo);

// -->
addHeader();
