const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync("./content/first.txt",'utf-8')

const second = readFileSync("./content/second.txt",'utf-8')

console.log(first)
console.log(second)

// writing in a file name result-sync

writeFileSync("./content/result-sync.txt",`here is the result:${first},${second}`)

// if we want to append the text without replacing the content then 

writeFileSync("./content/result-sync.txt","here is the resul",{flag:'a'})