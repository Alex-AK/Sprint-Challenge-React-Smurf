import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.smurfs);
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div className="flex">
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  handleDelete={this.props.handleDelete}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
