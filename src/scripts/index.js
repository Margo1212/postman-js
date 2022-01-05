import createTag from "./utils/createTag.js";
import httpMethods from "./utils/httpMethods.js";
import makeRequestAsync from "../scripts/send/sendRequest";
import promiseResolved from "./send/promiseResolved.js";
import addHeaders from "./headers/addHeader";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/yonce.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/lint/lint.js";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/json-lint.js";

//Header DOM API elements
const headerSection = createTag({
  tagName: "header",
  className: "header",
});

const headerContainerLogo = createTag({
  tagName: "div",
  className: "header__container",
});

const headerContainerHistory = createTag({
  tagName: "div",
  className: "header__container",
});

const headerLogoTitle = createTag({
  tagName: "h2",
  className: "header__title",
  tagText: "Postman-js",
});

const headerLogoIcon = createTag({
  tagName: "i",
  className: ["header__icon", "fas", "fa-rocket"],
});

const headerHistoryIcon = createTag({
  tagName: "i",
  className: ["header__icon", "header__icon--history", "fas", "fa-history"],
});

const headerHistoryBtn = createTag({
  tagName: "button",
  className: "header__btn",
});

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
  tagEvent: {
    name: "click",
    callback: () => {
      headersMarkup.classList.add("headers-opened");
      requestInfoBody.classList.remove("request-info__body-opened");
    },
  },
});

const bodyButton = createTag({
  tagName: "button",
  className: "request-info__btn",
  tagText: "Body",
  tagEvent: {
    name: "click",
    callback: () => {
      headersMarkup.classList.remove("headers-opened");
      requestInfoBody.classList.add("request-info__body-opened");
    },
  },
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

//Header section
headerSection.append(headerContainerLogo, headerContainerHistory);
headerContainerLogo.append(headerLogoTitle, headerLogoIcon);
headerContainerHistory.appendChild(headerHistoryBtn);
headerHistoryBtn.appendChild(headerHistoryIcon);

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

//Headers tags
const headersMarkup = createTag({
  tagName: "section",
  className: ["headers-markup", "headers-opened"],
});
const headers = createTag({ tagId: "headers", className: "headers" });
const headerKey = createTag({ className: "header-key", tagText: "Key" });
const headerValue = createTag({ className: "header-value", tagText: "Value" });
const row = createTag({ className: "row" });
const key = createTag({
  tagName: "input",
  className: "row-input",
  tagAttrs: [
    { key: "type", value: "text" },
    { key: "placeholder", value: "key" },
  ],
  tagId: "first__input",
});
const value = createTag({
  tagName: "input",
  className: "row-input",
  tagAttrs: [
    { key: "type", value: "text" },
    { key: "placeholder", value: "value" },
  ],
});
const listContainer = createTag({
  tagName: "ul",
  className: "list-container",
  tagId: "list-container",
  tagAttrs: [{ key: "style", value: "color:white" }],
});
const addRowButton = createTag({
  tagName: "button",
  className: "btn",
  tagId: "btn",
  tagText: "Add header",
});

//Headers structure
headersMarkup.appendChild(headers);
headers.appendChild(headerKey);
headers.appendChild(headerValue);
headers.appendChild(row);
row.appendChild(key);
row.appendChild(value);
headersMarkup.appendChild(listContainer);
headersMarkup.appendChild(addRowButton);
requestInfo.appendChild(headersMarkup);

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
const responseBtnsAndStatus = createTag({
  className: "response__btns-and-status",
});
const prettyButton = createTag({
  tagName: "button",
  className: "response__btn",
  tagText: "Pretty",
  tagEvent: {
    name: "click",
    callback: () => {
      responseBody.classList.add("active");
      responseRaw.classList.remove("active");
    },
  },
});
const rawButton = createTag({
  tagName: "button",
  className: "response__btn",
  tagText: "Raw",
  tagEvent: {
    name: "click",
    callback: () => {
      responseBody.classList.remove("active");
      responseRaw.classList.add("active");
    },
  },
});
let responseStatus = createTag({
  tagName: "p",
  className: "response__status",
});

const responseBody = createTag({ className: ["response__body", "active"] });
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
responseSection.appendChild(responseBtnsAndStatus);
responseBtnsAndStatus.appendChild(prettyButton);
responseBtnsAndStatus.appendChild(rawButton);
responseBtnsAndStatus.appendChild(responseStatus);
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

//Wrapping the entire application in a root div
const root = createTag({ className: "root" });
root.appendChild(headerSection);
root.appendChild(divSend);
root.appendChild(requestInfo);
root.appendChild(responseSection);

const getHeaders = addHeaders();
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
  makeRequestAsync(
    inputSend.value,
    selectSend.value,
    setRequestBody(),
    getHeaders()
  )
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
