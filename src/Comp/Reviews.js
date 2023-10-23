import React from 'react'
import { ContactUs } from './ContactUs'

export const Reviews = () => {
  return (
    <div>
        <section className="container7">
        {/* <div className="c3r1">
            <img className="diamond2" src={require("../images/bg-icon.png")}></img>
            <div className="happycouple">
                WHAT SAYS <span style={{color: "#fc3e59"}}>COUPLE</span>
            </div>         
        </div> */}
        <div className="c7img">
            {/* <div className="leftarrow">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>

            </div> */}
            <div className="review2">
                <div className="redpart"></div>
                <img src={require("../images/client-img-1.png")} alt="" className="client"></img>
                <div className="titlerev">RON AND LIBPNA</div>
                <div className="prev">
                    {/* have suffered alteration in some form, by injected humour, or randomised words 
                    which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
                    you need to be sure there isn't anything embarrassing hidden in */}
                    The wedding planner went above and beyond to make our special day absolutely 
                    perfect, from seamless logistics to stunning decor. Their expertise and dedication made our 
                    dream wedding a reality.
                </div>
                <img src={require("../images/quick-icon.png")} alt="" className="qotation"></img>
            </div>
            <div className="review2">
                <div className="redpart"></div>
                <img src={require("../images/client-img-2.png")} alt="" className="client"></img>
                <div className="titlerev">JONY AND JONILI</div>
                <div className="prev">
                    {/* have suffered alteration in some form, by injected humour, or randomised words 
                    which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
                    you need to be sure there isn't anything embarrassing hidden in */}
                    {/* Our wedding planner exceeded all the expectations, orchestrating a flawless event filled 
                    with magic and memories. Their attention to detail and passion for our day made it truly 
                    unforgettable and we recommend them. */}
                    Our wedding planner 
                    went above and beyond to make our special day absolutely 
                    perfect, from seamless logistics to stunning decor. Their expertise and dedication made our 
                    dream wedding a reality.
                    {/* day, most memorable day. */}
                </div>
                <img src={require("../images/quick-icon.png")} alt="" className="qotation"></img>
            </div>
            {/* <div className="rightarrow">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>

            </div> */}
        </div>
    </section>
    {/* <ContactUs /> */}
    </div>
  )
}
