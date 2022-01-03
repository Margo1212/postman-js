import range from "../utils/sequenceGenerator.js";

const succesfulResponseCodes = range(200, 299, 1);

function promiseResolved(
  response,
  methodType,
  tagResponseStatus,
  txtAreaPretty,
  txtAreaRaw
) {
  tagResponseStatus.innerText = `Response status: ${response.status}`;
  if (succesfulResponseCodes.includes(response.status)) {
    switch (methodType) {
      case "HEAD":
        txtAreaPretty.setValue(JSON.stringify(response.headers, null, 2));
        txtAreaRaw.innerText = JSON.stringify(response.headers);
        break;
      case "OPTIONS":
        txtAreaPretty.setValue(
          JSON.stringify(
            response.headers["access-control-allow-methods"],
            null,
            2
          )
        );
        txtAreaRaw.innerText = JSON.stringify(
          response.headers["access-control-allow-methods"]
        );
        break;
      default:
        txtAreaPretty.setValue(JSON.stringify(response.data, null, 2));
        txtAreaRaw.innerText = JSON.stringify(response.data);
    }
  } else {
    tagResponseStatus.innerText = `Response status: ${response.status}`;
  }
}

export default promiseResolved;
