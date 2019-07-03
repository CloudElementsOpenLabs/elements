var newPath = "https://vca.vmware.com/api/metering/service-instance/" +request_parameters.server + "/l2/" + request_parameters.vdc + "/billable-usage";

if (request_parameters.startTime !== null && request_parameters.endTime !== null) {
	newPath += "?start=" + request_parameters.startTime + "&end=" + request_parameters.endTime;
}

var headers = {
    "Authorization" : "Bearer " + configuration.vchsauthorization
}
return {
    "request_vendor_headers": headers,
    "request_vendor_path": newPath,
    "continue": true 
}