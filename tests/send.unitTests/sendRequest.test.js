import makeRequestAsync from "../../src/scripts/send/sendRequest";
test('make default request ', async () => {
    // arrange
    const url = "https://jsonplaceholder.typicode.com/users";
    let result;

    // act
    try {
        result  = await makeRequestAsync(url);

        // assert
        expect(result).toBeDefined();
    } catch(error) {

    }
})
