var fs = require("fs");
var path = require("path");
var outputFile = path.join(__dirname, "/outputFile.txt"); 
var dataToWrite =
    "This is some data being written to the " +
    " file and read from the file using Streams"; 
var writeStream = fs.createWriteStream(outputFile); 
writeStream.on("finish", function () {
    console.log("File write operations completed.");
});
writeStream.on("error", function () {
    console.log("There was an error while writing to file.");
});
writeStream.write(dataToWrite, "utf-8"); 
writeStream.end();
console.log('Stream Write operations completed.');