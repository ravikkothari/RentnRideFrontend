import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import CustNavbar from "./Navbar/CustNavbar";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Alert } from "react-alert";
import { useHistory } from "react-router";
import { useEffect } from "react";


export default function AddCar(){

    const [carName, setcarName] = useState("");
    const [bootSpace, setBootSpace] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [fueltankCapacity, setfueltankCapacity] = useState("");
    const [seatingCapacity, setseatingCapacity] = useState("");
    const [EngineDisplacement, setEngineDisplacement] = useState("");
    const [milegae, setmilegae] = useState("");
    const [bodyType,setbodyType ] = useState("");
    const [maxPower, setmaxPower] = useState("");
    const[transmissionType,settransmissionType]=useState("");
    const history =useHistory();

    async function handleSubmit(event) {

        event.preventDefault();
        let car = { carName, bootSpace, fuelType, fueltankCapacity, seatingCapacity, EngineDisplacement, milegae,bodyType, maxPower, transmissionType}

        console.warn(car);
        let result = "";
        
        
        await axios.post("http://localhost:9090/addcar",car).then((response)=>{history.push("/AdminLogin")})
        
        
        
        console.warn("result", result);
        localStorage.setItem("user-info",JSON.stringify(result));
        /*history.push("/Car");*/

        
        
    }

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
          history.push('/AddCar')
        }
      }, []
      )


    return(


        <div style={{ background: "#bdc3c7" }}>
            <div>
                <CustNavbar />
            </div>
            <div className="addcar" style={{ height: "1200px", width: "35%", marginLeft: "550px", marginTop: "40px" }}>
                <Form onSubmit={handleSubmit} style={{ border: "2px solid black", borderRadius: "10px", marginLeft: "3px", padding: "20px" }}>
                    <Form.Group size="lg" controlId="carName">
                        <Form.Label style={{ width: "30%" }}>Car Name</Form.Label>
                        <Form.Control style={{ width: "30%",marginRight:"-43px",marginTop:"10px" }}
                            autoFocus
                            type="text"
                            value={carName}
                            onChange={(e) => setcarName(e.target.value)}
                        />
                        </Form.Group>
                        <br/>
                        <Form.Group>
                            
                        <Form.Label style={{ marginTop: "-70px", width: "30%" }}>Boot Space</Form.Label>
                        
                        <Form.Control style={{ marginLeft: "150px", marginTop: "-43px", width: "30%" }}
                            autoFocus
                            type="text"
                            value={bootSpace}
                            onChange={(e) => setBootSpace(e.target.value)}
                        />
                        
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="phone">
                        <Form.Label>Fuel Type</Form.Label>
                        <br/>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={fuelType}
                            onChange={(e) => setFuelType(e.target.value)}
                        />
                        
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Fuel Tank Capacity</Form.Label>
                        <Form.Control
                            autoFocus
                            type="number"
                            value={fueltankCapacity}
                            onChange={(e) => setfueltankCapacity(e.target.value)}
                        />
                       
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Seating Capacity</Form.Label>
                        <Form.Control
                            type="number"
                            value={seatingCapacity}
                            onChange={(e) => setseatingCapacity(e.target.value)}
                        />
                       
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="cpassword">
                        <Form.Label> Engine Displacement</Form.Label>
                        <Form.Control
                            type="text"
                            value={EngineDisplacement}
                            onChange={(e) => setEngineDisplacement(e.target.value)}
                        />
                        
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="dob">
                        <Form.Label> Milage</Form.Label>
                        <Form.Control
                            type="text"
                            value={milegae}
                            onChange={(e) => setmilegae(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="aadhar">
                        <Form.Label> Body Type</Form.Label>
                        <Form.Control
                            type="text"
                            value={bodyType}
                            onChange={(e) => setbodyType(e.target.value)}
                        />

                    </Form.Group>
                    <br />
                    <Form.Group size="lg" controlId="license">
                        
                        <Form.Label style={{ width: "30%" }}> Max Power</Form.Label>
                        <Form.Control style={{ width: "30%" }}
                            type="text"
                            value={maxPower}
                            onChange={(e) => setmaxPower(e.target.value)}
                        />
                        
                        <Form.Label style={{ float: "right", marginTop: "-70px", width: "30%" }}> Transmission Type</Form.Label>
                        <Form.Control style={{ marginLeft: "356px", marginTop: "-43px", width: "30%" }}
                            type="text"
                            value={transmissionType}
                            onChange={(e) => settransmissionType(e.target.value)}
                        />
                        
                    </Form.Group>
                    <br />
                    
                    <br />
                    <center>
                        
                        <button block size="lg" type="submit" style={{ borderRadius: "10px" }}>
                            Add
                        </button>
                        
                        <Link to="/signup">
                        <button block size="lg" type="submit" style={{ borderRadius: "10px", margin: "10px" }}>
                            Cancel
                        </button>
                        </Link>

                    </center>



                </Form>
            </div>
        </div>
    )
}