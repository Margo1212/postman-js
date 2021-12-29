const httpClient= {
    get: jest.fn(()=> Promise.resolve({response: {status: 200}})),
    post: jest.fn(()=> Promise.resolve({response: {status: 201}})),
    put: jest.fn(()=> Promise.resolve({response: {status: 200}})),
    patch: jest.fn(()=> Promise.resolve({response: {status: 200}})),
    delete: jest.fn(()=> Promise.resolve({response: {status: 200}})),
    head: jest.fn(()=> Promise.resolve({response: {status: 200}})),
    options: jest.fn(()=> Promise.resolve({response: {status: 204}})),
}

export default httpClient;
