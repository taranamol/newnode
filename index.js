var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var  _ = require("underscore");

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json()) //takes this piece of software & adds it to the middleware
//middleware: go between request & reponse, this intercepts the request & does something
//before the server processes the response

var users = [
  { 
    id: 1,
    username: "bob",
    firstname: "Bob",
    lastname: "Jones",
    age: 35
  },
   { 
    id: 2,
    username: "joe",
    firstname: "Joseph",
    lastname: "Smith",
    age: 23
  },
  { 
    id: 3,
    username: "tara",
    firstname: "tara",
    lastname: "Kaur",
    age: 23
  },
  { 
    id: 4,
    username: "zoe",
    firstname: "Zoe",
    lastname: "Foss",
    age: 23
  },
  { 
    id: 5,
    username: "mon",
    firstname: "Monika",
    lastname: "Chumber",
    age: 23
  }
];

//this is a route
app.get("/users", function(req, res) { //request & response
  res.json(users); //.json because want to display the user variable in json
});

//post/update
//creating a route to post
app.post("/users", function(req, res) { //in this step, it is listening for a post "a listener"
  var newUser = req.body; //referring to the body-parser //body of the post request
  users.push(newUser);
  res.json(newUser); //more specific version of send = res.send vs. res.json

});
// update user
app.put('/users/:id', function(req, res) {
  console.log("req.body: ", req.body);
  console.log("req.params: ", req.params);
  // set the value of the id
  var userId = parseInt(req.params.id);
  // find item in `users` array matching the id
  var targetUser = _.findWhere(users, {id:userId});
  // update the user's username
  targetUser.username = req.body.username;
  // update the user's definition
  targetUser.firstname = req.body.firstname;
  // update the user's firstname
  targetUser.lastname = req.body.lastname;
  // update the user's age
  targetUser.age = req.body.age;
  // send back edited object
  res.json(targetUser);
});

// delete user
app.delete('/users/:id', function(req, res) {
  console.log("req.body: ", req.body);
  console.log("req.params: ", req.params);
  // set the value of the id
  var userId = parseInt(req.params.id);
  // find item in `users` array matching the id
  var targetUser = _.findWhere(users, {id:userId});
  // get the index of the found user
  var index = users.indexOf(targetUser);
  // remove the user at that index, only remove 1 user
  users.splice(index, 1);
  // send back deleted user
  res.json(targetUser);
});

app.listen(3000);

//create
// app.get("/", function (req, res) { get: is the HTTP verb  /users: URI
//   res.sendFile("index.html");
// });