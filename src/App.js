import React, { Component } from 'react';
import {Navbar , NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent'


class App extends Component{


  render()
  {
    return(
      <div className="App">

      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="https://www.google.com.pk/"> Confusion App</NavbarBrand>
        </div>
      </Navbar>

      <Menu></Menu>
     
    </div>
    );
  }
}

export default App;
