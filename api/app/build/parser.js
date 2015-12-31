var JSONParser = (function () {
    function JSONParser() {
    }
    JSONParser.factory = function (resource) {
        return new JSONParser();
    };
    JSONParser.prototype.parse = function (input) {
        return JSON.parse(input);
    };
    return JSONParser;
})();
exports.JSONParser = JSONParser;
