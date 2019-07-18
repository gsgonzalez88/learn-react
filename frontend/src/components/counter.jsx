import React, { Component } from "react";

/* A Controlled component does not have it's own local state, it receives all the data via
props and raises event whenever data needs to be changed. So this component is entirely 
controlle by his parent */

class Counter extends Component {
  /* state = {
    value: this.props.counter.value
    tags: ['tag1','tag2', 'tag3']
  }; */

  render() {
    return (
      /* JSX expression which eventually gets compiled by Babel 
      to calls to React.createElement. That's why we have to 
      import the React Obj  */

      <div className="row">
        <div className="col-sm-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            //onClick={this.handleIncrement /* only function reference */}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-outline-dark btn-sm "
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-outline-dark btn-sm m-2"
            disabled={this.props.counter.value === 0 ? true : false}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>

        {/* <ul>
              {this.renderTags()}
           </ul> */}
      </div>
    );
  }

  /* binding a function with constructor (this)
        constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    };
    */

  //the other way is to use an arrow function, wich has the current object binded to "this"
  /*   handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  }; */

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags to show!</p>;
    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  /* Rendering classes dinamically */
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //classes += this.state.value === 0 ? "warning" : "dark";
    classes += this.props.counter.value === 0 ? "warning" : "dark";
    return classes;
  }

  //formatting the counter so it shows the word ZERO for number 0
  formatCount() {
    //let { value } = this.state;
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
