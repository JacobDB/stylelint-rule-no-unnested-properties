var stylelint = require("stylelint");
var ruleName = "plugin/rule-no-unnested-properties";

var messages =  stylelint.utils.ruleMessages(ruleName, {
    expected: "Expected ...",
});

module.exports = stylelint.createPlugin(ruleName, function(primaryOption, secondaryOptionObject) {
    return function(postcssRoot, postcssResult) {
        var validOptions = stylelint.utils.validateOptions(postcssResult, ruleName, {
            // ... some options ..
        });

        if (!validOptions) {
            return;
        }

        // ... some logic ...

        stylelint.utils.report({
            // .. some output ...
        });
    }
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
