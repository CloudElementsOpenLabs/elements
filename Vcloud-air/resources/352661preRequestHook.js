var headers = {
    "Authorization" : "Basic " + base64Encode(configuration.username+":"+configuration.password)
}
return {
    "request_vendor_headers": headers
}
