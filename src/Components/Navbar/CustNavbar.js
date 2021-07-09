import React, { Component } from "react";
import { Button } from "../Button";
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Link,withRouter } from 'react-router-dom';
import { DropdownToggle } from "reactstrap";
import { Dropdown } from "react-bootstrap";



class CustNavbar extends Component {
    state = { clicked: false,
    }

    

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
        
    }

    logout=(props)=>{
        localStorage.clear();
    }

    render() {
        let user = localStorage.getItem('user-info');
        console.log("user"+ user);
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo" style={{ fontSize: "40px", fontFamily: "monsterstat" }}>Rent N Ride <i class="fas fa-car-side"></i></h1>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>

                

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {MenuItems.map((item, index) => {

                        return (


                            <li key={index}>

                                <a className={item.cName} href={item.url} style={{ fontFamily: "monsterstat", fontSize: "25px" }}>
                                    <i className={item.class}></i>
                                    {item.title}
                                </a>



                            </li>



                        )




                    })}


                </ul>
                <Dropdown>
                    <Dropdown.Toggle variant="Primary" id="dropdown-basic" >
                        user
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu>
                        <Dropdown.Item href="/afterLogin">
                            <Button><i class="fas fa-sign-in-alt"></i> LOGIN</Button>
                            </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/Home">
                        <Button onClick={this.logout}><i class="fas fa-sign-out-alt"></i> LOGOUT</Button>
                        </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
                    
                

                    
            </nav >


        );
    }
}

export default CustNavbar;