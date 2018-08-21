 var path = require("path");

//print the directory path to the current directory
 console.log(path.dirname(__dirname));
 var str1= "c:\\windows";
 var str2= "system";
 var str3 = path.join(str1, str2);
 console.log(`Join Paths [${str1}] and [${str2}] into [${str3}]`)

//get the extension of a file
console.log(`File extension of current file  ${path.extname(__filename)}`);
var p = path.resolve("wwwroot","static_files/png");
console.log(`path is resolved to ${p}`);
var p = path.resolve("wwwroot","static_files/png",".././gif/../image.gif");
console.log(`path is resolved to ${p}`);

