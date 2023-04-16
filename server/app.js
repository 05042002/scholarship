const dotenv=require('dotenv');
const express=require('express');
const bcryptjs=require("bcryptjs");
const jwt =require("jsonwebtoken");
const cookieParser=require('cookie-parser');

const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');
const port=process.env.PORT;
//require model

const Users=require("./models/userSchema");
const Message=require("./models/msgSchema");
//this method is use to get data from frontend
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send ("hello");
})

//====================================================================registration 
app.post('/register',async (req,res)=>{
    try {
        const username=req.body.username;
        const password=req.body.password;
        const email=req.body.email;

        const createUser=new Users({
            username:username,
            email:email,
            password:password
        });
//save method is used to create user or insert user
//but before saving we have to hash the password
//
        const created=await createUser.save();
        console.log(created);
        console.log(req.body.username);
        res.status(200).send('registered');
    } catch (error) {
        console.log(400).send(error);
    }
})


//====================================================================application
app.post('/message',async (req,res)=>{
    try {
        // const surname=req.body.surname;
        const name=req.body.name;
        // const middle=req.body.middle;
        // const age=req.body.age;
        // const dob=req.body.dob;
        // const gender=req.body.gender;
        // const mobile=req.body.mobile;
        const email=req.body.email;
        // const district=req.body.district;
        // const state=req.body.state;
        // const country=req.body.country;
        // const scholarcategory=req.body.scholarcategory;
        // const phone=req.body.phone;
        // const address=req.body.address;
        // const bankname=req.body.bankname;
        // const branch=req.body.branch;
        // const aadhar=req.body.aadhar;
        // const accountnumber=req.body.accountnumber;
        // const degree=req.body.degree;
        // const college=req.body.college;
        // const cgp=req.body.cgp;
        // const income=req.body.income;
        const message=req.body.message;


        const sendMsg=new Message({
            name:name,
             email:email,
            message:message,
            // surname:surname,
            // college:college,
            // income:income,
            // cgp:cgp,
            // degree:degree,
            // accountnumber:accountnumber,
            // branch:branch,
            // aadhar:aadhar,
            // bankname:bankname,
            // address:address,
            // middle:middle,
            // district:district,
            // state:state,
            // scholarcategory:scholarcategory,
            // phone:phone,
            // country:country,
            // age:age,
            // dob:dob,
            // gender:gender,
            // mobile:mobile


        });
//save method is used to create user or insert user
//but before saving we have to hash the password
//
        const created=await sendMsg.save();
        console.log(created);
        // console.log(req.body.username);
        res.status(200).send('application submited');
    } catch (error) {
        console.log(400).send(error);
    }
})

//====================================================================login user
app.post('/login',async (req,res)=>{
try {
    const email=req.body.email;
    const password=req.body.password;

    const user=await Users.findOne({email:email});
    if(user){
        const isMatch=await bcryptjs.compare(password,user.password);
        if(isMatch){
            //generate token which is define in user schema
            const token =await user.generateToken();
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+86400000),
                httpOnly:true
            })
            res.status(200).send("loggedin");
            // console.log("hello");
        }else{
            res.status(400).send("INvalid credential");
        }
    }else{
        res.status(400).send("INvalid credential");
    }
} catch (error) {
    res.status(400).send(error);
}
})

app.listen(port,()=>{
    console.log("listinig on port number ${port}");
})