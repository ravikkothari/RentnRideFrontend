import React, { useState } from 'react';
import CustNavbar from './Navbar/CustNavbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import harrier5 from '../images/harrier5.jpg';
import santafe from '../images/santafe.jpg';
import swift from '../images/swift.jpg';
import tesla from '../images/tesla.jpg';
import wagonr from '../images/wagonr.jpg';
import xcent from '../images/xcent.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
      width: 250,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

  

const Car3 = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <CustNavbar />
            </div>
            
                
            <div style={{ border: "2px solid black", marginLeft: "30px", marginRight: "30px", marginTop: "30px", height: "1100px", background: "#f4e2d8" }}>
                    <div style={{ height: "100px", marginTop: "25px", marginLeft: "10px" }}>
                <center>
                            <form action="/" method="get">
                                <label htmlFor="header-search">
                                    <span className="visually-hidden">Search</span>
                                </label>
                                <input
                                    type="text"
                                    id="header-search"
                                    placeholder="Search"
                                    name="s"
                                />
                                <button style={{ marginLeft: "10px" }} type="submit">Search</button>
                            </form>
                        </center>
                    </div>
                    <br />
                    <div>
                    <div style={{ width: "300px", marginLeft: "10px", height: "270px" }}>
                            <img src={harrier5} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Harrier- 5 Seater</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 100/hr & Rs. 2300/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "625px", marginTop: "-270px"}}>
                        <img src={santafe} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Santa a Fe</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 98/hr & Rs. 2300/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "100px", marginTop: "-275px" }}>
                        <img src={swift} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>swift</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 89/hr & Rs. 2100/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <br />
                        <br />

                        <div style={{width: "300px", marginLeft: "10px", height: "270px", marginTop: "150" }}>
                        <img src={tesla} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Tesla</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 150/hr & Rs. 3600/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "625px", marginTop: "-270px" }}>
                        <img src={wagonr} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Wagon R</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 75/hr & Rs. 1800/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "100px", marginTop: "-270px" }}>
                        <img src={xcent} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Xcent</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 75/hr & Rs. 1800/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <div style={{marginLeft:"400px"}}>
                           
                            <h2 style={{fontSize:"20px", marginLeft:"250px", fontFamily:"monsterstat"}}>Next Page:</h2>
                            <Link to="/Car"><h2 style={{fontSize:"20px", marginLeft:"355px", marginTop:"-30px",fontFamily:"monsterstat"}}>1</h2></Link>
                            <Link to="/Car2"><h2 style={{fontSize:"20px", marginLeft:"370px", marginTop:"-31px",fontFamily:"monsterstat"}}>2</h2></Link>
                            <Link to="/Car3"><h2 style={{fontSize:"20px", marginLeft:"385px", marginTop:"-31px",fontFamily:"monsterstat"}}>3</h2></Link>
                            <Link to="/Car4"><h2 style={{fontSize:"20px", marginLeft:"400px", marginTop:"-31px", fontFamily:"monsterstat"}}>4</h2></Link>
                            <Link to="/Car5"><h2 style={{fontSize:"20px", marginLeft:"415px", marginTop:"-31px",fontFamily:"monsterstat"}}>5</h2></Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        

    )
}

export default Car3