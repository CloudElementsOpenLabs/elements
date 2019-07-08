const AWS = require('aws-sdk/index');
const rekognition = new AWS.Rekognition();

const compareFaces = function(event, resolve, reject){
    var response = {
    };
    rekognition.compareFaces(event.payload, function (err, data) {
        if (err) {
            console.log("#####"+err);
            response.statusCode = 400;
            response.data = err;
            response.err = true;
            resolve(response);
        } else {
            response.statusCode = 200;
            response.data = data;
            response.err = false;
            resolve(response);
        }
    });
};

const sceneDetection = function(event, resolve, reject){
    var response = {
    };
    rekognition.detectLabels(event.payload, function (err, data) {
        if (err) {
            response.statusCode = 400;
            response.data = err;
            response.err = true;
            resolve(response);
        } else {
            response.statusCode = 200;
            response.data = data;
            response.err = false;
            resolve(response);
        }
    });
};

const getTextFromImage = function(event, resolve, reject){
    var response = {
    };
    rekognition.detectText(event.payload, function (err, data) {
        if (err) {
            response.statusCode = 400;
            response.data = err;
            response.err = true;
            resolve(response);
        } else {
            response.statusCode = 200;
            response.data = data;
            response.err = false;
            resolve(response);
        }
    });
};

exports.handler = async (event, context, callback) => {
    var response = {
        "error":true,
        "errorMessage":"No Such API"
    };
    return new Promise((resolve, reject)=>{
        if(event.action == "compareFaces"){
            compareFaces(event, resolve, reject);
        } else if(event.action == "getTextFromImage"){
            getTextFromImage(event, resolve, reject);
        } else if(event.action == "sceneDetection"){
            sceneDetection(event, resolve, reject);
        } else{
            reject(response);
        }
    });
};