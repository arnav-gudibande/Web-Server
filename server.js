var express = require("express");//setting up the express module
var app = express();//creating an app that uses express
var PORT = process.env.PORT || 3000;//setting up the output port
var middleware = require("./middleware.js");//accessing the middleware stored in a separate file


app.use(middleware.logger);//setting up the app to use the middleware logger

app.get("/about", middleware.requireAuthentication, function (req, res){ //if the server is set up to the /about page, it will call the requireAuthentication function
  res.send("About Us!")
});

app.use(express.static(__dirname+"/public"));//it uses the express static

app.listen(PORT, function () {//setting up the app to listen on port 3000
  console.log("Express Server Started on port "+PORT+"!");
});
