import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContactUs } from './ContactUs';

export const Login = () => {
  const navigate = useNavigate('');
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
    
  <input type="text" placeholder="Username" />
  <input type="password" placeholder="Password" />
  <button className='submit' onClick={()=>{navigate("/")}} value="Log In">Login</button>
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
