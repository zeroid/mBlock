/// <reference path="../../typings/underscore/underscore.d.ts" />
var _ = require("underscore");
var Greeting = (function () {
    function Greeting() {
        this.greeting = "Hello";
    }
    return Greeting;
})();
exports.Greeting = Greeting;
var Entry = (function () {
    function Entry(id, value) {
        this.id = id;
        this.value = value;
    }
    return Entry;
})();
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
        s4() + "-" + s4() + s4() + s4();
}
var InMemoryRepository = (function () {
    function InMemoryRepository() {
        this.repository = [];
    }
    InMemoryRepository.prototype.list = function () {
        var result = [];
        result.push(this.repository[0].value);
        return result;
    };
    InMemoryRepository.prototype.create = function (resource) {
        var id = guid();
        this.repository.push(new Entry(id, resource));
        return id;
    };
    InMemoryRepository.prototype.read = function (id) {
        return _.findWhere(this.repository, { id: id }).value;
    };
    InMemoryRepository.prototype.update = function (id, resource) {
        _.findWhere(this.repository, { id: id }).value = resource;
    };
    InMemoryRepository.prototype.delete = function (id) {
        this.repository = _.reject(this.repository, function (a) { return a.id === id; });
    };
    return InMemoryRepository;
})();
exports.InMemoryRepository = InMemoryRepository;
