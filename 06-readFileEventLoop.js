const { readFile } = require('fs')

console.log('First');

readFile('./content/first.txt','utf8',(err, res)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(res)
    console.log('done rading file.');
})

console.log('Third');