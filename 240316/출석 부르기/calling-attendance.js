const fs = require('fs');

let input = Number(fs.readFileSync(0).toString().trim())

if (input===1){
    console.log("John")
}
if (input===2){
    console.log("Tom")
}
if (input===3){
    console.log("Paul")
}