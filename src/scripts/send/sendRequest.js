import httpClient from '../../httpClient/httpClient'

const makeRequestAsync = async (url, methodType, body) => {
    if (url === undefined) return;
    switch (methodType) {
        case "POST":
            return await httpClient.post(url, body);
        case "PUT":
            return await httpClient.put(`${url}/${body.id}`, body);
        case "PATCH":
            return await httpClient.patch(`${url}/${body.id}`, body);
        case "DELETE":
            return await httpClient.delete(`${url}/${body.id}`);
        case "HEAD":
            return await httpClient.head(url);
        case "OPTIONS":
            return await httpClient.options(url);
        default:
            return await httpClient.get(url);
    }
};

export default makeRequestAsync;
