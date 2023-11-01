// console.log("hello");

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname )
// setInterval(() => {
//     console.log(__dirname)
// }, 1000);

// importing sayHi and name from other files
const name = require('./names');
const sayHi = require('./utils');

// using sayhi function
sayHi(name.shanky);
// sayHi(name.bisht);
console.log(name); //here name is a kind of object

// or

// sayHi('shanky');

// below 2 line of code  error will be thrown because we can access shanky and bisht using name example name.shanky or name.bisht will is done in above lines

// sayHi(shanky); 
// sayHi(bisht);

// importing alternative data
const data = require('./alternative');
console.log(data)
console.log(data.singleperson.name);

// even if we are not assigning it to variable or not invoking , it is getting invoked by itself
require('./mind-graned')

