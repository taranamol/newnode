
var request = require('request')
  , expect = require('chai').expect

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

// describe('Google.com', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request('https://google.com/', function(err, res, body) {
//       expect(res.statusCode).to.equal(200)
//       // expect(res.statusCode).to.equal(300)
//       console.log("err " + err + "res " + res + "body " + body);
//       done();
//     })
//   })
// });

// describe('Amazon.com', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request('https://www.amazon.com/', function(err, res, body) {
//       expect(res.statusCode).to.equal(200);
//       // expect(res.statusCode).to.equal(300)
//       console.log("err " + err + "res " + res + "body " + body);
//       done();
//     })
//   })
// });

describe('/users', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000/users', function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      // expect(res.statusCode).to.equal(300)
      console.log("err " + err + "res " + res + "body " + body);
      done();
    })
  })
});

describe("test - add a user", function() {
  it("should add a user", function(done) {
    var newUser = { id: 6,
    username: "bob",
    firstname: "Bob",
    lastname: "Jones",
    age: 35
  };
    
    request.post('http://localhost:3000/users', {form: newUser}, function(err, res, body) {
     expect(res.statusCode).to.equal(200);
     // expect(res.statusCode).to.equal(300)
     console.log("NEW USER" + newUser);

     done();
   });
 });
});

describe("test - update a user", function() {
  it("should update a user", function(done) {
    var newUser = { id: 6,
    username: "update",
    firstname: "Bob",
    lastname: "Jones",
    age: 35
  };
    
    request.put('http://localhost:3000/users/6', {form: newUser}, function(err, res, body) {
     expect(res.statusCode).to.equal(200);
     console.log("put the user" + newUser);

     done();
   });
 });
});

describe("test - delete a user", function() {
  it("should delete a user", function(done) {
      
    request.delete('http://localhost:3000/users/6', {form: {id: 6}, function(err, res, body) {
     expect(res.statusCode).to.equal(200);
     console.log("delete the user" + newUser);

     done();
   });
 });
});

