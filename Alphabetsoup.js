var fs = require('fs')

 if(process.argv[3] != null){ //if there are too many arguments
    throw new Error("too many args")
 }
 if(process.argv[2] == null){ //if there are too few arguments
    throw new Error("too few args")
 }

var txt = fs.readFileSync(process.argv[2]).toString() //read in document
var totality = txt.split('\n')


var dim = totality[0].split('x')
var arr = [[],[]] 
for(let i = 0; i<=dim[0]-1; i++){ //for loop that creates the two dimensional array
    arr[i]=totality[i+1].split(' ')
}
console.log(dim)
console.log(arr)