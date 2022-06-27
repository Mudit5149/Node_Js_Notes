var fs = require("fs");
fs.readFile('this is non blocking code example', function (err, data) {
 if (err) return console.error(err);
 console.log(data.toString());
});
console.log("Program Ended");