import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ContactUs } from './ContactUs';
export const AboutUs = () => {
    const [data, setdata] = useState([])
    const [dataevent, setdataevent] = useState([])
    useEffect(()=>{
        window.scroll(600,600);
        const getAbout = async()=>{
            const res=await axios.get('http://localhost:8000/aboutus')
            console.log(res);
            setdata(res.data);
        }
        const getEvents = async()=>{
            const res=await axios.get('http://localhost:8000/events')
            console.log(res);
            setdataevent(res.data);
        }
        getAbout();
        getEvents();
    },[])
    
  return (
    <div>
    <section className="container2">
        <div className="r1">
            <img className="diamond" src={require("../images/bg-icon.png")}></img>
            <div className="about_title">
                ABOUT <span style={{color: "#fc3e59"}}>US</span>
            </div>
        </div>
        <div className="r2">
            <img className="imgr2" src={require("../images/about-img.png")}></img>
        </div>
        <div className="r3">
                {/* If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
                embarrassing hidden in the middle of text. All theIf you are going to use a passage of Lorem Ipsum, 
                you need to be sure there isn't anything embarrassing hidden in the middle of text. All theIf you 
                are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing 
                hidden in the middle of text. */}

                At Wedding House, we believe that every love story deserves a picture-perfect beginning. As 
                a team of passionate wedding enthusiasts, we are dedicated to making your special day extraordinary.
                Our mission is to transform your dreams into reality, one exquisite celebration at a time. Welcome 
                to Wedding House, where love and memories come to life.
        </div>
            {/* <div className="r4">
                <a href="#">READ MORE</a>
            </div> */}
    <div style={{display:"flex", gap:"4px", flexWrap:"wrap", marginTop:"30px"}}>
            {
                data.map((about)=>{
                    return     <div class="card" style={{width: "16rem"}}>
                    <img class="card-img-top" src={about.image} alt="Card image cap"></img>
                    <div class="card-body">
                      <h5 class="card-title" style={{textAlign:"center"}}>{about.title}</h5>
                      <p class="card-text" style={{height:"100px", overflow:"auto", textAlign:"center"}}>{about.description}</p>
                      
                    </div>
                  </div>
                })
            }
    </div>

    </section>

    <section className="container2">
        <div className="r1">
            <img className="diamond" src={require("../images/bg-icon.png")}></img>
            <div className="about_title">
                EVE<span style={{color: "#fc3e59"}}>NTS</span>
            </div>
        </div>
        
    <div style={{display:"flex", gap:"10px", flexWrap:"wrap", marginTop:"30px", justifyContent:"center", alignItems:"center"}}>
            {
                dataevent.map((event)=>{
                    return     <div class="card" style={{width: "48%", minHeight:"550px"}}>
                    <img class="card-img-top" src={event.photo} alt="Card image cap"></img>
                    <div class="card-body">
                      <h5 class="card-title" style={{textAlign: "center", color:"red", fontWeight:"bolder", fontSize:"30px", textTransform:"uppercase"}}>{event.groom_name} and {event.bride_name}</h5>
                      <p class="card-text" style={{textAlign:"center",fontSize:"20px", overflow:"auto", height:"100px", scrollbarWidth:"none"}}>{event.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Venue: {event.venue}</li>
                      <li class="list-group-item">Guests: {event.noguests}</li>
                      <li class="list-group-item">Expenses: {event.cost}</li>
                    </ul>
                  </div>
                })
            }
    </div>

    </section>


    <ContactUs />
    </div>
  );
}
