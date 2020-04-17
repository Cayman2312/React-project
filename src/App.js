import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2016 },
      { name: 'Mazda', year: 2010 },
    ],
    pageTitle: 'React components',
  };

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    });
  };

  handleInput = (e) => {
    this.setState({
      pageTitle: e.target.value,
    });
  };

  render() {
    const divStyle = {
      textAlign: 'center',
    };

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput} />

        <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>
          Change title
        </button>

        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
            />
          );
        })}
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
