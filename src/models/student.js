 let mongoose=require('mongoose');
 let validator=require('validator')

 const studentSchema= new mongoose.Schema({
name:{
    type:String,
    required:true,
    minlength:3
},
email:{
    type:String,
    required:true,
    unique:[true,"email is already present"],
    validate(value){
       if(! validator.isEmail(value)){
        throw new Error('not valid enmail')
       }
    }
},
phone:{
    type:Number,
    minlength:10,
    maxlength:10,

},add:{
    type:String,
    required:true
}
 })


//    studentDetail is a collection here name ->model
 
 const studentDetail= new mongoose.model('studentDetail',studentSchema) ;
// collection export which use in src/app.js
module.exports=studentDetail;