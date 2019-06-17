var userNoOrg = configuration.username;

if (userNoOrg.indexOf("@") > -1) {
	var array = userNoOrg.split("@");
	userNoOrg = array[0] + "@" + array[1];
}

var headers = {
    "Authorization" : "Basic " + base64Encode(userNoOrg+":"+configuration.password)
}
return {
    "request_vendor_headers": headers,
    "continue": true
}
