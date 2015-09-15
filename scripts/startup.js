var util = require("util");

module.exports = function(robot) {
    channel = process.env["BOT_CHANNEL"] || "#owerner";
    owener = process.env["OWENER_NAME"] || "owerner";
    robot.send({room: channel}, util.format("@%s I'm up!", owener));
}
