# Intro

This is a super simple API Wrapper for making calls to different API endpoint with GET request.

# Installation

`npm i simple-api-wrapper --save`

# Usage

```
const wrapper = require("simple-api-wrapper");

//endpoints and data
const config = {
        get: [
                {
                    "https://jsonplaceholder.typicode.com/posts": {}, 
                    "https://jsonplaceholder.typicode.com/posts/1": {},
                }
            ],
        };

const allResponse = wrapper.apiWrapper(config);
allResponse.then(result => console.log(result));

```

# Options

The config argument is <b>REQUIRED</b> but below are the available configs <br>

```
const config = {
    method: [
        {
            url_1: {...data_1}, 
            url_2: {...data_2},
            ...
            url_n: {...data_n},
        }
    ]
};

```
<b>method</b>: "get" - specifies http method for api request <br>
<b>url</b>: "http://some-api-host/endpoint" - specifies url string of different API endpoint <br>
<b>data</b>: {key: "value",} - specifies key-value pair of object/data to be sent to different API endpoint <br>
