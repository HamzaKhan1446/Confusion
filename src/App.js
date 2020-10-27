import React from 'react';
import {Navbar , NavbarBrand} from 'reactstrap';
import './App.css';


function App() {
  return (
    <div className="App">

      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="https://www.google.com.pk/"> Confusion App</NavbarBrand>
        </div>
      </Navbar>
     
    </div>
  );
}

export default App;
