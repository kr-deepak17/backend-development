const http = require('http');
const fs = require('fs');
const myServer =http.createServer((req,res)=>{
    const log=`${Date.now()}: ${req.url} New req recieved\n`;
    fs.appendFile('log.txt',log,(err,Data)=>{
        switch(req.url){
            case '/':res.end("homepage");
            break;
            case '/about' :res.end("hi i am deepak kumar");
            break;
            default:
                res.end("404 Not Found");
        }
    
    });
});
myServer.listen(8001,()=>{
    console.log("Server started !");
})


