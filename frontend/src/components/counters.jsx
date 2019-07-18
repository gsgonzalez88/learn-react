import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Destructuring Arguments
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} //this value is used by react internally, we cannot acces to this atributte
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter} //this object contains everything we need for a counter, all the properties.
            //and if we need in the future to add another prop, it will be simplier.
          />
        ))}
      </div>
    );
  }
}

export default Counters;
