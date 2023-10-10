import React, { useState } from 'react'
import { ContactUs } from './ContactUs'

export const WeddingForm = () => {
    
    const [name,changeName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    const [btnclicked,setBtnClicked] = useState(false);
  return (
    <div>
        <section class="container5">
        <div class="attending">
            <div class="heading2">
                ARE YOU <span style={{color: "#fc3e59"}}>ATTENDING?</span>
            </div>
            <input type="text" class="textarea" onChange={e=>changeName(e.target.value)} placeholder="Name" style={{fontSize:"medium"}}>
                </input>
            <input type="text" class="textarea" onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{fontSize:"medium"}}></input>
            <input type="text" class="textarea" onChange={e=>setPhone(e.target.value)} placeholder="Phone Number" style={{fontSize:"medium"}}></input>
            <input type="text" class="textarea" onChange={e=>setMessage(e.target.value)} placeholder="Message" style={{fontSize:"medium"}}></input>
            
            <div onClick={e=>setBtnClicked(!btnclicked)} class="submit">
                <a className='text-white'>SEND</a>
            </div>
        </div>
        {btnclicked?(<div className='showdetails'>
            <h3><span style={{color: "#fc3e59"}} >Name:- </span>{name}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Email:- </span>{email}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Phone Number:- </span>{phone}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Message:- </span>{message}</h3>
        </div>):
        <div class="champagne">
            <div>
                <img src={require("../images/champage-img.png")} alt=""></img>
            </div>
            <h2 class="enjoytext">
                ENJOY <br></br> MARRIAGE
            </h2>
        </div>
        }
    </section>
    <section class="container6">
        <img src={require("../images/map.jpg")}></img>
    </section>
    <ContactUs />
    </div>
  )
}
