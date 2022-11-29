const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.use(express.static( __dirname + "/public"));

//setting view engine to ejs
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

var items = [];


app.get("/", function (req, res) {

    //res.send("<h1> i am back</h1>");

    //const d = new Date();
    //console.log(d.getDay() );
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    res.render("list",
        { currentDay: day, listitems: items });
    // res.sendFile(__dirname+"/index.html");
})


app.post("/", function (req, res) {
    //console.log(req.body);
    // console.log( req.body.list );
    var item = req.body.list;
    items.push(item);


    res.redirect("/");
    //res.send("thank you ");
})


app.listen(3000, function () {
    console.log("server strated");
})