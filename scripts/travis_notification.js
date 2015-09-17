var util = require("util");

module.exports = function(robot) {
    channel = process.env["BOT_CHANNEL"] || "#owerner";
    owener = process.env["OWENER_NAME"] || "owerner";
    if (robot.adapter.client) {
        robot.adapter.client.on("raw_message", function(msg) {
            if (msg.subtype == "bot_message") { // bot_id = B08QP3RRT?
                if (msg.attachments.len > 0) {
                    if (msg.attachments[0].text) {
                        var urls = msg.attachments[0].text.match(/<[^<>]*>/g);
                        if (urls.len == 3) {
                            var name = msg.attachments[0].text.match(/by (.*) passed/)[1];
                            robot.send({room: channel}, util.format("@%s Build finished by %s", owener, name));
                        }
                    }
                }
            }
        });
    }
}
