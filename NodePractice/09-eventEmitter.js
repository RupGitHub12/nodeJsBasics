const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//order matters
customEmitter.on('response',(name, id)=>{
    console.log(`data received User: ${name} age: ${id} `);
})
customEmitter.on('response',()=>{
    console.log(`next data received `);
})

customEmitter.emit('response','john', 23)