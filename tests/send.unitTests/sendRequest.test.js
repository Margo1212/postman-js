import makeRequestAsync from "../../src/scripts/send/sendRequest";
import httpClient from "../mocks/httpClient";

test('make default - get request ', async () => {
    // arrange
    httpClient.get.mockResolvedValue()
    let result;

    // act
    try {
        result  = await makeRequestAsync("");

        // assert
        expect(result.response.status).toBe(200);
    } catch(error) {

    }
});
test('make put request ', async () => {
    // arrange
    httpClient.put.mockResolvedValue({response: {status: 200}})
    let result;

    // act
    try {
        result  = await makeRequestAsync("", "PUT");

        // assert
        expect(result.response.status).toBe(200);
    } catch(error) {

    }
})
test('make patch request ', async () => {
    // arrange
    httpClient.patch.mockResolvedValue({data: {'name':'test', id:1}})
    let result;

    // act
    try {
        result  = await makeRequestAsync("", "PATCH");

        // assert
        expect(result.data.name).toBe('mateusz');
    } catch(error) {

    }
})
test('make delete request ', async () => {
    // arrange
    httpClient.delete.mockResolvedValue({data: {'name':'test', id:1}})
    let result;

    // act
    try {
        result  = await makeRequestAsync("", "DELETE");

        // assert
        expect(result.data.name).toBe('mateusz');
    } catch(error) {

    }
})
test('make head request ', async () => {
    // arrange
    httpClient.head.mockResolvedValue({data: {'name':'test', id:1}})
    let result;

    // act
    try {
        result  = await makeRequestAsync("", "HEAD");

        // assert
        expect(result.data.name).toBe('mateusz');
    } catch(error) {

    }
})
test('make options request ', async () => {
    // arrange
    httpClient.options.mockResolvedValue({data: {'name':'test', id:1}})
    let result;

    // act
    try {
        result  = await makeRequestAsync("", "OPTIONS");

        // assert
        expect(result.data.name).toBe('mateusz');
    } catch(error) {

    }
})
test('function return null when url not provided', async () => {
    // arrange
    httpClient.options.mockResolvedValue({data: {id:1}})
    let result;

    // act
    try {
        result  = await makeRequestAsync();

        // assert
        expect(result.data.id).toBeFalsy();
    } catch(error) {

    }
})
test('make post request ', async () => {
    // arrange
    httpClient.post.mockResolvedValue({response: {status: 201}})
    let result;

    // act
    try {
        result  = await makeRequestAsync("", "POST");

        // assert
        expect(result.response.status).toBe(201);
    } catch(error) {

    }
})
