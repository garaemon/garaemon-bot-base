var moment = require("moment");

module.exports = function(robot) {
    var startup_time = moment();
    robot.hear(/^[\s]*uptime[\s]*$/, function(res) {
        res.send(startup_time.toNow());
    });
}
