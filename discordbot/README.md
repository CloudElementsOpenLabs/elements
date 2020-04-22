# Discord Bot

Vendor Documentation: https://discordapp.com/developers/docs

ABOUT: This is an element for Discord Bots. For those unaware, Discord is very similar to Slack but orientated towards online gaming. Discord includes both text and voice chat channels for online communication. Bots on Discord are used to automate certain functionality, and this element allows you to access that functionality through a Cloud Elements element.
This element includes all endpoints detailed in the documentation though some functionality may be missing. Abilities include creating channels and servers, posting messages, pinning messages, banning users, inviting users to channels, etc.

## Instance Creation

To create an instance of this element you must already have an [app](https://discordapp.com/developers/applications) and a bot on that app. The three configuration parameters that you need to fill in are *Bot Token*, *App Client ID*, and *App Client Secret*. All of these values can be found on your app's page. Remember to input your *Bot Token* in the form `Bot <BOT_TOKEN>` to make the auth work.

## Known Issues

- Creating messages with POST /channels/{channel.id}/messages requires you to "connect to and identify with a gateway at least once." Not quite sure how to do that so it doesn't work by default. If you can figure out a way to do that outside of the element then you should be fine.
- None of the elements have paging or CEQL. Sorry.
- Many elements are missing request/response models or have incorrect models. This was often because I didn't have access to call those methods with my bot so I couldn't get accurate response models. Specifically,
  - Missing Request Models
    - POST   /channels/{channel.id}/messages
    - PATCH  /channels/{channel.id}/messages/{message.id}
    - PUT    /channels/{channel.id}/recipients/{user.id}
    - POST   /guilds/{guild.id}/integrations
    - PATCH  /guilds/{guild.id}/integrations/{integration.id}
  - Missing Response Models
    - POST   /channels/{channel.id}/messages
    - PATCH  /channels/{channel.id}/messages/{message.id}
    - PUT    /channels/{channel.id}/recipients/{user.id} (?)
    - POST   /guilds/{guild.id}/integrations
    - GET    /guilds/{guild.id}/integrations
    - PATCH  /guilds/{guild.id}/integrations/{integration.id}
    - GET    /guilds/{guild.id}/vanity-url
    - GET    /guilds/{guild.id}/widget.png
    - GET    /users/@me/connections
    - POST   /webhooks/{webhook.id}/{webhook.token}/github
    - POST   /webhooks/{webhook.id}/{webhook.token}/slack
  - Incorrect Request Models
    - PATCH  /guilds/{guild.id}/channels
  - Incorrect Response Models
    - *PUT   /guilds/{guild.id}/bans/{user.id}
    - *PATCH /guilds/{guild.id}/channels
    - *PATCH /guilds/{guild.id}/members/{user.id}
    - *PUT   /guilds/{guild.id}/members/{user.id}
    - *PUT   /channels/{channel.id}/permissions/{overwrite.id}
- Some of the endpoints may be implemented incorrectly as a result of me being unable to test them.
- The bot's permissions are set to max and are unchangeable.
