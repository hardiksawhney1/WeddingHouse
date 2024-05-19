import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContactUs } from './ContactUs';
import axios from 'axios';

export const Login = () => {
  const navigate = useNavigate('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const login = async()=>{
    const res=await axios.post("http://localhost:8000/users/login", {
      username:name, password:password
    }, {withCredentials:true}
    )

    console.log(res);
    if(res.data.message=='password dont match'){
      alert("Username and Password didn't match or user doesn't exist!")
    }
    else{
      window.location.reload();
      navigate("/");
    }
  }
  return (
    
    <div>
    <div className='container7'>
    <div className="c3r1">
    <img className="diamond2" src={require("../images/bg-icon.png")}></img>
    <div className="happycouple">
        LOG<span style={{color: "#fc3e59"}}>IN</span>
    </div>         
</div>
</div>

<div class="login">
    
    <h2>Welcome, User!</h2>
    <p>Please fill your details</p>  
    <div>
    
  <input type="text" onChange={e=>setName(e.target.value)} placeholder="Username" />
  <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" />
  <button className='submit' onClick={()=>{login()}} value="Log In">Login</button>
  <div class="linksx" style={{textAlign:"center"}}>
    {/* <a href="#">Forgot password</a> */}
    <Link to="/Signup">Don't Have an Account ? Register</Link>
  </div>
  </div>
</div>
<ContactUs />
</div>
  )
}
