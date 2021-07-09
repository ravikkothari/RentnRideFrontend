import React from 'react';
import CustNavbar from './Components/Navbar/CustNavbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import './Components/Footer.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Car from './Components/Car';
import Signup from './Components/Signup';
import afterLogin from './Components/AfterLogin.js';
import Car2 from './Components/Car2';
import Car3 from './Components/Car3';
import Car4 from './Components/Car4';
import Car5 from './Components/Car5';
import AdminLogin from './Components/AdminLogin';
import LoginUser from './Components/LoginUser';
import Innova from './Components/Innova';
import Payment from './Components/Payment';
import AddCar from './Components/AddCar';
import AfterAdminLogin from './Components/AfterAdminLogin';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/Car" component={Car} />
          <Route path="/Car2" component={Car2} />
          <Route path="/Car3" component={Car3} />
          <Route path="/Car4" component={Car4} />
          <Route path="/Car5" component={Car5} />
          <Route path="/signup" component={Signup} />
          <Route path="/afterLogin" component={afterLogin} />
          <Route path="/AfterAdminLogin" component={AfterAdminLogin} />
          <Route path="/AddCar" component={AddCar} />
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/LoginUser" component={LoginUser} />
          <Route path="/Innova" component={Innova} />
          <Route path="/Payment" component={Payment} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
