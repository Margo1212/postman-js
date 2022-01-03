import createTag from "./utils/createTag.js";
import httpMethods from "./utils/httpMethods.js";
import openTab from "./request-info/request-info";
import makeRequestAsync from "../scripts/send/sendRequest";
import promiseResolved from "./send/promiseResolved.js";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/yonce.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/lint/lint.js";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/json-lint.js";
import addHeader from "./headers/addHeader";

//Send request DOM API elements
const divSend = createTag({ className: "send" });
const selectSend = createTag({ tagName: "select", className: "send__methods" });
const inputSend = createTag({
  tagName: "input",
  className: "send__url",
  tagEvent: { name: "keyup", callback: handleEnterInInput },
});
const btnSend = createTag({
  tagName: "button",
  tagText: "SEND",
  className: "send__submit",
  tagEvent: {
    name: "click",
    callback: handleSendAndDisplayRequest,
  },
});

divSend.appendChild(selectSend);
divSend.appendChild(inputSend);
divSend.appendChild(btnSend);
httpMethods.map((method) => {
  selectSend.appendChild(
    createTag({
      tagName: "option",
      tagText: method,
      tagAttrs: [{ key: "value", value: method }],
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
  tagText: "Request information",
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

const requestInfoBodyTextArea = CodeMirror.fromTextArea(
  requestInfoBodyTextBox,
  {
    lineNumbers: true,
    theme: "yonce",
    mode: "application/json",
    lint: true,
  }
);

document.body.appendChild(requestInfo);

//Response DOM API elements
const responseSection = createTag({
  tagName: "section",
  className: "response",
});
const responseMainTitle = createTag({
  tagName: "h2",
  className: "response__main-title",
  tagText: "Response",
});
const responseSecondaryTitle = createTag({
  tagName: "p",
  className: "response__secondary-title",
  tagText: "Body",
});
const prettyButton = createTag({
  tagName: "button",
  className: "response__btn",
  tagText: "Pretty",
});
const rawButton = createTag({
  tagName: "button",
  className: "response__btn",
  tagText: "Raw",
});
let responseStatus = createTag({
  tagName: "p",
  className: "response__status",
});

const responseBody = createTag({ className: "response__body" });
const responseRaw = createTag({ className: "response__raw" });

const responseBodyPrettyTextArea = createTag({
  tagName: "textarea",
  className: "response__body-pretty-text-box",
});
const responseBodyRaw = createTag({
  tagName: "textarea",
  className: "response__body-raw-text-box",
});

responseSection.appendChild(responseMainTitle);
responseSection.appendChild(responseSecondaryTitle);
responseSection.appendChild(prettyButton);
responseSection.appendChild(rawButton);
responseSection.appendChild(responseStatus);
responseSection.appendChild(responseBody);
responseSection.appendChild(responseRaw);
responseBody.appendChild(responseBodyPrettyTextArea);
responseRaw.appendChild(responseBodyRaw);

const responseBodyPretty = CodeMirror.fromTextArea(responseBodyPrettyTextArea, {
  lineNumbers: true,
  theme: "yonce",
  mode: "application/json",
  lint: true,
  lineWrapping: true,
});

document.body.appendChild(requestInfo);

openTab();
// -->
addHeader();
// Accepting request with the Enter key
function handleEnterInInput(e) {
  if (e.key === "Enter") {
    handleSendAndDisplayRequest();
  }
}

export function setRequestBody() {
  let requestBody;
  try {
    requestBody = JSON.parse(requestInfoBodyTextArea.getValue());
  } catch (error) {
    requestBody = null;
  }
  return requestBody;
}

function handleSendAndDisplayRequest() {
  makeRequestAsync(inputSend.value, selectSend.value, setRequestBody())
    .then((response) =>
      promiseResolved(
        response,
        selectSend.value,
        responseStatus,
        responseBodyPretty,
        responseBodyRaw
      )
    )
    .catch(() => {
      responseStatus.innerText = "";
      responseBodyPretty.setValue("Request could not be executed");
      responseBodyRaw.innerText = "Request could not be executed";
    });
}
