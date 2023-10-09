const { readFile, writeFile } = require('fs').promises

// const util = require('util');
// const readFilepromise = util.promisify(readFile)


const start = async () =>{
    try{
        const first = await readFile('./content/first.txt','utf8')
        console.log(first)
        
    }
   catch(err){console.log(error)}  
}
console.log("shanky")
start();

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path,'utf8', (err,data) => {
//             if (err) {
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }
