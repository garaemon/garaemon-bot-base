var util = require("util");

module.exports = function(robot) {
    if (robot.adapter.client) {
        robot.adapter.client.on("raw_message", function(msg) {
            console.log(msg);
        });
    }
}
