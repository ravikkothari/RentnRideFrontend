import React, { useState,Component } from 'react';
import CustNavbar from './Navbar/CustNavbar';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import {Table} from 'reactstrap';


class AdminLogin extends Component {

    constructor(props) {
        console.log("Inside constructor")
        super(props);
        let locale=localStorage.getItem('user-info');
        console.log("localStorage: "+locale);
        this.state = {
            AllUserData: [],
            AllCarData:[],
            errMsg: ""
        }
    }


    componentDidMount() {
        console.log("Inside componentDidMount of GetAllUser")
        axios.get("http://localhost:9090/allusers")
            .then((responseData) => {
                console.log(responseData);
                this.setState({
                    AllUserData: responseData.data
                });


            })
            .catch((userError) => { console.log(userError) })

        axios.get("http://localhost:9090/allcars")
        .then((responseData)=>{
            console.log(responseData);
            this.setState({
                AllCarData:responseData.data
            })
        })
        .catch((userError)=>{this.context.log(userError)})
    }


    render() {

        console.log("Inside render")
        console.log(this.state.AllUserData.data)

        return (


            <div>
                <CustNavbar />


                <div>
                    <div style={{width:"97%",marginLeft:"20px",border:"2px solid black",height:"700px",overflow:"auto"}}>
                    <center><h2 style={{ fontFamily: "monsterstat" }}>Car details</h2></center>
                        <hr />

                        <div>
                            
                            <Table bordered dark style={{overflowX:"scroll"}}>
                            <thead>
                        <tr>
                            <th>ID</th>
                            <th>Body Type</th>
                            <th>Boot Space (Litres)</th>
                            <th>Seating Capacity</th>
                            <th>Engine Displacement (cc)</th>
                            
                            <th>Fuel Type</th>
                            <th>Fuel Tank Capacity</th>
                            
                            <th>Max Power (bnp@rpm)</th>
                            <th>Milegae</th>
                            <th>Transmission Type</th>
                        </tr>
                    </thead>
                                <tbody>
                                    {this.state.AllCarData.map(function (item, key) {
                                        // if(item.empId === '2')
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.bodyType}</td>
                                                <td>{item.bootSpace}</td>
                                                <td>{item.capacity}</td>
                                                <td>{item.engineDisplacement}</td>
                                                <td>{item.fuel}</td>
                                                <td>{item.fuelTankCapacity}</td>
                                                <td>{item.maxPower}</td>
                                                <td>{item.milegae}</td>
                                                <td>{item.transmissionType}</td>
                                            </tr>
                                        )

                                    })}
                                </tbody>
                            </Table>
                            

                        </div>

                    </div>
                    <div style={{ width: "97%", marginLeft: "20px", border: "2px solid black", height: "500px" }}>
                        <center><h2 style={{ fontFamily: "monsterstat" }}>User details</h2></center>
                        <hr />
                        <div>
                            
                            <Table bordered dark style={{overflowX:"scroll"}}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>FIRST NAME</th>
                                        <th>LAST NAME</th>
                                        <th>ADDRESS</th>
                                        <th>GENDER</th>
                                        <th>DOB</th>
                                        <th>EMAIL ID</th>
                                        <th>PHONE NO</th>
                                        <th>LICENSE NUMBER</th>
                                        <th>DOI</th>
                                        <th>AADHAR CARD NUMBER</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.AllUserData.map(function (item, key) {
                                        // if(item.empId === '2')
                                        return (
                                            <tr key={item.userid}>
                                                <td>{item.userid}</td>
                                                <td>{item.firstName}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.address}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.dob}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phoneNo}</td>
                                                <td>{item.license}</td>
                                                <td>{item.doi}</td>
                                                <td>{item.aadhar}</td>

                                            </tr>
                                        )

                                    })}
                                </tbody>
                            </Table>
                            

                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default AdminLogin;