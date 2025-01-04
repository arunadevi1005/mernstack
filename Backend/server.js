const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
   
    //res.status(200).send('error occured');
    //res.status(500).send('error occured');
    //res.status(200).send({error:"error occured"});
    //res.json({error:"error occured"});
    res.send('Heyy World :) ');
    //res.render("index.ejs",{name:"Aruna"}); //res.render("index.ejs",{names:"Aruna"}); 



});

const userRouter=require('./routes/user');
app.use('/',userRouter); 

app.listen(3000);
