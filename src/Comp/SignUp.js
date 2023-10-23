import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContactUs } from './ContactUs';

export const SignUp = () => {
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [btnclicked,setBtnClicked] = useState(false);
    const navigate = useNavigate('');
  return (
    <div>
    <div className='container7'>
    <div className="c3r1">
    <img className="diamond2" src={require("../images/bg-icon.png")}></img>
    <div className="happycouple">
        SIGN <span style={{color: "#fc3e59"}}>UP</span>
    </div>         
</div>
</div>

<div class="login">
    
    <h2>Welcome, User!</h2>
    <p>{btnclicked?"Confirm Details":"Please Register Yourself"}</p>
    {btnclicked?(<div className='showdetails' style={{fontFamily: "Raleway, sans-serif", marginLeft:"0"}}>
            <h3><span style={{color: "#fc3e59"}} >Email:- </span>{email}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Phone Number:- </span>{phone}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Username:- </span>{name}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Password:- </span>*****</h3>
                    <button className='submit' onClick={e=>setBtnClicked(!btnclicked)} value="Go Back">Go Back</button>
                    <button className='submit' onClick={()=>{navigate("/Login")}} value="Confirm">Confirm</button>
        </div>):  
    <div>
    
  <input type="text" onChange={e=>setEmail(e.target.value)} placeholder="Email" />
  <input type="text" onChange={e=>setPhone(e.target.value)} placeholder="Phone Number" />
  <input type="text" onChange={e=>setName(e.target.value)} placeholder="Set Username" />
  <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Set Password" />
  <button className='submit' onClick={e=>setBtnClicked(!btnclicked)} value="Log In">Sign Up</button>
  <div class="linksx" style={{textAlign:"center"}}>
    {/* <a href="#">Forgot password</a> */}
    <Link to="/Login">Already Have an Account ? Login</Link>
  </div>
  </div>}
</div>
<ContactUs />
</div>
  )
}
