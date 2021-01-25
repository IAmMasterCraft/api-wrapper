# Intro

This is a simple API Wrapper for making calls to different API endpoint with different methods.

# Installation

`npm i api-wrapper --save`

# Basic Usage

```
const apiWrapper = require("api-wrapper");

const response = await apiWrapper("https://jsonplaceholder.typicode.com/todos/1");

```

# Options

The config argument is optional but below are the available configs <br>
Default options are marked with <b>*<b>

```
config = {
    method:  "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json", // *application/json, application/x-www-form-urlencoded, etc.
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer-when-downgrade", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    data: {}, // body data type must match "Content-Type" in headers
    response: "json", // *json, text, - determines how response object will be parsed
}
```
