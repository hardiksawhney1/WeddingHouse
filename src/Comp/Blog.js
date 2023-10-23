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
            {/* Lorem Ipsum, you need to be sure there isn't anything embarrassinghidden in the middle of text. */}
            "Donila Wedding House makes a wedding perfect" - Couples said this not us! Read reviews:
        </div>
        <div class="gallery">
            <div class="grid">
                <div class="grid-item1">
                    <div class="overlay overlaytext">
                        <div class="text">
                            <h4 class="jony_text">
                                ETHAN AND AVA</h4></div>
                                <div class="text"><p class="sometext">
                                    {/* There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form */}
                                    The wedding planner's attention to detail and seamless execution made our dream wedding a reality.
                                    
                                    
                                    </p></div>
                                
                        
                        {/* <div class="btn_main">
                            <div class="buy_bt"><a href="#">Read More</a></div>
                        </div>    */}
                    </div>
                </div>
                <div class="grid-item2">
                    <div class="overlay overlaytext">
                        <div class="text">
                            <h4 class="jony_text" style={{paddingTop:"0%"}}>
                                LIAM AND EMMA</h4></div>
                                <div class="text"><p class="sometext">
                                    {/* There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form */}
                                    This wedding planner exceeded our expectations and made our special day truly magical.
                                    </p></div>
                                
                        
                        {/* <div class="btn_main">
                            <div class="buy_bt"><a href="#">Read More</a></div>
                        </div>    */}
                    </div>
                </div>
                <div class="grid-item3">
                    <div class="overlay overlaytext">
                        <div class="text" style={{width: "100%"}}>
                            <h4 class="jony_text" style={{paddingTop:"0%"}}>
                                NOAH AND GRACE</h4></div>
                                <div class="text"><p class="sometext">
                                    {/* There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form */}
                                    Our wedding planner's expertise and dedication made our day stress-free and absolutely perfect.
                                    </p></div>
                                
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
                                JAMES AND LILY</h4></div>
                                <div class="text"><p class="sometext">
                                    {/* There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form */}
                                    Our wedding planner was an absolute game-changer, turning our dream day into a seamless reality.
                                    </p></div>
                                
                        
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
                        {/* words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                        sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the 
                        Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetwords 
                        which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure 
                        there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet 
                        tend to repeat predefined chunks as necessary, making this the first true generator on the Internet */}

                        Once upon a time, in the pages of our love story, we embarked on a journey to our dream wedding. This narrative of 
                        love, now etched in our hearts forever, was elevated to a grand spectacle thanks to the incredible wedding 
                        planner we had the privilege to work with. Their unwavering commitment to detail and their ability to transform 
                        the ordinary into extraordinary made our wedding an unforgettable chapter in our story.Every element, from the 
                        elegant decor to the seamless coordination, bore the hallmark of their dedication. Our hearts are brimming with 
                        gratitude for the magical memories they orchestrated. 
                        In the love story of our lives, this wedding planner played a pivotal role, ensuring our 'happily 
                        ever after' began on the most magical note.
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
