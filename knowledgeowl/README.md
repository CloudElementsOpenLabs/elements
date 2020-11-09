---------------------------
Author Name:kiawnna
---------------------------
Author Name:kiawnna
# Knowledge Owl Element
## Vendor documentation
https://support.knowledgeowl.com/help/api

## Authentication & Endpoints
The Knowledge Owl Element uses Basic authentication, using an API key generated in Knowledge Owl. You will pass in the API Key as the username, and a default value of `X` will be provided automatically.

#### `/files`
* `/files/{id}` - get and delete a single file by id/name from the file library
* `/files` - add a file to the file library

#### `/article-versions`
* `/article-versions/{id}` - get an article version by id
* `/article-versions` - get all article versions by project id or for all projects

#### `/articles`
* `/articles/{id}` - get and delete a single article by id
* `/articles` - create an article and get all articles

## Webhooks
Webhooks are available in Knowledge Owl but **not** currently enabled on the Knowledge Owl Element.

## Paging
Knowledge Owl uses page and limit (which translates to page size) for most endpoints. All endpoints support paging using the `elements-next-page-token` provided in the API docs.