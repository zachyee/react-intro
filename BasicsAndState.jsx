// Adding state to components
// Multi-component hierarchies should be created where
// common parent components manage the state and then
// pass it down to children components via props field

// Save the created class in a variable
var HelloUser = React.createClass({
    // getInitialState() sets the initial state of the component
    getInitialState: function() { 
        return {
            username: '@zachyee'
        }
    },
    // handleChange() function to get called every time user
    // types in the input box
    handleChange: function(e) {
        this.setState()({
            username: e.target.value
        });
    }
    // render() is a template for the component
    render: function() {
        return (
            <div>
                Hello {this.state.username} <br />
                // The function in onChange gets called
                // every time the value in the input box changes
                Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
            </div>
        )
    }
});

// Why does React use a Virtual DOM?
// React can keep track of changes between successive
// Virtual DOMs and then only update the changed portions
// Whenever setState() is called, the diff algorithm runs

// ReactDOM.render() takes two arguments
//      1. Component to be rendered
//      2. DOM node where component should be rendered
// Typically only have one call to this function
// because rendering most parent component will render
// all of the child components as well.
ReactDOM.render(<HelloWorld />, document.getElementId('app')); 
