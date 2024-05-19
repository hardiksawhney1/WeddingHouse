import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContactUs } from './ContactUs';
import axios from 'axios';

export const SignUp = () => {
    const [email,setEmail] = useState('');
    const [gender,setGender] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [fullname,setFullname] = useState('');
    const [btnclicked,setBtnClicked] = useState(false);
    const navigate = useNavigate('');
    const confirm = ()=>{
      if(name=="" || email=="" || gender=="" || password=="" || fullname==""){
        alert("Please fill all details");
      }
      else{
        setBtnClicked(!btnclicked)
      }
    }
    const signup = async()=>{ 
      const res=await axios.post("http://localhost:8000/users/add", {
        fullname:fullname, username:name, email:email,gender:gender,password:password
      })
      if(res.data=="fail"){
        alert("Username already exists")
      }
      else{
        navigate("/login");
      }
      console.log(res);
      

    }
    useEffect(()=>{
      window.scrollTo(600,600);
  })
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
                    <h3><span style={{color: "#fc3e59"}} >Name:- </span>{fullname}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Username:- </span>{name}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Email:- </span>{email}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Gender:- </span>{gender}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Password:- </span>*****</h3>
                    <button className='submit' onClick={e=>setBtnClicked(!btnclicked)} value="Go Back">Go Back</button>
                    <button className='submit' onClick={()=>{signup()}} value="Confirm">Confirm</button>
        </div>):  
    <div>
    
  <input type="text" onChange={e=>setFullname(e.target.value)} placeholder="Full Name" value={fullname} />
  <input type="text" onChange={e=>setName(e.target.value)} placeholder="Set Username"  value={name} />
  <input type="text" onChange={e=>setEmail(e.target.value)} placeholder="Email" value={email} />
  <label style={{ display: 'block', marginBottom: '2px' }}>Gender:</label>

<label htmlFor="male" style={{ marginRight: '20px' }}>
  <input
    type="radio"
    id="male"
    name="gender"
    value="Male"
    onChange={e => setGender(e.target.value)}
    style={{ marginRight: '10px' }}
    checked={gender==="Male"}
  />
  Male
</label>

<label htmlFor="female" style={{ marginRight: '20px' }}>
  <input
    type="radio"
    id="female"
    name="gender"
    value="Female"
    onChange={e => setGender(e.target.value)}
    style={{ marginRight: '10px' }}
    checked={gender==="Female"}
  />
  Female
</label>

<label htmlFor="other" style={{ marginRight: '20px' }}>
  <input
    type="radio"
    id="other"
    name="gender"
    value="Other"
    onChange={e => setGender(e.target.value)}
    style={{ marginRight: '10px' }}
    checked={gender==="Other"}
  />
  Other
</label>

  <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Set Password" value={password}/>

  <button className='submit' onClick={()=>{
    confirm()
  }} value="Log In">Sign Up</button>
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
