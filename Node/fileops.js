var fs = require("fs");
var path = require("path");

//file operation can also be sync and async
var fileName="myfile.txt";
var filePath=path.join(__dirname,fileName);
if(fs.existsSync(filePath))
{
    console.log("File exists");
    fs.unlinkSync(filePath);
}
fs.writeFileSync(filePath,"this is spme text content");
console.log("contents written to file",filePath);
var buffer= fs.readFileSync(filePath);
console.log(`file contents:${buffer.toString()}`);
 
fs.exists(filePath,(exists)=>{

    console.log("file exits");
      if(exists){
           console.log("unlink");
           fs.unlink(filePath,(err)=>{
     
      if(err) console.log(err);
      fs.writeFile(filePath,"Contents to be writtne",(err)=>{
    
if(err) console.log(err);
fs.readFile(filePath,(err,data)=>{
    if(err) console.log(err);
    console.log(data.toString());

});
    });
     });
}
});  