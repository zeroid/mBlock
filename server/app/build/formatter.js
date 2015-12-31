var JSONFormatter = (function () {
    function JSONFormatter() {
    }
    JSONFormatter.factory = function (resource) {
        return new JSONFormatter();
    };
    JSONFormatter.prototype.format = function (resource) {
        return JSON.stringify(resource);
    };
    return JSONFormatter;
})();
exports.JSONFormatter = JSONFormatter;
