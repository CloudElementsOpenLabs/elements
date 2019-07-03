var body = request_vendor_body;
var vApp = null;
if (request_expression !== null) {
	var names = null;
	for (var i = 0; i < request_expression.length; i++) {
		print(request_expression[i]);
		if (request_expression[i].attribute === 'vApp') {
			vApp = request_expression[i].value;
		} 
		if (request_expression[i].attribute === 'metricName') {
			names = request_expression[i].value;
		}
	}
	if (names !== null) {
		if (names.indexOf(",") > -1) {
			//do comma stuff
		} else {
			body = body.replace("{metricNames}", "<MetricPattern>" + names + "</MetricPattern>");
		}
	} else {
		body = body.replace("{metricNames}", "");
	}
}

var headers = {
    "Content-Type" : "application/vnd.vmware.vcloud.metrics.historicUsageSpec+xml",
    "x-vcloud-authorization": configuration.xvcloudauthorization,
    "Accept": "application/*+xml;version=9.0"
}

return {  
    "request_vendor_path": "vApp/" + vApp + "/metrics/historic",
    "request_vendor_headers": headers,
    "request_vendor_body": body,
    "continue": true 
};