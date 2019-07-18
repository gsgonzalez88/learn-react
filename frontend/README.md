
state includes the data that a components need, is an object.
state includes data that is local or private to that component. So, other components cannot access that state. It's completely internal to that component.

props: includes data that we give to a component. Is read only, we cannot change the values of props.

jsx expression can be use like js objects, any part of the code, like arguments
of a function, return it from a functions etc. As a value of const for example.


set attribute at a element

rendering class dynamically: depending on a value of some state property.



so that react notes that an state property has changed we need to use a method from the component that we extend. This method is "setState", and tells react that we updated the property, so he can make changes and update the DOM with the virtual DOM.
Angular is diferent, automatically detects the changes.

so, when we use the "setState" method, this set a call to the render method (asynchronous call), then React, matches the old tree of elements with the new one in the virtual DOM, it figures out what element of the tree has changed and then updates the element in the DOM, this way we can see that reacts only updates the element that has changed and no other in the page.



Passing children
There are times which we need to pass complex elements to a child component. To do this we use
children props. with this.props.children.


Raising and handling events
The component that owns a piece of the state, should be the one modifying it.


Removing the local state
Controlled components does not have it is own state, ir receives all the data via props and raises events
whenever data needs to be changed. So this  is entirely controlled by it's parent.


