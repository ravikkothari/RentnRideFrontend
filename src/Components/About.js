import React from 'react';
import Footer from './Footer';
import './Footer.css'
import CustNavbar from './Navbar/CustNavbar';
import Manisha from '../images/Manisha.jpeg'
import Bhawana from '../images/bhavna.jpeg'
import Divyansh from '../images/divyansh.jpeg'
import Shubh from '../images/Shubhansu.jpeg'
import Himanshu from '../images/himanshu.jpeg'
import Ravi from '../images/Ravi.jpeg'
import Assure from '../images/assure.png'
import Rupees from '../images/rupees.png'
import Setting from '../images/setting.jpg'

const About = () => {
    return (
        <div style={{ height: "1090px", width: "1580px", backgroundImage: "linear-gradient(#fc00ff, #00dbde)" }}>

            <div>
                <CustNavbar />
            </div>
            <div style={{
                opacity: 0.7,

            }}>
                <div >
                    <p style={{ fontSize: "20px", padding: "10px", color: 'white', fontFamily: "monsterstat" }}>
                        RENT-N-Ride is a client website used for hiring a car, renting a car at affordable rates.
                        It also gives the user the optimised rates and best services.
                        It is based on Loyalty, Honesty, etc  We, Rent and Ride are a leading motorbike rental company that offers a diversified and exceptional range of four wheeler on rent.Car riders who have a spirit governed by intense passion to ride different bikes have just landed in the right place. we are regarded as one of the best bike rental companies, due to our personalised service and higher commitment levels. we have a huge store of exclusive bikes where riders can choose to ride on daily basis.
                    </p>
                    <div style={{ float: "left", height: "800px", padding: "10px", width: "60%", marginLeft: "40px", }}>
                        <h1 style={{ marginLeft: "400px", fontFamily:"monsterstat" }}>Support Team</h1>
                        <div id="1"><img src={Manisha} style={{ borderRadius: "120px", height: "250px", width: "25%", float: "left", marginLeft: "60px", marginTop: "40px" }}></img></div>

                        <div id="2"><img src={Bhawana} style={{ borderRadius: "120px", height: "250px", width: "25%", float: "right", marginRight: "360px", marginTop: "40px" }}></img></div>
                        <div id="3"><img src={Divyansh} style={{ borderRadius: "120px", height: "250px", width: "25%", float: "right", marginRight: "40px", marginTop: "-250px" }}></img></div>
                        <div style={{ width: "980px", height: "40px", marginTop: "310px", marginLeft: "55px" }}><h3 style={{ color: "white", fontFamily:"monsterstat" }}>Manisha Devnani</h3> <h3 style={{ marginTop: "-40px", marginLeft: "300px", color: "white", fontFamily:"monsterstat" }}>Bhawana Dharmale</h3> <h3 style={{ marginTop: "-40px", marginLeft: "630px", color: "white", fontFamily:"monsterstat" }}> Divyansh Kaushik</h3></div>
                        <div id="4"><img src={Shubh} style={{ borderRadius: "120px", height: "250px", width: "25%", float: "left", marginLeft: "60px", marginTop: "40px" }}></img></div>
                        <div id="5"><img src={Himanshu} style={{ borderRadius: "120px", height: "250px", width: "25%", float: "right", marginRight: "360px", marginTop: "40px" }}></img></div>
                        <div id="6"><img src={Ravi} style={{ borderRadius: "120px", height: "250px", width: "25%", float: "right", marginRight: "40px", marginTop: "-250px" }}></img></div>
                        <div style={{ width: "980px", height: "40px", marginTop: "310px", marginLeft: "55px" }}><h3 style={{ color: "white", fontFamily:"monsterstat" }}>Shubhansu Gupta</h3> <h3 style={{ marginTop: "-40px", marginLeft: "300px", color: "white", fontFamily:"monsterstat" }}>Himanshu jainath</h3> <h3 style={{ marginTop: "-40px", marginLeft: "655px", color: "white", fontFamily:"monsterstat" }}> Ravi Kothari</h3></div>
                    </div>

                    <div style={{ float: "right", padding: "1px", height: "650px", width: "35%" }}>
                        <div style={{ height: "50px", width: "300px", marginTop: "20px", marginLeft: "150px" }}>
                            <h1 style={{ color: "white", fontFamily: "monsterstat", fontSize: "40px", marginTop: "-20px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<marquee behavior="alternate" scrollamount="15" style={{fontFamily:"monsterstat"}}>Why US?</marquee></h1>
                        </div><br /><br /><br />
                        <div style={{ height: "120px", width: "100%", marginTop: "30px" }}>
                            <div id="left" style={{ height: "120px", width: "42%", float: "left" }}>
                                <img src={Assure} style={{ height: "120px", width: "95%", float: "left" }}></img>
                            </div>
                            <div id="right" style={{ height: "120px", width: "55%", float: "right" }}>
                                <h2 style={{ marginTop: "-20px", fontFamily: "monsterstat" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assured Cars</h2>
                                <p style={{ fontSize: "20px", color: "white", fontFamily: "monsterstat" }}>Cars that are assured with wheel-street will be of the highest possible quality.</p>
                            </div>
                        </div>
                        <br /><br />
                        <div style={{ height: "140px", width: "100%" }}>
                            <div id="l2" style={{ height: "120px", width: "42%", float: "left" }} >
                                <img src={Rupees} style={{ height: "120px", width: "95%", float: "left", marginTop: "20px" }}></img>
                            </div>
                            <div id="r2" style={{ height: "120px", width: "55%", float: "right" }}>
                                <h2 style={{ marginTop: "-20px", fontFamily: "mosnterstat" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assured Cars</h2>
                                <p style={{ fontSize: "20px", color: "white", fontFamily: "monsterstat" }}>Get all your favourite Cars for rent at the lowest possible price on the car rental market..</p>
                            </div>
                        </div>
                        <br /><br />
                        <div style={{ height: "140px", width: "100%" }}>
                            <div id="l2" style={{ height: "120px", width: "42%", float: "left" }} >
                                <img src={Setting} style={{ height: "120px", width: "95%", float: "left", marginTop: "20px" }}></img>
                            </div>
                            <div id="r2" style={{ height: "120px", width: "55%", float: "right" }}>
                                <h2 style={{ marginTop: "-20px", fontFamily: "Algerian" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assured Cars</h2>
                                <p style={{ fontSize: "20px", color: "white", fontFamily: "Algerian" }}>Be it everyday commute, road trips, riding gears, and maintenance - we have them all!</p>
                            </div>

                        </div>



                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default About;