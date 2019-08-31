# Spotify

Vendor Documentation: https://partner.steamgames.com/doc/webapi

ABOUT: This is an element for Steam. Steam is a video game digital distribution platform. This element includes most endpoints detailed in the documentation for user authentication keys. Abilities include getting player stats, getting app news, getting game achievement schema, etc.

## Instance Creation

To create an instance of this element you must already have a *User Web API Key* which can be found [here](https://steamcommunity.com/dev/apikey).

## Known Issues

- All of the endpoints are missing CEQL.
- Paging is implemented through prehooks and is likely inefficient.
- The response body of the GET /applist endpoint is too large.
- The GET /globalStatsForGame endpoint only works on aggregated stats but I can't find documentation on which stats are agggreagted.
