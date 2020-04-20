Tableau
-------------

Tableau is business intelligence software that helps people see and understand their data.
Official website: https://www.tableau.com/ - Register for a **free trial**
API Documentation
* [Getting started tutorial](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_get_started_tutorial_part_1.htm#sign-in-to-your-server)
* [All methods](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref.htm)



#### Supported resources
Tableau supports a large set of resources.  This is an example element that allows you to authenticate to your Tableau trial. It uses the returned token as header and stores the siteId in the element configuration.  The resources /mySite and /usersForSite (and most other resources) require the site identifier.

Resource details
* 100% REST
* Authentication to /auth/signin
* GET /mySite > /api/3.7/sites/{contentUrl}?key=contentUrl
* GET /usersForSite > /api/3.7/sites/{siteId}/users


#### Known issues
The element does not automatically refresh its token. Your connection will automatically be invalidated after a while. You will need to create a new instance to overcome this for now.


### Element setup
#### Base URL
Tableau has many versions of their API and not all resources seem to be available for each version. That is why the base URL does not hold /api/x.y but rather find that within the mapped resource

#### Authentication
Tableau holds requires custom authentication where its successful response provides you with your token and siteId. 
"SiteId" is a parameter that seem to be used in most of the Tableau resources.
"Token" is required as authentication header for every resource call you execute as **"X-Tableau-Auth"**

The custom authentication built into the element will automatically store both variables onto its instance configuration for future use.  

**Configurations** explained
See **Configuration** parameters as variables defined on the element and stored within the instance you create.  The following variables are important for Tableau

| Variable | Explanation           |
| ------------- |:-------------|
| username      | Your Tableau account email address required for authentication. It is marked as Required and visible on the UI.  |
| password      | Your Tableau account its password required for authentication. It is marked as Required and visible on the UI.      |
| contentUrl     | Your Tableau account comes with a contentUrl upon creation and is required for authentication to identify which company/site you are addressing. It is marked as Required and visible on the UI.      |
| token      | A variable used throughout the lifecycle of the instance. The Tableau authentication response will hold this token upon response. Our post-hook will store the token in this variable for later use  |
| siteId      | A variable used throughout the lifecycle of the instance. The Tableau authentication response will hold this siteId upon response. Our post-hook will store the siteId in this variable for later use  |

**Parameters** explained
Upon successful authentication Tableau provides us with a "token" that the element will automatically store in its configuration parameter (see **configurations**). This token is to be used on **every API call** to Tableau as auth header called **X-Tableau-Auth**.

This is exactly what the **parameters** configuration does for this element. It grabs the "token" variable from the configuration for every **request** and moves it to the **header** as **X-Tableau-Auth**.  As previously explained, the "token" variable used is automatically completed upon authentication.

**ON PROVISION** explained
The Tableau element comes with custom Authentication for which we are using the configuration as described above, you will find these on the UI upon instance creation.  In order to properly validate and actually authenticate to the Tableau service the Element has a POST resource called "/auth" that maps on "/api/3.7/auth/signin".

Because authentication is defined as "custom" at the element setup, it still requires a URL to do the actual authentication.  That is why that /auth POST method is relevant, here are the key important things you need to know about its setup


| Setup | Explanation           |
| ----- |:-------------|
| Resource Type      | Under "configuration" of the resource notice how **Resource type** is set to "ON PROVISION" whereas a typical element resource is set to "API".  The "ON PROVISION" type will make sure this resource is executed upon instance creation.  When this call fails, instance creation will fail.  Upon success you can use its response to work with (ie set configuration variables on the instance)  |
| Parameters | The resource has no parameters available but you could use this to map and construct the body for instance. The current config does that via JS|
|PreRequest Hook| The PreRequest hook is executed when making the call to Tableau. We are using this to construct the body the /auth/signin POST is expecting as described [here](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_get_started_tutorial_part_1.htm#request-body). The prehook returns our constructed body as the request_vendor_body. Notice that the JS grabs data from the configuration parameter, these are the values provided by the user when authenticating to the element. |
|PostRequest Hook|If the call to /api/signing endpoint at Tableau was successful we will receive a confirmation with JSON holding both the token and sideId (plus extra info).  The post hook JS is important. It grabs both these tokens and stores them within the configuration variables. They are now available through the lifecycle of the element instance. |



#### Resource configuration
There are two ways to get to your Site information for Tableau. You either use the contentUrl provided upon authentication by the user or use the siteId stored on the element instance upon successful authentication.

As example the **/mySite** resource is configured to use the contentUrl from the configurations. Notice this to be the only parameter we set. It moves the contentUrl variable value from configuration to the Path which is represented in the mapped Tableau end point /api/3.7/sites/{contentUrl}?key=contentUrl. (Note: you can change naming here, just make sure it matches the parameter config)
Notice how the configuration set "Response Root Key" to "site". You can define this to manipulate what the response looks like.

The other example is very similar for **/usersForSite** where the element uses the siteId configuration variable. Same setup with the only difference that siteId was automatically completed by the response coming back on the /auth call at element provisioning
