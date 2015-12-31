///<reference path='../../typings/express/express.d.ts'/>
///<reference path='../../typings/body-parser/body-parser.d.ts'/>
var express = require("express");
var parser = require("body-parser");
var Repository = require("./repository");
var Server = (function () {
    function Server() {
    }
    Server.prototype.start = function () {
        var api = express();
        api.use(parser.json());
        var repo = new Repository.InMemoryRepository();
        if (repo.list) {
            api.get("/greeting", function (req, res) {
                res.json(repo.list());
            });
        }
        if (repo.create) {
            api.post("/greeting", function (req, res) {
                var id = repo.create(req.body);
                res.setHeader("Location", id);
                res.sendStatus(201);
            });
        }
        if (repo.read) {
            api.get("/greeting/:id", function (req, res) {
                res.json(repo.read(req.params.id));
            });
        }
        if (repo.update) {
            api.put("/greeting/:id", function (req, res) {
                repo.update(req.params.id, req.body);
                res.sendStatus(200);
            });
        }
        if (repo.delete) {
            api.delete("/greeting/:id", function (req, res) {
                repo.delete(req.params.id);
                res.sendStatus(200);
            });
        }
        var server = api.listen(1337, function () {
            var host = server.address().address;
            var port = server.address().port;
            console.log("Example app listening at http://%s:%s", host, port);
        });
    };
    Server.prototype.stop = function () {
        // todo
    };
    return Server;
})();
exports.Server = Server;
