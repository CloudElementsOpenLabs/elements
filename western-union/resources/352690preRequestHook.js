var code = decodeURIComponent(request_parameters.code);
done({
    "continue": true,
    "request_parameters.code": code
});