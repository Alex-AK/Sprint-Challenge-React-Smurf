import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="card">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <button onClick={() => props.handleDelete(props.id)}>Delete</button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
