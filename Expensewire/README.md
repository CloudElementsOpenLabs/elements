# ExpenseWire

Vendor Documentation: not publically avaiable

Resources: 
authenticate | POST (this is hidden from the API docs but runs on authentication)
expenses | GET
users | GET, POST

ABOUT: The ExpenseWire Element is a very good example of a complex SOAP endpoint. The API was written in that the XML body sent in to each request needed to be HTML-encoded and hence stringified in our platform. Therefore, you'll see in each resource, a prehook exists in which we dynamically place parts of the request into the stringified body.

For more information on how to use Cloud Elements, see our [help center](https://docs.cloud-elements.com) 
or our [support page](https://support.cloud-elements.com/hc/en-us).
