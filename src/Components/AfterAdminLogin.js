import React from 'react'
import CustNavbar from './Navbar/CustNavbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import banner from '../images/banner.jpeg';



const AfterAdminLogin=()=>{
    return(
        <div style={{backgroundImage: `url(${banner})`,backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
         width:"100%",height:"700px"}}>
            <CustNavbar />
            <br/>
            <Link to="/AddCar">
            <div style={{border:"2px solid black",background: "linear-gradient(rgb(254, 94, 182),rgb(189, 209, 157))",width:"250px", height:"100px", marginLeft:"105px", marginTop:"110px"}}>
                <center>
                    <h2 style={{marginTop:"38px",fontFamily:"monsterstat", color:"black"}}>Add Car</h2>
                </center>
            </div>
            </Link>
            <Link to="/AdminLogin">
            <div style={{border:"2px solid black", background: "linear-gradient(rgb(254, 94, 182),rgb(189, 209, 157))", width:"250px", height:"100px", marginLeft:"380px",float:"left", marginRight:"160px",marginTop:"-100px"}}>
            <center>
                    <h2 style={{marginTop:"38px",fontFamily:"monsterstat", color:"black"}}>View Details</h2>
                    </center>
            </div>
            </Link>
            <Footer />
        </div>
    )

}

export default AfterAdminLogin;