var moment = require("moment");

module.exports = function(robot) {
    var startup_time = moment();
    robot.respond(/uptime/, function(res) {
        res.send(startup_time.toNow());
    });
}
