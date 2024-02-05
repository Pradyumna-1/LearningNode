const fs = require("fs");
const os = require("os");
const _ = require("lodash");

const notes = require("./notes");

const user = os.userInfo();
console.log(user);
console.log(user.username);

// fs.appendFile("log.txt", "Hello " + user.username + "\n", () => {
//   console.log(" file is created");
// });

/*
var age = notes.age;
var result = notes.addNum(age + 18, 10);

console.log("Result is : " + result);
*/

var data = ["person", "person", 1, 2, 3, 4, 3, 2, "name", "22"];
var filter = _.uniq(data);

console.log(filter);

console.log(_.isString('person'));
