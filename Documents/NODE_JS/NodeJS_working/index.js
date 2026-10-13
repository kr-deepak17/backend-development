
// const fs = require('fs');
// setTimeout(()=>console.log("hello from timer 1"),0);
// setImmediate(()=>console.log("hello from immediate fn 1"))
// console.log("hello from top level code");



// setTimeout(()=>console.log("hello from timer 1"),0);
// setImmediate(()=>console.log("hello from immediate fn1"));


// setTimeout(()=>console.log("hello from timer 1"),0);
// setImmediate(()=>console.log("hello from immediate fn1"));
// fs.readFile('sample.txt','Utf8',()=>{
//     console.log("IO polling in finish");
// })
// console.log("hello from top level code");



// more complex;

// setTimeout(()=>console.log("hello from timer 1"),0);
// setImmediate(()=>console.log("hello from immediate fn1"));
// fs.readFile('sample.txt','Utf8',()=>{
//     console.log("IO polling in finish");
//     setTimeout(()=>console.log("hello from timer 2"),0);
//     setTimeout(()=>console.log("hello from timer 3"),5*1000);
//     setImmediate(()=>console.log("hello from immediate fn1"));
// })
// console.log("hello from top level code");



// use of thread poll 

const fs = require('fs');
const crypto= require('crypto');
// crytosize

process.env.UV_THREADPOOL_SIZE=1;
const start = Date.now();
setTimeout(()=>console.log("hello from timer 1"),0);
setImmediate(()=>console.log("hello from immediate fn1"));
fs.readFile('sample.txt','Utf8',(err,data)=>{
    console.log("IO polling in finish");
    if(err){
        console.log(err);
        return ;
    }
    setTimeout(()=>console.log("hello from timer 2"),0);
    setTimeout(()=>console.log("hello from timer 3"),5*1000);
    setImmediate(()=>console.log("hello from immediate fn1"));

    //  CPU INTENSIVE TASK
    crypto.pbkdf2('password1','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 1 done');
    })

    crypto.pbkdf2('password2','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 2 done');
    })

    crypto.pbkdf2('password3','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 3 done');
    })

    crypto.pbkdf2('password4','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 4 done');
    })

     crypto.pbkdf2('password5','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 4 done');
    })

     crypto.pbkdf2('password6','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'password 4 done');
    })
})
console.log("hello from top level code");





