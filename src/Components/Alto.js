import React, { useState} from "react";
import Footer from './Footer';
import './Footer.css';
import Form from "react-bootstrap/Form";
import CustNavbar from "./Navbar/CustNavbar";
import { Link } from 'react-router-dom';
import innova from "../images/innova.jpg";
import { Table } from 'reactstrap';


const Alto = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const[modeofdelivery,setmodeofdelivery]=useState("");
    const[paymentmode,setpaymentmode]=useState("");
    
    


    function validateForm() {
        return email.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.warn("Hiring");
        alert(`cofirm?`);
    }
    return (
        <div>
            <CustNavbar />
            <div>
                <center>
                    <h1 style={{ fontFamily: "monsterstat", marginTop: "10px", borderStyle: "10px solid black", borderStyle: "double", width: "150px" }}>Innova</h1>
                </center>
                <br />

                <img style={{ borderRadius: "380px", width: "450px", marginLeft: "550px" }} src={innova} />
                <br />
                <center>
                    <h2 style={{ fontFamily: "monsterstat" }}>Rs. 110/hr & Rs. 2500/day</h2>
                </center>
                <br />
                <br />


                <Table bordered style={{ overflow: "auto", padding: "5px", marginLeft: "5px", marginRight: "5px" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Body Type</th>
                            <th>Boot Space (Litres)</th>
                            <th>Seating Capacity</th>
                            <th>Engine Displacement (cc)</th>
                            <th>Fuel Type</th>
                            <th>Fuel Tank Capacity</th>
                            <th>Seating Capacity</th>
                            <th>Max Power (bnp@rpm)</th>
                            <th>Transmission Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12.99 kmph</td>
                            <td>Diesel</td>
                            <td>2494</td>
                            <td>100.57 bhp@3600rpm</td>
                            <td>7</td>
                            <td>Manual</td>
                            <td>300</td>
                            <td>55.0</td>
                            <td>MUV</td>
                        </tr>
                    </tbody>


                </Table>

                <Form onSubmit={handleSubmit} style={{ border: "2px solid black", borderRadius: "10px", marginLeft: "3px", padding: "20px", height: "650px",marginBottom:"100px",width: "600px", marginLeft: "540px" }}>
                    <Form.Group size="lg" controlId="firstname">
                        <Form.Label style={{ width: "30%" }}>First Name</Form.Label>
                        <Form.Control style={{ width: "30%" }}
                            autoFocus
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <Form.Label style={{ float: "right", marginTop: "-70px", width: "30%" }}>Last Name</Form.Label>
                        <Form.Control style={{ marginLeft: "370px", marginTop: "-43px", width: "30%" }}
                            autoFocus
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="phone">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            autoFocus
                            type="number"
                            value={phoneNo}
                            onChange={(e) => setphoneNo(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={address}
                            rows={3}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controllId="delivery">
                        <Form.Label style={{ fontFamily: "monsterstat" }}>Mode of Delivery: </Form.Label>
                        <Form.Check type="radio"
                            inline
                            label="Home Delivery"
                            name={modeofdelivery} style={{ padding: "10px", marginLeft: "50px" }}
                            onChange={(e)=> setmodeofdelivery(e.target.value)}>
                        </Form.Check>

                        <Form.Check type="radio"
                            inline
                            label="Collect from office"
                            name={modeofdelivery}
                            onChange={(e)=> setmodeofdelivery(e.target.value)}>
                        </Form.Check>
                    </Form.Group>
                    <br />
                    <center>
                        <Link to="/Payment">
                        <button block size="lg" type="submit" disabled={!validateForm()} style={{ borderRadius: "10px" }}>
                            Hire
                        </button>
                        </Link>


                        <button block size="lg" type="submit" disabled={!validateForm()} style={{ borderRadius: "10px", margin: "10px" }}>
                            Cancel
                        </button>

                    </center>



                </Form>

            </div>
            <Footer />
        </div>
    )
}

export default Alto;