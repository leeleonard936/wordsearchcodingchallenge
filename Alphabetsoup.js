//LANGUAGE: JAVASCRIPT ES7+
//TO RUN: node Alphabetsoup.js file.txt
//replace file.txt with any other local text file located in the same folder
var fs = require('fs')

 if(process.argv[3] != null){ //if there are too many arguments
    throw new Error("too many args")
 }
 if(process.argv[2] == null){ //if there are too few arguments
    throw new Error("too few args")
 }

var txt = fs.readFileSync(process.argv[2]).toString() //read in document
var totality = txt.split('\n')


var dim = totality[0].split('x')//get dimensions
var arr = [[''],['']] 
for(let i = 0; i<=dim[0]-1; i++){ //for loop that creates the two dimensional array
    arr[i]=totality[i+1].split(' ')
}
var solutions = totality.slice(Number(dim[0])+1)//creates answer array

//solution testing from here on out
var solnoutput = [];

solutions.forEach( answer =>  {// find answer in array
        var start, end;
        var ans = answer.split('')
        for(var y = 0; y < Number(dim[0]); y++){
            for(var x = 0; x < Number(dim[1])-1; x++){
                if(arr[y][x] == ans[0]){
                    console.log(answer)
                }
            }
        }
    }
)

//Tests to verify input during input work
console.log(dim)
console.log(arr)
console.log(solutions)
console.log(solnoutput)
//doesnt work, remove at end
// if(arr[y][x] == ans[0]){
//     var xdirection = 0
//     var ydirection = 0
//     var xcoord = x
//     var ycoord = y
//     var cont = true
//     for(let ydirection = -1; ydirection <= 1; ydirection++){
//         for(let xdirection = -1; xdirection <= 1; xdirection++){
//             var iterate = 0
//             while(ycoord>=0 && ycoord<=Number(dim[0])-1 && xcoord>=0 && xcoord<=Number(dim[1])-1 && cont == true){ //bounds test
//                 if(iterate == answer.length){
                    
//                     console.log(answer + ' ' + y + ':' + x + ycoord + ':' + xcoord)
//                     cont == false
//                 }
//                 if(arr[ycoord][xcoord]!=ans[iterate]){
//                     cont = false
//                 }
//                 ycoord = ycoord + ydirection
//                 xcoord = xcoord + xdirection
//                 iterate++
        
//             }
//         }
//     }
// }