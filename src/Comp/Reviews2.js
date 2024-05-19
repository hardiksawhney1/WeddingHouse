import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Reviews } from './Reviews';
import Carousel from 'react-bootstrap/Carousel';
import { ContactUs } from './ContactUs';
import { Reviews3 } from './Reviews3';
import { Reviews4 } from './Reviews4';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Reviews2() {
    const currentDate = () => {
    const currentDate = new Date();

    const formattedDate = currentDate.toISOString().split("T")[0];

    console.log(formattedDate);
    return formattedDate;
  };
  const [formData, setFormData] = useState({
    photo_url: '',
    groom_name: '',
    bride_name: '',
    review: '',
    timestamp: currentDate(),
    weddingdate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(formData.groom_name=="" || formData.bride_name=="" || formData.photo_url=="" || formData.review=="" || formData.weddingdate==""){
      alert("Please fill all details");
    }
    else{
      const res = await axios.post("http://localhost:8000/reviews/add", formData, {withCredentials:true,})
   
    console.log('Form submitted with data:', formData);
    console.log(res.data.message);
    if(res.data.message=="success"){
      const currentHref = window.location.href;
      window.location.href = currentHref;
    }
    else{
      alert("Please fill correct wedding details")
    }

    
    }

  };
  const [User, setUser] = useState({ session: null });
  const [data, setdata] = useState([]);
  useEffect(()=>{
      window.scrollTo(600,600);
      const getReviews= async()=>{
      const res = await axios.get("http://localhost:8000/reviews",{withCredentials:true,});
      console.log(res.data);
      setdata(res.data);
    }
    getReviews();
    const checkSession = async () => {
      const res = await axios.get("http://localhost:8000/users/login", {
        withCredentials: true,
      });
      setUser(res.data);
      console.log(User);
      console.log("check");
      console.log(res.data.session);
    };
    checkSession();
  },[])
  return (
//  <Carousel data-bs-theme="dark">
//       <Carousel.Item interval={1000}>
//         <div>hi </div>
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <div>hi </div>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div>hi </div>
//       </Carousel.Item>
//     </Carousel>
<div >
            <div className='container7'>
            <div className="c3r1">
            <img className="diamond2" src={require("../images/bg-icon.png")}></img>
            <div className="happycouple">
                WHAT SAYS <span style={{color: "#fc3e59"}}>COUPLE</span>
            </div>         
        </div>
        </div>





<div id="carouselExampleDark" class="carousel carousel-dark" data-bs-interval="2000">
  <div class="carousel-inner">
    {
      data.map((reviews)=>{
        return <div class="carousel-item active" >
        <Reviews groom_name={reviews.groom_name} bride_name={reviews.bride_name} photo_url={reviews.photo_url} review={reviews.review} />
        </div>
      })
    }

    {/* <div class="carousel-item" data-bs-interval="2000">
    <Reviews3 />
    </div>
    <div class="carousel-item">
        <Reviews4 />
    </div> */}
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{
  User.session ?  <form class="login" style={{display:"flex", flexDirection:"column"}}onSubmit={handleSubmit}>
  <h2 style={{fontSize:"40px", fontWeight:"700", paddingBottom:"40px", fontFamily:"octinSportsRg"}}>Share your Experience</h2>
  <label>
    Photo URL:
    <input
      type="text"
      name="photo_url"
      value={formData.photo_url}
      onChange={handleChange}
      style={{ marginBottom: '10px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
    />
  </label>
  <br />
  <label>
    Groom's Name:
    <input
      type="text"
      name="groom_name"
      value={formData.groom_name}
      onChange={handleChange}
      style={{ marginBottom: '10px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
    />
  </label>
  <br />
  <label>
    Bride's Name:
    <input
      type="text"
      name="bride_name"
      value={formData.bride_name}
      onChange={handleChange}
      style={{ marginBottom: '10px', padding: '8px', width: '100%', boxSizing: 'border-box' }}
    />
  </label>
  <br />
  <label>
    Review:
    <textarea
      name="review"
      value={formData.review}
      onChange={handleChange}
      style={{ marginBottom: '10px', padding: '8px', width: '100%', boxSizing: 'border-box', border: '1px solid grey' }}
    />
  </label>
  <br />
  <label>
    Wedding Date:
    <input
      type="date"
      name="weddingdate"
      value={formData.weddingdate}
      onChange={handleChange}
      style={{ marginBottom: '10px', padding: '8px', width: '100%', boxSizing: 'border-box', border: '1px solid grey' }}
    />
  </label>
  <br />
  <button
    type="submit"
    style={{
      backgroundColor: '#fc3e59',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    Submit
  </button>
</form>
:
<div class="login" style={{ marginTop:"-50px", display:"flex", flexDirection:"column", width:"30%", justifyContent:"center", alignItems:"center"}}><p style={{fontFamily:"octinSportsRg", fontSize:"20px"}}>Please Login to post a review</p><Link style={{marginTop:"-10px", border:"1px solid grey"}} to="/Login" class="contactbt">
      LOGIN
</Link></div>
} 



<ContactUs />
</div>
  )
}

export default Reviews2;
