import React from 'react';
import { ContextShowP } from '../App';

export default (props) => {
  return (
    <div style={{ border: '1px solid #ccc', width: '200px', margin: '0 auto' }}>
      <h3>Counter2</h3>
      <ContextShowP.Consumer>
        {(value) => (value ? <p>Clicked</p> : null)}
      </ContextShowP.Consumer>
    </div>
  );
};
