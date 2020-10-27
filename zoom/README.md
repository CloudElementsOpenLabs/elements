---------------------------
Author Name:kiasOrg
# Zoom Element
## Vendor documentation
https://marketplace.zoom.us/docs/api-reference/zoom-api

## Authentication & Endpoints
The Zoom Element uses OAuth2 for authentication. You will need your client id, client secret, username (usually email) and password to authenticate an instance.

Endpoints available are dependent on the type of app you authenticate, as well as the Zoom plan level you have.

### User Managed Apps
Authenticating a user-managed app will give you access to the `/contacts` API only.

### Account Level Apps
Authenticatin an account-level app will give you access to the below APIS. **Note:** To use most APIs, you will need to have the admin level scope enables on your Zoom app.

#### `/meetings`
* `/meetings/{id}` - get, update, and delete a meeting by id
* `/meetings/{id}/registrants` - list users and register users for a meeting

#### `/users`
* `/users` - get a list of all users and create a new user
* `/users/{id}` - update, get, and delete a user
* `/users/{id}/meetings` - list all meetings for a user and create a new meeting for a user.

## Webhooks
Webhooks are enable for the Zoom Element. Zoom does not allow for progromatically creating webhooks, but you can enable the functionality here.

## Paging
Zoom uses page and page size for most endpoints. All endpoints support paging using the `elements-next-page-token` provided in the API docs.