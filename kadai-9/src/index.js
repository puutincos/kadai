const a = require('./module-a.js/index.js')
const b = require('./module-b.js/index.js')
a()
b()

const cowsay = require('cowsay')
console.log(cowsay.say({ text: 'Moo!' }))