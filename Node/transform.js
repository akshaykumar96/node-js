var fs = require("fs");
var path = require("path");
var zlib = require("zlib");

var outputFile = path.join(__dirname, "/outputFile.txt"); 

if (fs.existsSync("input.txt")) fs.unlinkSync("input.txt");
fs.writeFileSync("input.txt", fs.readFileSync(__filename));

var readStream = fs.createReadStream("input.txt");
var writeStream = fs.createWriteStream("input.txt.gz")
readStream
.pipe(zlib.createGzip())
    .pipe(writeStream);
console.log("Chaining Streams Completed..");
