const { readFile, writeFile } = require('fs')

const getText = (path)=>{
        return new Promise((resolve, reject)=>{
            readFile(path,'utf8', (err,data) => {
                if (err) {
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }
    
    const start = async () =>{
        try{
            const first = await getText('./content/first.txt','utf8')
            console.log(first)
            
        }
       catch(err){console.log(error)}  
    }
    console.log("shanky")
    start();