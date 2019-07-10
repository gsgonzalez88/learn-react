import React, { Component } from 'react';

class Clock extends Component {
    
    constructor(props) {
        super(props);
        /* super() is a javascript keyword that is used to call functions on a parent's object.
            In this case, it will call the constructor function on the base  React.Component  class. This is necessary to preserve the functionality of the constructor function of the class your component is inheriting from.  props  is being passed along as well to make sure super has access to the same arguments as the overwriting constructor.
            You should always pass  props  when calling the super constructor in a component class.
            */
        this.state = { 
            time: new Date().toLocaleString()
        }
        /* state  is a private property of components, a piece of information 
           that only they can read and only they can change. Nothing outside of
           a component should ever know about a component's state. 
           If a component wants to share information about its state with
           another component, it can do that by passing it explicitly
           via props in the call to the other component.
         */
    };

    componentDidMount(){
        this.intervalID = setInterval(
            () => this.tick(),
            1000
            );
    };

    componentWillUnmount(){
        clearInterval(this.intervalID);
    };

    tick(){
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    };

    render() { 
        return (
            <p>
             {this.state.time}
            </p>
          );
    }
}
 
export default Clock;

