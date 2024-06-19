let express=require('express');

// bd connect with sre/app.js or server
// normaly promice ar madhama hochh no return type so require not return
require('./db/conn');

// model ka src/app.js axcess to connect bd
const students= require('./models/student');

let app=express();

// ***** postman thaka json data req.body recognize janno middelwear express.json() mus use korta hoba
// na hola undefined asba
app.use(express.json());

let PORT=process.env.PORT || 8000;

//  for use route middlewear use must
let router=require('./router/routes')

// insteed of routs we use
 app.use(router);

// post method using promice
// app.post('/stu',(req,res)=>{
//     console.log(req.body)
//  // post man a data{} ka /stu under get korar janno req.body (postman a body under a post 
// // likha hocha ta req.body .1st time req use holo))
// const user=new students(req.body);
// // now data come so save data in db using promice->
// user.save().then(()=>{
//     res.status(201).send('helow perfect')
// }).catch((e)=>{
// res.status(401).send(e);
// })

//   })

 


app.listen(PORT,()=>{
    console.log('ok')
})