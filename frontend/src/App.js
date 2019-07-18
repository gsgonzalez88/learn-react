import React, { Component } from "react";
import "./App.css";
//import Movies from './components/movies';
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 3 },
        { id: 2, value: 0 },
        { id: 3, value: 4 },
        { id: 4, value: 0 }
      ]
    };
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //clone of counters state object
    const index = counters.indexOf(counter); //returns the index of the counter in the counters array
    counters[index] = { ...counter }; //here we clone the counter that we receive as args at the index position
    counters[index].value++; //we increment this counters clone at the index position.
    this.setState({ counters });
  };

  handleDelete = counterId => {
    if (window.confirm("Are you sure you wish to delete this counter?")) {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters: counters });
    }
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}            
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
