---------------------------
Author Name:kiasOrg
# Trello Element
## Vendor documentation
https://marketplace.zoom.us/docs/api-reference/zoom-api

## Authentication & Endpoints
The Zoom Element uses OAuth1 for authentication. You will need your client id, client secret, username (usually email) and password to authenticate an instance.

#### `/boards`
* `/boards/{id}` - get, update, and delete a single board by id
* `/boards/{id}/lists,checklists,cards` - get all the lists, checklists or cards on a board
* `/boards/members/{id}` - get all the boards of a specific user
* `/boards` - create a new board

#### `/cards`
* `/cards/{id}` - get, update, and delete a single card by id
* `/cards/{id}/lists,board` - get a board or list the card is on (input card id)
* `/cards/{id}/boards/{boardId}` - get a single card on a board
* `/cards` - create a new card

#### `/lists`
* `/lists/{id}` - get and update a single list by id
* `/lists/{id}/cards,board` - get a card or board the list is on (input list id)
* `/lists/{id}/idBoards` - (put) move a list to a different board
* `/lists` - create a new list

#### `/checklists`
* `/checklists/{id}` - update and delete a single board by id
* `/checklists/{id}/cards/{cardId}` - delete a checklist from a specific card
* `/checklists` - create a new checklist

## Webhooks
Webhooks are enabled for the Trello Element. Trello allows for progromatically creating webhooks as an endpoint.

## Paging
Trello uses page and page size for most endpoints. All endpoints support paging using the `elements-next-page-token` provided in the API docs.