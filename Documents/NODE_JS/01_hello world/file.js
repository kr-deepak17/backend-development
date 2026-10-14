const fs =require("fs");
fs.writeFileSync("./hello.txt","hello i am created file");
fs.writeFile("./hello2.txt","hello i am created file and aysync vali file",(err)=>{});

const result = fs.readFileSync("./contact.txt","utf-8")
console.log("result is ",result);

fs.readFile("./contact.txt","utf-8",(err,data)=>{
    if(err){
        console.log("the error is ",err);
    }
    else{
        console.log("the result in the file is",data);
    }
})


fs.appendFileSync("./hello.txt","hey i am new content\n");
fs.appendFileSync("./hello.txt","hey i am new content\n");
fs.appendFileSync("./hello.txt","hey i am new content\n");

fs.copyFileSync("contact.txt","copy.txt");

fs.unlinkSync("copy.txt"); // for deleting

console.log(fs.statSync("hello2.txt"));

