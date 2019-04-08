# Acquia Lift Profile Manager

Vendor Documentation: http://docs.lift.acquia.com/profilemanager/#
Additional API Documentation: hthttps://docs.acquia.com/lift/, https://github.com/acquia/http-hmac-postman

Resources: 
capture | POST
event_import | POST
segments | GET

ABOUT: This Element was built for a POC for the Acquia Lift Profile Manager product and does not contain full functionality. It does, however, include a global prehook that runs before every call to calculate HMAC signatures for accessing their HMAC protected API's. It is an interesting use case that leverages the CryptoJS library.

For more information on how to use Cloud Elements, see our [help center](https://docs.cloud-elements.com) 
or our [support page](https://support.cloud-elements.com/hc/en-us).
