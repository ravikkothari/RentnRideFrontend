import React, { useState } from 'react';
import CustNavbar from './Navbar/CustNavbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import safari from '../images/safari.jpg';
import volvo from '../images/volvo.jpg';
import renaultkiger from '../images/renaultkiger.jpg';
import scorpio from '../images/scorpio.jpg';
import rangerover from '../images/rangerover.jpeg';
import fortuner from '../images/fortuner.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 250,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

  const values = [
    {
      value: 0,
      label: '100',
    },
    {
      value: 20,
      label: '200',
    },
    
    {
      value: 40,
      label: '400',
    },
    
      {
        value: 60,
        label: '600',
      },
      {
        value: 80,
        label: '800',
      },
      {
        value: 100,
        label: '1000',
      },
  ];

  function valuetext(value) {
    return `${value}`;
  }

const Car4 = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <CustNavbar />
            </div>
            <div style={{ height: "100%", width: "100%" }}>
                <div style={{ border: "2px solid black", width: "25%", height: "700px" }}>
                    Side Tab
                    <Typography id="discrete-slider-custom" gutterBottom style={{marginLeft:"20px"}}>
                        Range
                    </Typography>
                    <Slider style={{width:"80%", marginLeft:"20px"}}
                        defaultValue={200}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-custom"
                        step={50}
                        valueLabelDisplay="auto"
                        values={values}
                    />

                </div>
                <div style={{ border: "2px solid black", marginLeft: "30%", marginTop: "-700px", height: "1000px", background: "#f4e2d8" }}>
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
                            <img src={safari} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Safari</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 100/hr & Rs. 2300/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "445px", marginTop: "-270px"}}>
                        <img src={volvo} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Volvo</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 110/hr & Rs. 2600/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "100px", marginTop: "-275px" }}>
                        <img src={renaultkiger} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Renault Kiger</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 119/hr & Rs. 2800/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <br />
                        <br />

                        <div style={{width: "300px", marginLeft: "10px", height: "270px", marginTop: "150" }}>
                        <img src={scorpio} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Scorpio</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 150/hr & Rs. 3600/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "445px", marginTop: "-270px" }}>
                        <img src={rangerover} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Range Rover</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 250/hr & Rs. 6000/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <div style={{ height: "270px", width: "300px", float: "right", marginRight: "100px", marginTop: "-270px" }}>
                        <img src={fortuner} style={{borderRadius:"220px", width:"95%", height:"170px", marginLeft:"5px"}}/>
                            <br/>
                            <center><h2 style={{fontSize:"20px", fontFamily:"monsterstat"}}>Fortuner</h2></center>
                            <center><h2 style={{fontSize:"15px", fontFamily:"monsterstat"}}>Rs. 225/hr & Rs. 5200/day</h2></center>
                            <center><Button>Hire</Button></center>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <div>
                            <h2 style={{fontSize:"20px", marginLeft:"250px", fontFamily:"monsterstat"}}>Next Page:</h2>
                            <Link to="/Car2"><h2 style={{fontSize:"20px", marginLeft:"350px", marginTop:"-30px",fontFamily:"monsterstat"}}>2</h2></Link>
                            <Link to="/Car3"><h2 style={{fontSize:"20px", marginLeft:"370px", marginTop:"-30px",fontFamily:"monsterstat"}}>3</h2></Link>
                            <Link to="/Car4"><h2 style={{fontSize:"20px", marginLeft:"390px", marginTop:"-31px", fontFamily:"monsterstat"}}>4</h2></Link>
                            <Link to="/Car5"><h2 style={{fontSize:"20px", marginLeft:"410px", marginTop:"-31px",fontFamily:"monsterstat"}}>5</h2></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Car4