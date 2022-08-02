const getFlagValue = require("./export")

console.log(`Oi ${getFlagValue('--name')}.${getFlagValue('--greeting')}`)
