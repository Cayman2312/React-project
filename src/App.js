import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center',
    };

    return (
      <div style={divStyle}>
        <h1 style={{ color: 'blue', fontSize: '50px' }}>Hello world!</h1>
      </div>
    );

    // return React.createElement(
    //   'div',
    //   {
    //     className: 'App',
    //   },
    //   React.createElement('h1', null, 'hello world')
    // );
  }
}

export default App;
