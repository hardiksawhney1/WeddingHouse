import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import logo1 from './images/logo.png';
import Contacts from './Comp/Contacts';
import SocialMedia from "./Comp/SocialMedia";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong, faBars} from '@fortawesome/free-solid-svg-icons';
import { ContactUs } from "./Comp/ContactUs";
import { AboutUs } from "./Comp/AboutUs";
import { Blog } from "./Comp/Blog";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { WeddingForm } from "./Comp/WeddingForm";
import { Reviews } from "./Comp/Reviews";
function App() {
  const [active, setActive] = useState(false);
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
            <div onClick={()=>{setActive(!active)}} className={"h_carousel " + (active?"active":"")}>
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
                            <Link to="/WeddingForm" className="linking">
                                <FontAwesomeIcon icon={faRightLong} />
                                <span className="element">WEDDING FORM</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Reviews" className="linking">
                                <FontAwesomeIcon icon={faRightLong} />
                                <span className="element">REVIEWS</span>
                            </Link>
                        </li>
                    </ul>
              </div>
              <div>
                <Contacts />
              </div>
              <div >
                <SocialMedia />
              </div>
            </div>
            <div>
              <div onClick={()=>{setActive(!active)}} className="menu">
              <FontAwesomeIcon icon={faBars} className='menubars' />
              </div>
            </div>
          </div>
          <div className="rightside">
            <div class="heading">
                <div class="head">WEDDING</div>
                <div class="head2">HOUSE</div>
                <div class="para-page-1">many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomisedmany variations of passages 
                    of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected 
                    humour, or randomised</div>
                <Link to="/ContactUs" class="contactbt">
                    CONTACT US
                </Link>
            </div> 
          </div>
        </div>
        <div>
          <Routes>
            <Route exact path="/ContactUs" element={<ContactUs />}/>
            <Route exact path="/AboutUs" element={<AboutUs />}/>
            <Route exact path="/Blog" element={<Blog />}/>
            <Route exact path="/WeddingForm" element={<WeddingForm />}/>
            <Route exact path="/Reviews" element={<Reviews />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
