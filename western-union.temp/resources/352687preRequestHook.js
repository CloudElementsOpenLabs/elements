if(!request_parameters.where){
	var empty = request_vendor_parameters.q.replace(" where {where}","");
	var map = {"q" : empty};
    done({"continue": true, "request_vendor_parameters" : map})
	
}
else{
	var full = request_vendor_parameters.q.replace(/\'/g, "");
	var map = {"q" : full};
    done({"continue": true, "request_vendor_parameters" : map});	
}

