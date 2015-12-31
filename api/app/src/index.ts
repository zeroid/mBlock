
import App = require("./app");
import HttpServer = require("./httpserver");

var greeter = new App.Controller("Whatup");

greeter.greet();

var server = new HttpServer.Server();
server.start();
