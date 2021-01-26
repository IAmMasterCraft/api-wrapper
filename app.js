const axios = require('axios');
const http = require('http');
const https = require('https');

const setup = (config = {
        get: [
                {
                    "url": "data", 
                    "url": "data",
                }
            ]
        }
    ) => {
    const requestMethods = Object.keys(config);
    const finalResponse =  {
        GET: [],
        POST: [],
        PUT: [],
        DELETE: [],
    };
    
    let result, request;
    // const finalResponse = [];
    
    requestMethods.forEach(method => {
        switch (method.toLowerCase()) {
            case "get":
                request = Object.keys(config[method][0]).forEach((url) => {
                    finalResponse.GET.push(axios.get(
                        url, 
                        {
                            httpAgent: new http.Agent({ keepAlive: true }),
                            httpsAgent: new https.Agent({ keepAlive: true }),
                            timeout: 0,
                        })
                    );
                });
                break;
            case "post":
                request = Object.keys(config[method][0]).forEach((url) => {
                    finalResponse.POST.push(axios.post(
                        url, 
                        {
                            data: JSON.stringify(config[method][0][url]),
                            httpAgent: new http.Agent({ keepAlive: true }),
                            httpsAgent: new https.Agent({ keepAlive: true }), 
                            timeout: 0,
                        })
                    );
                });
                break;
            case "put":
                request = Object.keys(config[method][0]).forEach((url) => {
                    finalResponse.PUT.push(axios.put(
                        url, 
                        {
                            data: JSON.stringify(config[method][0][url]), 
                            httpAgent: new http.Agent({ keepAlive: true }),
                            httpsAgent: new https.Agent({ keepAlive: true }),
                            timeout: 0,
                        })
                    );
                });
                break;
            case "delete":
                request = Object.keys(config[method][0]).forEach((url) => {
                    finalResponse.DELETE.push(axios.delete(
                        url, 
                        {
                            data: JSON.stringify(config[method][0][url]), 
                            httpAgent: new http.Agent({ keepAlive: true }),
                            httpsAgent: new https.Agent({ keepAlive: true }),
                            timeout: 0,
                        })
                    );
                });
                break;
            default:
                request = Object.keys(config[method][0]).forEach((url) => {
                    finalResponse.GET.push(axios.get(
                        url, 
                        {
                            httpAgent: new http.Agent({ keepAlive: true }),
                            httpsAgent: new https.Agent({ keepAlive: true }),
                            timeout: 0,
                        })
                    );
                });
                break;
        }
    });

    return finalResponse;
}

const apiWrapper = (config) => {
    const allResponse = setup(config);

    return Promise.all(
            allResponse['GET'],
        )
        .then(res => {
            return res[0].data;
        })
        .catch(e => console.log(e.message));
}

module.exports.apiWrapper = apiWrapper;