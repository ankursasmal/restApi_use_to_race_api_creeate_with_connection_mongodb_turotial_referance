let express=require('express');
let route= new express.Router();
// student collection use hocha tai stdent ka require kort hoba
let students=require('../models/student')
// All route in route.file and route->replace with route


// root folder
route.get('/',(req,res)=>{
    res.send('ok');
})

// post method using async await
route.post('/stu', async(req,res)=>{
    try{
        // for create {} jata form or postman thaka ascha
    let user= new students(req.body);
    console.log(req.body)
   let createuser= await user.save();
//    return promice
   res.status(201).send(createuser);
    }
    catch(e){
        res.status(401).send(e)
    }

})

// get request
route.get('/stu',async(req,res)=>{
    try{
     let dispaly = await students.find();
     console.log(dispaly)
res.status(200).send(dispaly);
    }
    catch(e){
        res.status(400).send(e);
    }
})

// single student data use params
route.get('/stu/:name',async(req,res)=>{
    try{
        let name=req.params.name;

        let display= await students.find({name:{$eq:name}})
        res.status(200).send(display);
    }
    catch(e){
        res.status(400).send(e)
    }
})

// update put,patch req
route.patch('/stu/:id',async(req,res)=>{
    try{
        let _id=req.params.id;
        let updateValue= await students.findByIdAndUpdate(_id,req.body,{
            new:true
        })
res.status(200).send(updateValue);
    }
    catch(e){
        res.status(401),send(e);
    }

})

// delete req

route.delete('/stu/:id',async(req,res)=>{
    try{
        let deletstudent=await students.findByIdAndDelete(req.params.id);
        if(!deletstudent){
            res.status(400).send();
        }
        console.log(req.body);
        res.status(200).send(deletstudent);

    }
    catch(e){
        res.status(400).send(e);
    }
})


module.exports=route;
