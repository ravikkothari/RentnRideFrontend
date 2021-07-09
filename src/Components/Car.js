import React, { useState } from 'react';
import CustNavbar from './Navbar/CustNavbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import innova from '../images/innova.jpg';
import alto from '../images/alto.jpg'
import { Button } from './Button';
import baleno from '../images/baleno.jpg';
import ciaz from '../images/ciaz.jpg'
import hondacity from '../images/hondacity.jpg'
import jazz5 from '../images/jazz5.jpg';
import i10 from '../images/i10.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 250,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

  

const Car = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <CustNavbar />
            </div>
            <div style={{ height: "1200px", width: "100%" }}>
                {/*<div style={{ border: "2px solid black", width: "25%", height: "700px" }}>*/}
                {/*    Side Tab*/}
                {/*    */}
                {/*</div>*/}
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
                            <img src={innova} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Innova</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 110/hr & Rs. 2500/day</h2></center>
                            <center>
                                <Link to="/Innova">
                                <Button>Hire</Button>
                                </Link>
                                </center>
                                
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "625px", marginTop: "-270px"}}>
                        <img src={alto} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Alto</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 90/hr & Rs. 2000/day</h2></center>
                            <center>
                                <Link to="/Alto"><Button>Hire</Button>
                                </Link>
                                </center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "100px", marginTop: "-275px" }}>
                        <img src={baleno} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Baleno</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 110/hr & Rs. 2300/day</h2></center>
                            <center>
                                <Link to="/Baleno"><Button>Hire</Button>
                                </Link>
                                </center>
                        </div>
                        <br />
                        <br />

                        <div style={{width: "300px", marginLeft: "10px", height: "270px", marginTop: "150" }}>
                        <img src={ciaz} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Ciaz</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 91/hr & Rs. 2100/day</h2></center>
                            <center>
                                <Link to="/Ciaz">
                                    <Button>Hire</Button>
                                    </Link>
                                    </center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "625px", marginTop: "-270px" }}>
                        <img src={hondacity} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Honda City</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 95/hr & Rs. 2200/day</h2></center>
                            <center>
                                <Link to="HondaCity"><Button>Hire</Button>
                                </Link>
                                </center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "100px", marginTop: "-270px" }}>
                        <img src={i10} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>i 10</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 87/hr & Rs. 2000/day</h2></center>
                            <center>
                                <Link to="/I10"><Button>Hire</Button>
                                </Link>
                                </center>
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
        </div>

    )
}

export default Car