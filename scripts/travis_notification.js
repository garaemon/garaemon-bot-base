var util = require("util");

module.exports = function(robot) {
    channel = process.env["BOT_CHANNEL"] || "#owerner";
    owener = process.env["OWENER_NAME"] || "owerner";
    if (robot.adapter.client) {
        robot.adapter.client.on("raw_message", function(msg) {
            if (msg.subtype == "bot_message") { // bot_id = B08QP3RRT?
                console.log(msg);
                if (msg.attachments.length > 0) {
                    if (msg.attachments[0].text) {
                        // msg.attachments[0].text should be like
                        // "Build <https://travis-ci.org/jsk-ros-pkg/jsk_planning/builds/80766954|#76> (<https://github.com/jsk-ros-pkg/jsk_planning/pull/28|b214435>) of jsk-ros-pkg/jsk_planning@master in PR <https://github.com/jsk-ros-pkg/jsk_planning/pull/28|#28> by Ryohei Ueda passed in 13 min 26 sec"
                        var urls = msg.attachments[0].text.match(/<[^<>]*>/g);
                        // urls[0] - travis lnk
                        // urls[1] and urls[2] - github link
                        if (urls.length == 3) {
                            if (msg.attachments[0].text.match(/by (.*) passed/)) {
                                var name = msg.attachments[0].text.match(/by (.*) passed/)[1];
                                robot.send({
                                    room: channel
                                }, util.format("@%s Build finished by %s\nReview %s", owener, name, urls[1]));
                            }
                            else if (msg.attachments[0].text.match(/by (.*) errored/)) {
                                var name = msg.attachments[0].text.match(/by (.*) errored/)[1];
                                robot.send({
                                    room: channel
                                }, util.format("@%s Failed to build by %s\nRestart %s", owener, name, urls[1]));
                            }
                        }
                    }
                }
            }
        });
    }
}
