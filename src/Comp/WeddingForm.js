import React, { useRef, useState } from 'react'
import { ContactUs } from './ContactUs'

export const WeddingForm = () => {
    

    // const [email,setEmail] = useState('');
    // const [phone,setPhone] = useState('');
    // const [message,setMessage] = useState('');
    const [btnclicked,setBtnClicked] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const messageRef = useRef('');
  return (
    <div>
        <section class="container5">
        <div class="attending">
            <div class="heading2">
                CONTACT <span style={{color: "#fc3e59"}}>US</span>
            </div>
            <input type="text" class="textarea" ref={nameRef} placeholder="Name" style={{fontSize:"medium"}}>
                </input>
            <input type="text" class="textarea" ref={emailRef} placeholder="Email" style={{fontSize:"medium"}}></input>
            <input type="text" class="textarea" ref={phoneRef} placeholder="Phone Number" style={{fontSize:"medium"}}></input>
            <input type="text" class="textarea" ref={messageRef} placeholder="Message" style={{fontSize:"medium"}}></input>
            
            <div onClick={e=>setBtnClicked(!btnclicked)} class="submit">
                <a className='text-white'>SEND</a>
            </div>
        </div>
        {btnclicked?(<div className='showdetails'>
            <h3><span style={{color: "#fc3e59"}} >Name:- </span>{nameRef.current.value}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Email:- </span>{emailRef.current.value}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Phone Number:- </span>{phoneRef.current.value}</h3>
                    <h3><span style={{color: "#fc3e59"}} >Message:- </span>{messageRef.current.value}</h3>
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
