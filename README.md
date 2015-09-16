# gbot

## Restart the bot
`heroku restart`

## Environmental Variables
* `OWENER_NAME` (default: "owener")

  Owener's name
* `BOT_CHANNEL` (default: "#owener")

  Channel for the bot to use
* `HUBOT_HEROKU_KEEPALIVE_URL`

  you need to specify `HUBOT_HEROKU_KEEPALIVE_URL` to keep bot awake. You need to install [hubot-heroku-keepalive](https://github.com/hubot-scripts/hubot-heroku-keepalive) plugin.

  ```
  heroku config:set HUBOT_HEROKU_KEEPALIVE_URL=$(heroku apps:info -s | grep web_url | cut -d= -f2)
  ```
* `HUBOT_HEROKU_WAKEUP_TIME` and `HUBOT_HEROKU_SLEEP_TIME`

  Time to wakeup and sleep hubot.
  ```
  heroku config:set HUBOT_HEROKU_WAKEUP_TIME=10:00
  heroku config:set HUBOT_HEROKU_SLEEP_TIME=4:00
  ```
* `TZ`

  You need to specify timezon correctly.
  ```
  heroku config:add TZ=Asia/Tokyo
  ```
* `HUBOT_SLACK_CHANNELMODE`

  see http://qiita.com/sotayamashita/items/a843c42dfa3243e4d353
  ```
  heroku config:set HUBOT_SLACK_CHANNELMODE=whitelist
  ```
* `HUBOT_SLACK_CHANNELS`

  see http://qiita.com/sotayamashita/items/a843c42dfa3243e4d353
  ```
  heroku config:set HUBOT_SLACK_CHANNELS="#ueda-local"
  ```
