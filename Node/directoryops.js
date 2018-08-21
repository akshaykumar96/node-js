var fs = require("fs");
var path = require("path");
var baseFolder="C:\\Examples";

//check whether this directory exists , if yes, then remove the directory
//create the directory
if(fs.existsSync(baseFolder));
 {  console.log("directory exists Deleting the directory now..");
     fs.rmdirSync(baseFolder);
     console.log("directory removed");
}
console.log("creating the directory");
fs.mkdirSync(baseFolder);
console.log("directory creted successfully");

//same operation asyncronuos
fs.exists(baseFolder,(exists) =>
{
    if(exists)
    {
        console.log("Asunc: exixts , Removing now");
        fs.rmdir(baseFolder,(err)=>
    {if (err)
        console.log("asyn error");
        console.log("Async removed directory");
        fs.mkdir(baseFolder ,(err)=>{
            if(err) console.log("Async error occured",err);
            console.log("async directory crested succesfully");
        });
    });
    
   console.log("Async: after removing directory");
    }
    console.log("Async: after checking condition");
});
console.log("Async: Outside the exists operation");