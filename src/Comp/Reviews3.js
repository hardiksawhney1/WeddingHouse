import React from 'react'
import { ContactUs } from './ContactUs'

export const Reviews3 = () => {
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
                <img src={require("../images/pexels-helena-lopes-2055225-fotor-20231023224141.png")} alt="" className="client"></img>
                <div className="titlerev">ETHAN AND AVA</div>
                <div className="prev">
                    {/* have suffered alteration in some form, by injected humour, or randomised words 
                    which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
                    you need to be sure there isn't anything embarrassing hidden in */}
                    {/* Our wedding planner was an absolute gem, taking our ideas and turning them into a 
                    seamlessly executed, beautiful celebration that left us and our guests in awe of their
                    expertise and they are best with their work. */}
                    Our wedding planner went above and beyond to make our special day absolutely 
                    perfect, from seamless logistics to stunning decor. Their expertise and dedication made our 
                    dream wedding a reality.
                    </div>
                <img src={require("../images/quick-icon.png")} alt="" className="qotation"></img>
            </div>
            <div className="review2">
                <div className="redpart"></div>
                <img src={require("../images/pexels-jasmine-carter-888923-fotor-20231023223410.png")} alt="" className="client"></img>
                <div className="titlerev">LIAM AND EMMA</div>
                <div className="prev">
                    {/* have suffered alteration in some form, by injected humour, or randomised words 
                    which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
                    you need to be sure there isn't anything embarrassing hidden in */}
                    {/* Our wedding planner's impeccable coordination and artistic touch transformed our 
                    vision into a perfect day, leaving us with cherished memories and a stress-free experience.
                    Their dedication and expertise made our wedding a truly unforgettable. */}
                    Our wedding planner went above and beyond to make our special day absolutely 
                    perfect, from seamless logistics to stunning decor. Their expertise and dedication made our 
                    dream wedding a reality.
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
