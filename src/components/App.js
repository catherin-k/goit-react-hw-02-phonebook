import React, { Component } from "react";
import shortid from "shortid";

import "./App.css";

import ContactForm from "./contactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   // this.props.onSubmit(this.state.name);
  //   console.log(this.state.name);
  // };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>contacts</h2>
      </div>
    );
  }
}

export default App;
