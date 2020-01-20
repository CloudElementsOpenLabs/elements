# AWS Rekognition 

### Description
This element allows one to perform image/video analysis using AWS Rekognition services.
Vendor URL: https://aws.amazon.com/rekognition/

### Setup
- A lambda code is supplied with this repo, that needs to be deployed in the region, which will have access to s3 buckets
https://cl.ly/77e156d11402
- An AWS API Gateway has to be setup, which makes request to lambda code.
https://cl.ly/12bf42846fa5
- Once you have a API that you can make a post call, Import the element and modify the request url, and add any necessary authentication.
This element is not configured any authentication, but customizable. refer to CloudElements Documentation. 

- Request to the lambda function would look something like this 
```json
{
    "action":"action",
    "payload":{}
}
```
- This is baked inside the element. Only purpose of it is to understand the payload structure/(event configuration) to lambda

### Internals of Lambda Code
Lambda picks up the assets from s3 buckets and performs aws Rekognition on top of the assets


### Releases
1.0.0
- Detect Objects in a scene, Extract text from Image, Compare two faces.

### Contact
Send a mail to [Bharadwaj Turlapati](tbj.name@gmail.com) for any queries


For more information on how to use Cloud Elements, see Documentation [help center](https://docs.cloud-elements.com)