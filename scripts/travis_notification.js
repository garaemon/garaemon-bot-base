var util = require("util");

module.exports = function(robot) {
    robot.listen(function(msg) {
        console.log(msg);
        return msg.user.name == "Travis CI";
    }, {}, function(res) {
        channel = process.env["BOT_CHANNEL"] || "#owerner";
        owener = process.env["OWENER_NAME"] || "owerner";
        robot.send({room: channel}, util.format("@%s New travis build!", owener));
    });
}
