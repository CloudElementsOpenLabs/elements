# Exact online

Vendor Documentation: https://support.exactonline.com/community/s/knowledge-base#All-All-HNO-Content-resources-eol-files-homeexactonlinehelpcentre
API References: https://start.exactonline.nl/docs/HlpRestAPIResources.aspx?SourceAction=10

ABOUT: This is an element for Exact Online whch is an accounting and CRM platform. The element supports Exact's oauth2 flow and has example resources added

## Trial environment

Register for an Exact online account using any of the links described on the following page. You can use these credentials to test out the element.
https://support.exactonline.com/community/s/knowledge-base#All-All-DNO-Content-developerssubscriptiont

## Instance Creation

Once you have your trial account, login to Exact online and click "marketplace > My App center" at the top.  This takes you to the Exact app center where you can click "Register API keys" from the menu.  Complete the app information to receive a cient_id and client_secret.

Because you will be using your id and secret in Cloud Elements and authenticate via the UI, make sure to set the redirect uri to https://auth.cloudelements.io/oauth.

## Element setup

The setup supports Exact Online's oauth2 flow. The flow is standard apart for refreshing your token. This is done by the /ping resource that is added to the element and holds javascript in its posthook to set the authentication timestamp which is NULL during the token exchange process.

## Element resources
- /currentdivision gets the division code your profile belongs to. As explained in Exact's documentation, the division code is mandatory for almost all API calls
- /contacts gets the contact information
- /invoices references the /SalesInvoice 
- /products references listItems that can be used when creating an invoice
- /purchase-orders gets you all available purchase orders
- /vendors lists all available vendors

## Known Issues

- The element instance does not refresh at moment of writing
- Only holds a few resources which should help you to easily extend the element
- 

You can easily extend the element from its current state and add resources you would require by reading the Exact online API reference documentation