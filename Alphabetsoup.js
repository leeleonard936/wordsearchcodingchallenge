var fs = require('fs')

 if(process.argv[3] != null){
    throw new Error("too many args")
 }
var txt = fs.readFileSync(process.argv[2]).toString()
var totality = txt.split('\n').toInt()

if(totality.length<3){
    throw new Error("Not enough lines")
}
var dim = totality[0].split('x')
console.log("nothing")
console.log(dim)