import React from 'react'
import { ContactUs } from './ContactUs';
export const AboutUs = () => {
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


    </section>
    <ContactUs />
    </div>
  );
}
