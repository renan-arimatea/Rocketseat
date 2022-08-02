const {EventEmitter} = require('events')

const ev = new EventEmitter()

ev.on('SaySomething', (message) => {
    console.log('Eu ouvi você', message)
})

ev.emit("SaySomething", "Renan")

