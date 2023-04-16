// import { useState } from 'react'
import React, {useState}from 'react'
import { NavLink } from 'react-router-dom'
// import {useHistory} from 'react-router';

function Application() {

    const [msg,setMsg]=useState({
        name:"",
        email:"",
        message:""
        // surname:"",
        // middle:"",
        // country:"",
        // cgp:"",
        // income:"",
        // degree:"",
        // college:"",
        // accountnumber:"",
        // aadhar:"",
        // branch:"",
        // bankname:"",
        // address:"",
        // phone:"",
        // scholarcategory:"",
        // state:"",
        // age:"",
        // dob:"",
        // gender:"",
        // mobile:"",
        // district:"",

      })
    
      //handle input
    
      const handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
    
        setMsg({...msg,[name]:value});                                                              
      }
      //hendle submit
    const handleSubmit =async (event)=>{
      event.preventDefault();
      //store object data into variable
      const {name,email,message}=msg;
      try {
        const res=await fetch('/message',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,email,message
            })
        })
        if(res.status === 400 || !res){
          window.alert("application not submited yet ! please try again later")
        }else{
          window.alert("application submited");
          setMsg({name:'',
                  email:'',
                  message:''
  //               surname:'',
  //             middle:'',
  //           age:'',
  //         dob:'',
  //       gender:'',mobile:'',
  //     district:'',
  //   state:'',
  // country:'',scholarcategory:'',phone:'',address:'',bankname:'',branch:'',aadhar:'',accountnumber:'',college:'',degree:'',cgp:'',income:''})
  //         // history.pushState('/login')  
})
        }
      } catch (error) {
        console.log(error);
      }
}
return(
    <div>
 <div className='container shadow my-5' >
            <div className='row'>
                <div className='col-md-5 d-flex flex-column align-item-center form'>
                    <h1 className='display-4 fw-bolder'> welcome register</h1>
                    <p className="lead text-center">Enter your crenditials</p>
                    <h5>
                      or
                    </h5>
                    <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>

                </div>
                <div className='col-md-6'><h1 className='display-6' > Login</h1>
                <form onSubmit={handleSubmit} method="POST">
  {/* <div className="form-group">
    <label for="exampleInputEmail1">surname</label>
    <input type="text" className="form-control" id="surname" name="surname" value={msg.surname} onChange={handleChange} /> */}
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  {/* </div> */}
  <div className="form-group">
    <label for="exampleInputEmail1">name</label>
    <input type="text" className="form-control" id="name" name="name" value={msg.name} onChange={handleChange} />
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  {/* <div className="form-group">
    <label for="exampleInputPassword1">middle</label>
    <input type="text" className="form-control" id="middle" name="middle" value={msg.middle} onChange={handleChange} />
    
  </div> */}

  {/* ============================================= */}


  <div className="form-group">
    <label for="exampleInputPassword1">email</label>
    <input type="email" className="form-control" id="email" name="email" value={msg.email} onChange={handleChange} />
    
  </div>
  {/* <div className="form-group">
    <label for="exampleInputPassword1">age</label>
    <input type="text" className="form-control" id="age" name="age" value={msg.age} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">gender</label>
    <input type="text" className="form-control" id="gender" name="gender" value={msg.gender} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">dob</label>
    <input type="text" className="form-control" id="dob" name="dob" value={msg.dob} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">mobile</label>
    <input type="text" className="form-control" id="mobile" name="mobile" value={msg.mobile} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">address</label>
    <input type="text" className="form-control" id="address" name="address" value={msg.address} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">bankname</label>
    <input type="text" className="form-control" id="bankname" name="bankname" value={msg.bankname} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">branch</label>
    <input type="text" className="form-control" id="branch" name="branch" value={msg.branch} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">aadhar</label>
    <input type="text" className="form-control" id="aadhar" name="aadhar" value={msg.aadhar} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">accountnumber</label>
    <input type="text" className="form-control" id="accountnumber" name="accountnumber" value={msg.accountnumber} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">college</label>
    <input type="text" className="form-control" id="college" name="college" value={msg.college} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">degree</label>
    <input type="text" className="form-control" id="degree" name="degree" value={msg.degree} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">cgp</label>
    <input type="text" className="form-control" id="cgp" name="cgp" value={msg.cgp} onChange={handleChange} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">income</label>
    <input type="text" className="form-control" id="income" name="income" value={msg.income} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">district</label>
    <input type="text" className="form-control" id="district" name="district" value={msg.district} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">state</label>
    <input type="text" className="form-control" id="state" name="state" value={msg.state} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">country</label>
    <input type="text" className="form-control" id="country" name="country" value={msg.country} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">scholarcategory</label>
    <input type="text" className="form-control" id="scholarcategory" name="scholarcategory" value={msg.scholarcategory} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">phone</label>
    <input type="text" className="form-control" id="phone" name="phone" value={msg.phone} onChange={handleChange} />
  </div> */}
  <div className="form-group">
    <label for="exampleInputPassword1">message</label>
    <input type="text" className="form-control" id="message" name="message" value={msg.message} onChange={handleChange} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>
            </div>
        </div>
    </div>

)
}
export default Application;