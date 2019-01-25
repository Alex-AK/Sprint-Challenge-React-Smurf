import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res =>
        this.setState({
          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post('http://localhost:3333/smurfs', {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res => {
        this.setState({
          smurfs: res.data,
          name: '',
          age: '',
          height: ''
        });
      })
      .catch(err =>
        alert(
          `${err} \nInputs do not match required information or smurf already exists.`
        )
      );
  };

  handleDelete = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Village</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>

        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              name={this.state.name}
              age={this.state.age}
              height={this.state.height}
              addSmurf={this.addSmurf}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
