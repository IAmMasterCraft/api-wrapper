const apiWrapper = async(
    url,
    config = {
        method: "GET",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer-when-downgrade",
        data: {},
        response: "json",
    }) => {
    try {
        // Default options are marked with *
        const response = await fetch(url, {
            method: config.method,
            mode: config.mode,
            cache: config.cache,
            credentials: config.credentials,
            headers: config.headers,
            redirect: config.redirect,
            referrerPolicy: config.referrerPolicy,
            body: JSON.stringify(config.data)
        });
        return (config.response === "json") ? response.json() : response.text();
    } catch (error) {
        console.log(error.message);
        return {
            success: false,
            message: error.message,
        };
    }
}

module.exports.apiWrapper = apiWrapper;