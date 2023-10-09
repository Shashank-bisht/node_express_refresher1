const EventEmitter = require('events')

const customEventEmitter = new EventEmitter()

customEventEmitter.on("response",()=>{
    console.log(`data recieved`)
})

customEventEmitter.emit("response")