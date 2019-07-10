import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1
    };

    render() {

        return (
            /* JSX expression which eventually
            gets compiled by Babel to calls to 
            React.createElement. That's why we
             have to import the React Obj  */
            <div>
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-outline-light btn-sm">Increment</button>
            </div>
        );
    };

    /* Rendering classes dinamically */
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "light";
        return classes;
    }

    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    };
};
 
export default Counter;