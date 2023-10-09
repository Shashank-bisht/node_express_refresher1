// var generateName = require('sillyname');

// import generateName from 'sillyname';
// var sillyName = generateName();
// console.log(sillyName);

function doSomethingAsync(callback) {
    setTimeout(function () {
      console.log("Task is done!");
      callback(); // Execute the callback function
    }, 5000);
  }
  
  function onComplete() {
    console.log("Callback function is executed.");
  }
  
  doSomethingAsync(onComplete);
  

console.log("hello")