import React, { Component } from "react";
import { Button } from "../Button";
import {MenuItems} from './MenuItems';
import './Navbar.css';
import {Link} from 'react-router-dom';


class Navbar extends Component{
    state={clicked:false}

    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
            <h1 className="navbar-logo" style={{fontSize:"30px"}}>Rent N Ride <i class="fas fa-car-side"></i></h1>

            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>

            </div>
            <ul className={this.state.clicked? 'nav-menu active':'nav-menu'}>
                {MenuItems.map((item, index)=>{
                    return(
                        <li key={index}> 
                        
                            <a className={item.cName} href={item.url}>
                            <i className={item.class}></i>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                
             </ul>
             <Link to="/login">
             <Button>
             <i class="fas fa-sign-in-alt"></i> LOGIN</Button>
             </Link>
            </nav>
        );
    }
}

export default Navbar;