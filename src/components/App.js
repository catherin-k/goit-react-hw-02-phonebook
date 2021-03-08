import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state.name);
    console.log(this.state.name);
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default App;
