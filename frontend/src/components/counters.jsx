import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //clone of counters state object
    const index = counters.indexOf(counter); //returns the index of the counter in the counters array
    counters[index] = { ...counter }; //here we clone the counter that we receive as args at the index position
    counters[index].value++; //we increment this counters clone at the index position.
    this.setState({ counters });
  };

  handleDelete = counterId => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
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
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id} //this value is used by react internally, we cannot acces to this atributte
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
