# Sonos

Vendor Documentation: https://developer.sonos.com/reference/

ABOUT: This is an element for Sonos. Sonos builds wireless speakers for your home / business. This element allows you to authenticate to your home setup over the Sonos API and includes endpoints to control your speakers (get players / groups / set volume / ...) Additional resources available in the Sonos API might not be part of the element at time of commit but can easily be extended by duplicating any of the preconfigured element resources.


## Instance Creation

To create an instance of this element you must already have an app ("Control integration") created via the Sonos developer portal. (https://integration.sonos.com/integrations). The two configuration parameters that you need to fill in are *API Key* and *API Secret*, both of which can be found on your app's page.
Note that you will need to set redirect URLs to your app as to https://auth.cloudelements.io/oauth if you want to authenticate through the Cloud Elements UI as well.

## Known Issues

Sonos exposes a rich set of API resources. This element focuses on the Sonos Control and Authorization API. Resources implemented
*  Authorization
	* Create authorization code
	* Create token
	* Refresh token
* Control API
	* GET /households
	* GET /groups/{householdId}
	* GET /groupsFirstHousehold
	* POST /createGroup/{householdId}
	* POST /modifyGroup/{groupId}
	* GET /pause/{groupId}
	* GET /play/{groupId}
	* GET /volume/{playerId}
	* POST /volume/{playerId}
	* POST /playAudio/{playerId}

The Sonos element easy extendible in case you need additional resources for the Control API or access to the Sonos's Cloud Queue API or Sonos Music API.