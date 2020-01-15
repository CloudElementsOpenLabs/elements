# ADP WorkForce Now

Vendor Documentation: https://developers.adp.com/articles/api/all/apiexplorer


## JavaKeyStore creation
In order to use the element you will need to create a base64 encoded javakeystore using your SSL certificates and private key. An explanation on how to complete this step can be found here: https://docs.cloud-elements.com/home/39eb2b4

## Available Resources
POST /authenticate
POST /authenticate-refresh
GET POST/employees
GET POST /employees/{employeeId}/contacts
GET DELETE PATCH /employees/{employeeId}/contacts/{contactId}
POST PATCH/employees/{employeeId}/legal-address
POST GET /employees/{employeeId}/pay-distributions
PATCH /employees/{employeeId}/pay-distributions/{payItemId}
POST PATCH/employees/{employeeId}/personal-address
GET PATCH DELETE /employees/{id}
GET /objects/{objectName}/metadata
GET /serviceTest

## ADP Service Test
When you obtain an ADP sandbox, usually no API's are enabled. Download the `adpServiceTest2.sh` and `adpMetaAPIs.txt` to a directory, then run the script. The script will test all metadata API's to verify whether the API service is active or not, and outputs a CSV with the results
