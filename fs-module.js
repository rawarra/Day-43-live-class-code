const fs = require('fs');


// writeFile-dynamic function
// it checks the file is existing or not
// if yes it write the content
// if no-it creates a new one with the same mentioned name
// after creating that, it adds the content
// writeFile Syntax
// 3 parameters - FileName | File Content | Fallback Function ( Alternative plan or nagative plan )

fs.writeFile("rajesh-report.txt", "entri-Live session @ 8:30 to 10:00 ", (err)=>{
    if(err){
        console.log("File Processing Fail");
        return;  // this return stop the this loop fun
    }
    console.log("File Processing successful");
});




fs.writeFile("rajesh-testing.txt", "this my code testing at 9:06 pm ", (err)=>{
    if(err){
        console.logo("File Process has Fail");
        return;
    }

    console.log("File Process Successful")
});