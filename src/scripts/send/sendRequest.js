import httpClient from "../../httpClient/httpClient";

const makeRequestAsync = async (url, method, data, headers) =>
  httpClient({
    method,
    url,
    data,
    headers,
  });

export default makeRequestAsync;
