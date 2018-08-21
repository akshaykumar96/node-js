var fs = require("fs");
var path = require("path");
var outputFile = path.join(__dirname, "/outputFile.txt"); 
var dataRead = ""; 
var reader = fs.createReadStream(outputFile); 
reader.setEncoding("utf-8"); 
reader.on("data", function (chunk) {
    dataRead += chunk;
});
reader.on("error", function () {
    console.log("Error occured while reading file.");
})
reader.on("end", function () {
    console.log(dataRead);
})
console.log('Stream Read operations completed.');