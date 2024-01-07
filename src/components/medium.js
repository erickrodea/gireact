import React, { Component } from "react";
export default class info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: props.name,
        dob: props.dob,
        number: props.number,
      },
    };
  }
  render() {
    return (
      <div>
        Hello, {this.state.person.name}. your dob is: {this.state.person.dob},
        your number is {this.state.person.number}
      </div>
    );
  }
}
