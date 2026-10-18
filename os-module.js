const { Network } = require("inspector/promises");
const os = require("os");

// ** Highly important for SDE roles

// operating System - it can Handle our both Software and hardware informations

// software informations

console.log("Os platform", os.platform());
console.log("os type", os.type());
console.log("os Architecture", os.arch());
console.log("os Release version", os.release());

console.log("os version", os.version());


// Hardware information 

console.log("Total Ram", (os.totalmem()/ (1024 ** 3)).toFixed(2));  // 1024 in bit after byte, mb, GB 
// ** is squer root math function code  
// .toFixed(2) this function has after result value is 2.345423 this value after dot 2 values only take it

console.log("current Free Ram", (os.freemem()/ (1024 ** 3)).toFixed(2)); 


// Network information

console.log("my network info", os.networkInterfaces());
