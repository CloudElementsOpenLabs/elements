# Spotify

Vendor Documentation: https://developer.spotify.com/documentation/web-api/reference/

ABOUT: This is an element for Spotify. Spotify is a music streaming platform. This element includes all endpoints detailed in the documentation though some functionality may be missing. Abilities include pausing and playing specific songs, creating playlists, following artists, etc.

## Instance Creation

To create an instance of this element you must already have an [app](https://developer.spotify.com/dashboard/applications). The two configuration parameters that you need to fill in are *App Client ID* and *App Client Secret*, both of which can be found on your app's page.

## Known Issues

- Many of the endpoints are missing paging or CEQL.
- Some elements have incorrect response models. Specifically,
  - *PUT   /me/following
  - *PUT   /playlists/{id}/followers (?)
  - *POST  /users/{id}/playlists
  *These endpoints don't actually have response bodies but a model is neccessary due to the request method.
- Some of the endpoints may be implemented incorrectly as a result of me being unable to test them.
