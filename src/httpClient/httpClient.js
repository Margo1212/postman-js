import axios from "axios";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    switch (status) {
      case 400:
        if (data.errors) {
          const modalStateError = [];
          for (const key of data._error) {
            if (data.errors[key]) {
              modalStateError.push(data.error[key]);
            }
          }
          throw modalStateError.flat();
        } else {
          console.log(data);
        }
        break;
      case 404:
        console.log("not found");
        break;
      case 500:
        console.log("server error");
    }
    return Promise.reject(error.message);
  }
);

axios.interceptors.request.use((request) => {
  request.time = { requestTime: new Date().toLocaleTimeString() };
  return request;
});

const httpClient = axios;

export default httpClient;
