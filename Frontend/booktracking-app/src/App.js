import HomeNavBar from "./Components/Home_NavBar";
import {Button} from "react-bootstrap";

import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
        <div>
          <HomeNavBar/>
          <br/>
          <Button variant="dark">Add Book</Button>
        </div>
    );
  }
}

export default App;
