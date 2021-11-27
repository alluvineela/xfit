var express = require("express");
var app = express();
var port = 3000;
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/ndb");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/1.html");
   }); 
   
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});
var nameSchema = new mongoose.Schema({
    unmae: String,
   usr_tell: String,
   uemail: String,
   ubirth: String,
   Weight:String

   });
var User = mongoose.model("User", nameSchema);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });