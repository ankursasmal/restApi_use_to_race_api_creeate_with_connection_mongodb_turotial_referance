let mongosh=require('mongoose');


mongosh.connect("mongodb://127.0.0.1:27017/student_api").then(()=>{
    console.log('connect to data base');
}).catch((e)=>{
    console.log(e);
})


 

