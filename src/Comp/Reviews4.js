import React from 'react'
import { ContactUs } from './ContactUs'

export const Reviews4 = () => {
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
                <img src={require("../images/pexels-pavel-danilyuk-6667978-fotor-20231023223621.png")} alt="" className="client"></img>
                <div className="titlerev">NOAH AND GRACE</div>
                <div className="prev">
                {/* Our wedding planner's ability to turn our ideas into a breathtaking reality, coupled with 
                their exceptional organization, ensured our special day was filled with love, 
                laughter, fun, enjoyment, games and cherished memories. */}
                    Our wedding planner went above and beyond to make our special day absolutely 
                    perfect, from seamless logistics to stunning decor. Their expertise and dedication made our 
                    dream wedding a reality.
                    </div>
                <img src={require("../images/quick-icon.png")} alt="" className="qotation"></img>
            </div>
            <div className="review2">
                <div className="redpart"></div>
                <img src={require("../images/pexels-pixabay-247908-fotor-20231023223843.png")} alt="" className="client"></img>
                <div className="titlerev">JAMES AND LILY</div>
                <div className="prev">
                {/* Our wedding planner's meticulous planning and creative talents made our big day a seamless 
                and stunning affair and their staff is perfect and co-operative leaving us and 
                our guests in awe of the magical atmosphere they created. */}
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
