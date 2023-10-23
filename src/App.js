import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import logo1 from "./images/logo.png";
import Contacts from "./Comp/Contacts";
import SocialMedia from "./Comp/SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faBars } from "@fortawesome/free-solid-svg-icons";
import { ContactUs } from "./Comp/ContactUs";
import { AboutUs } from "./Comp/AboutUs";
import { Blog } from "./Comp/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { WeddingForm } from "./Comp/WeddingForm";
import { Reviews } from "./Comp/Reviews";
import  Reviews2  from "./Comp/Reviews2";
import { SignUp } from "./Comp/SignUp";
import { Login } from "./Comp/Login";
function App() {
  const [active, setActive] = useState("");
  return (
    <Router>
      <div className="containerr">
        <div className="homepage">
          <div className="leftside">
            <div className="logodiv">
              <Link to="/">
                <div className="logo">
                  <img src={logo1}></img>
                </div>
              </Link>
            </div>
            <div
              onClick={() => {
                setActive("");
              }}
              className={"h_carousel " + active}
            >
              <div className="links">
                <ul>
                  <li>
                    <Link className="linking" to="/">
                      <FontAwesomeIcon icon={faRightLong} />
                      <span className="element">HOME</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/AboutUs" className="linking">
                      <FontAwesomeIcon icon={faRightLong} />
                      <span className="element">ABOUT US</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Blog" className="linking">
                      <FontAwesomeIcon icon={faRightLong} />
                      <span className="element">BLOG</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact" className="linking">
                      <FontAwesomeIcon icon={faRightLong} />
                      <span className="element">CONTACT US</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/ReviewsbyCouples" className="linking">
                      <FontAwesomeIcon icon={faRightLong} />
                      <span className="element">REVIEWS</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Contacts />
              </div>
              <div>
                <SocialMedia />
              </div>
            </div>
            <div>
              <div className="menu">
                {active == "active" ? (
                  <i
                    style={{ color: "white", fontSize: "25px" }}
                    class="fa fa-times"
                    aria-hidden="true"
                    onClick={() => {
                      setActive("");
                    }}
                  ></i>
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    className="menubars"
                    onClick={() => {
                      setActive("active");
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="rightside">
            <div class="heading">
              <div class="head">WEDDING</div>
              <div class="head2">HOUSE</div>
              <div class="para-page-1">
                {/* Just suppose everything is ready before time, unique decoration
                for each and every event, dance floor on fire, best food 
                ever and that too without planning anything ! If you too want 
                such a hassle-free wedding organized by Winner of XYZ Best 
                Wedding Planner 2023, just click the button below:  */}

                We specialize in crafting unique and personalized weddings that 
                reflect your love story. Our team of experienced professionals 
                is dedicated to orchestrating every detail with precision 
                and creativity, ensuring your big day is a stress-free and a picture-perfect 
                event. Explore our services and let us bring your dream wedding to life.
                

              </div>
              <Link to="/Signup" class="contactbt">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Routes>
            <Route exact path="/Signup" element={<SignUp />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/Blog" element={<Blog />} />
            <Route exact path="/Contact" element={<WeddingForm />} />
            <Route exact path="/ReviewsbyCouples" element={<Reviews2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;