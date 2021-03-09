import React, { Component } from "react";
import shortid from "shortid";

import "./App.css";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/contactList";
import Filter from "./filter/Filter";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const nameArr = this.state.contacts.reduce(
      (acc, contact) => [...acc, contact.name.toLowerCase()],
      []
    );

    if (nameArr.includes(name.toLowerCase())) {
      console.log("Alert");
      alert(`${name} is already in contacts`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }

    console.log(nameArr);
    console.log(name.toLowerCase());
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
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
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
