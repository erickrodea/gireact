// import logo from './logo.svg';
import "./App.css";
// import VeryEasy from './components/veryEasy'
import BasicInfo from "./components/hard";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "Erick Rodea",
          dob: "10/09/1997",
          number: "704-701-9854",
        },
        {
          name: "jane doe",
          dob: "1/1/2000",
          number: "704-123-4567",
        },
        {
          name: "john smith",
          dob: "1/1/2001",
          number: "704-123-1234",
        },
      ],
    };
  }
  render() {
    return (
      <div class="personInfoContent">
        {this.state.person.map((person, position) => (
          <BasicInfo key={position} person={person}></BasicInfo>
        ))}
      </div>
    );
  }
}

export default App;
