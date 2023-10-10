import React from 'react'
import { ContactUs } from './ContactUs'

export const Blog = () => {
  return (
    <div>
        <section class="container3">
        <div class="c3r1">
            <img class="diamond2" src={require("../images/bg-icon.png")}></img>
            <div class="happycouple">
                HAPPY <span style={{color: "#fc3e59"}}>COUPLE</span>
            </div>           
        </div>
        <div class="c3r2">
            Lorem Ipsum, you need to be sure there isn't anything embarrassinghidden in the middle of text.
        </div>
        <div class="gallery">
            <div class="grid">
                <div class="grid-item1">
                    <div class="overlay overlaytext">
                        <div class="text">
                            <h4 class="jony_text">
                                JONY AND JONILI</h4></div>
                                <div class="text"><p class="sometext">
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form</p></div>
                                
                        
                        {/* <div class="btn_main">
                            <div class="buy_bt"><a href="#">Read More</a></div>
                        </div>    */}
                    </div>
                </div>
                <div class="grid-item2">
                    <div class="overlay overlaytext">
                        <div class="text">
                            <h4 class="jony_text" style={{paddingTop:"0%"}}>
                                JONY AND JONILI</h4></div>
                                <div class="text"><p class="sometext">
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form</p></div>
                                
                        
                        {/* <div class="btn_main">
                            <div class="buy_bt"><a href="#">Read More</a></div>
                        </div>    */}
                    </div>
                </div>
                <div class="grid-item3">
                    <div class="overlay overlaytext">
                        <div class="text" style={{width: "100%"}}>
                            <h4 class="jony_text" style={{paddingTop:"0%"}}>
                                JONY AND JONILI</h4></div>
                                <div class="text"><p class="sometext">
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form</p></div>
                                
{/*                         
                        <div class="btn_main">
                            <div class="buy_bt" style={{paddingBottom: "0%"}}><a href="#">Read More</a></div>
                        </div>    */}
                    </div>
                </div>
                <div class="grid-item4">
                    <div class="overlay overlaytext">
                        <div class="text">
                            <h4 class="jony_text">
                                JONY AND JONILI</h4></div>
                                <div class="text"><p class="sometext">
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form</p></div>
                                
                        
                        {/* <div class="btn_main">
                            <div class="buy_bt"><a href="#">Read More</a></div>
                        </div>    */}
                    </div>
                </div>
            </div>
        </div>
        {/* <div class="r4" style={{marginTop: "6vh"}}>
            <a href="#">SEE MORE</a>
        </div> */}
    </section>
    <section class="container4">
        <div class="mainc4">
            <div class="leftside2">
                <div class="blank">

                </div>
                <div class="textside">
                    <div class="ourstory">
                        OUR <span style={{color: "#fc3e59"}}>STORY</span>
                    </div>
                    <div class="message">
                        words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                        sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the 
                        Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetwords 
                        which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure 
                        there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet 
                        tend to repeat predefined chunks as necessary, making this the first true generator on the Internet
                    </div>
                    {/* <div class="seemore">
                        <a href="">SEE MORE</a>
                    </div> */}
                </div>
            </div>
            <div class="rightside2">
                
            </div>
        </div>
    </section>
    <ContactUs />
    </div>
  )
}
