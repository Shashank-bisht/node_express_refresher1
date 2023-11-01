const { readFile, writeFile } = require('fs').promises
const fs = require('fs')
// const util = require('util');
// const readFilepromise = util.promisify(readFile)


// const start = async () =>{
//     try{
//         const first = await readFile('./content/first.txt','utf8')
//         console.log(first)
        
//     }
//    catch(err){console.log(error)}  
// }
// console.log("shanky")
// start();

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(path,'utf8', (err,data) => {
            if (err) {
                reject(err);
            }else{
                resolve(data);
                console.log(data)
            }
        })
    })
}// wrong
// getText('./content/first.txt').then(console.log(data)).catch(console.log("error"))

//right
getText('./content/first.txt').then((text)=>{console.log(text)}).catch((error)=>{console.log(error)})

//The text parameter in the .then() block is passed as an argument because it represents the resolved value of the Promise returned by the getText function. In JavaScript Promises, the value that is passed to the resolve function inside the Promise constructor is made available as the argument to the .then() handler when the Promise is resolved successfully.

//When the getText Promise resolves successfully (i.e., when the file is read without errors), the text variable inside the .then() block will contain the content of the file, and you can use it as you see fit, such as logging it to the console or processing it further.