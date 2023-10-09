const {readFile} = require('fs');

const getText = ()=>{
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

getText('./content/first.txt').then(result=>console.log(result)).catch(err=>console.log(err));

//You first import the readFile function from the fs module.

//You define a function called getText that takes a path as an argument. This function returns a Promise that reads the file at the specified path using readFile.

//Inside the getText function, you create a new Promise that resolves with the file's contents if the file is successfully read, or rejects with an error if there's a problem.

//You use the readFile function, passing in the path, the encoding 'utf8' to read the file as text, and a callback function that handles the result or error.

//If an error occurs (err is not null), the Promise is rejected with the error using reject(err).

//If no error occurs, the Promise is resolved with the data (the contents of the file) using resolve(data).

//Finally, you call the getText function with the path './content/first.txt'. You use .then() to handle the resolved Promise (if successful) and .catch() to handle any rejected Promise (if there's an error). In this case, you log either the result or the error.