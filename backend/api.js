const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/fashstore");

let loginModel=require('./database/login');
let userModel=require('./database/userRegister');


const bodyParser=require('body-parser');
const app=express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/adminLogin',function(req,res) 
{
    let email=req.body.email;
    let pass=req.body.password;
    loginModel.find({'email':email,'password':pass},function(err,data)
      {
         if(err){
            res.json({'err':1,'msg':'Some error occor'})
         }
         else if (data.length==0)
         {
             res.json({'err':1,'msg':'Email or pass is not correct'})
         }
         else
         {
             res.json({'err':0,'msg':'Login Successfully','ulogin':email})
         }
      })
    
})
app.post('/api/user',function(req,res) 
{
    let name=req.body.name;
    let email=req.body.email;
    let contact=req.body.contact;
    let pass=req.body.password;
    let ins=new userModel({'name':name,'email':email, 'contact':contact, 'password':pass});
    ins.save(function(err)
     {
         if(err)
         {
            res.json({'err':1,'msg':'Not Insert Successfully'});
         }
         res.json({'err':0,'msg':'Insert Successfully'});
     })
    
    
})
app.post('/api/ulogin',function(req,res) 
{
    let email=req.body.email;
    let pass=req.body.password;
    userModel.find({'email':email,'password':pass},function(err,data)
      {
         if(err){
            res.json({'err':1,'msg':'Some error occor'})
         }
         else if (data.length==0)
         {
             res.json({'err':1,'msg':'Email or pass is not correct'})
         }
         else
         {
             res.json({'err':0,'msg':'Login Successfully','ulogin':email})
         }
      })
    
})
app.listen(8899,function()
{
    console.log("Work on 8899");
})