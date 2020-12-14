---------------------------
Author Name:IanGSalmon
**Epicor10 Element**  
This element allows the creation of an element instance for the Epicor10, on-prem API. In order to implement this element, you will need a method for exposing the local network with access to the Epicor10 API, such as Ground2Cloud.  
#  
**Vendor Documentation**  
In order to access API documentation, please access the following address in a web browser and login using your Epicor user credentials: https://{yourServer}/{yourEpicorEnv}/api/help/{apiVersion}  
- yourServer, refers to a private network address  
  - E.g. "10.1.50.170"  
  - E.g. "localhost"  
- yourEpicorEnv, refers to the name of the Epicor environment being served  
  - E.g. "erp10"  
- apiVersion, refers to the version of the Epicor REST API
  - E.g. "v1"  
A completed documentation URL example could look like: https://localhost/erp10/api/help/v1  
#  
**Resources**  
This element contains full CRUD capability *(GET, POST, PATCH, DELETE)* for the following resources *(element resource name followed by Epicor10 vendor name)*:  
- contacts
  - CustCnts
- customers
  - Customers
- invoices
  - ARInvoices
- quotes
  - Quotes
- quote-line-items
  - QuoteDtls
- sales-orders
  - SalesOrders
- sales-order-line-items
  - OrderDtls

This element contains GET functionality for the following resource:  
- products
  - Parts  
#  
**Authentication Parameters**  
- *Epicor Server URL* 
  - A URL exposed by your on-prem API Gateway or Ground2Cloud that allows a connection to the host serving the Epicor10 API. This address must allow a TLS connection from Cloud Elements to your local network. E.g. In a running Ground2Cloud setup, inside the manage tab you will see a list of active connections. One of the displayed fields will be “Endpoint”. It will look something like:  ’https://1234.g2c.cloud-elements.com’  

- *Company Name* 
  - The name given to your ‘company’ within your particular Epicor10 configuration.  

- *Epicor ERP Instance* 
  - Can be found by accessing your Epicor10 API docs. This instance name will be found in the URL between the local IP and ‘/api’. E.g. If you access your Epicor10 API docs through the address https://10.1.20.178/devapp300/api/help/v1 the Epicor ERP Instance is “devapp300”  

- *Username and Password*
  - Credentials you use for logging into Epicor10.  
  #  
  **Bulk**  
  This Epicor10 element has Cloud Elements (pagination-based) bulk supported for GET methods across each of the aforementioned resources.  
  #  
  **Webhooks**  
  This Epicor10 element has been built to receive webhooks via the Epicor10 Business Process Management (BPM) service. For more information on the object model and how Cloud Elements handles webhook events, please consult the event configuration tab after importing this element into your respective UI.