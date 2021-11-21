const fs=require("fs");

fs.readFile("./cool.txt","utf-8",function(error,content){
    console.log(content);
})
// for(let i=1;i<=10;i++)
// {
//     fs.writeFile(`./backup/text-${i}.html`,"Good Morning",function(error){
//         console.log("file created",i)
//     });

// }
// for(let i=1;i<=10;i++)
// {
//     fs.unlink(`./backup/text-${i}.html`,function(err){});
// }
 

fs.unlink(fs.readdir("./backup",function(error,files){}),function(err){});