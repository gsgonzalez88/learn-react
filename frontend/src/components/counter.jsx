import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags: ['tag1','tag2', 'tag3']
    };

    render() {

        return (
            /* JSX expression which eventually
            gets compiled by Babel to calls to 
            React.createElement. That's why we
             have to import the React Obj  */
            <div>
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button 
                        onClick={this.handleIncrement /* only function reference */} 
                        className="btn btn-outline-light btn-sm"
                    >
                    Increment
                    </button>
                {/* <ul>
                    {this.renderTags()}
                </ul> */}
            </div>
        );
    };


    /* binding a function with constructor (this)
        constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    };
    */
    
    //the other way is to use an arrow function, wich has the current object binded to "this"
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
    };

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags to show!</p>;
        return this.state.tags.map(tag => <li key={ tag }>{ tag }</li>);
    };

    /* Rendering classes dinamically */
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "light";
        return classes; 
    };

    //formatting the counter so it shows the word ZERO for number 0
    formatCount() {
        let { count } = this.state;
        return count === 0 ? 'Zero' : count;
    };
};
 
export default Counter;