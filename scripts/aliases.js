// Aliases for 3rdparty commands
var util = require("util");

module.exports = function(robot) {

    var aliases = {
        // original command <- regs
        "天気": [/^[\s]*天気[\s]*$/, /^[\s]*weather[\s]*$/],
        "show history": [/^[\s]*history[\s]*$/, /^[\s]*履歴[\s]*$/]
    }

    for (var original_command in aliases) {
        for (var new_regexp_index in aliases[original_command]) {
            var new_regexp = aliases[original_command][new_regexp_index];
            console.log(util.format("%s => %s", new_regexp, original_command));
            robot.hear(new_regexp, function(res) {
                res.message.text = res.robot.name + ' ' + original_command;
                res.robot.receive(res.message);
            });
        }
    }
};
