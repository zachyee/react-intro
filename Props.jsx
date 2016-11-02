var FriendsContainer = React.createClass({
    getInitialState: function() {
        return {
            name: 'Zachary Yee'
            friends: ['Foo', 'Bar', 'Baz']
        }
    },
    addFriend: function(friend) {
        this.setState({
            friends: this.state.friends.concat([friend])
        });
    },
    render: function() {
        return(
            <div>
                <h3>Name: {this.state.name}</h3>
                <AddFriend addNew={this.addFriend} />
                // Passing this.state.friends to
                // ShowList.props.names
                <ShowList names={this.state.friends} />
            </div>
        )
    }
});

var AddFriend = React.createClass({
    getInitialState: function() {
        return {
            newFriend: ''
        }
    },
    propTypes: {
        addNew: React.PropTypes.func.isRequired
    },
    updateNewFriend: function(e) {
        this.setState({
            newFriend: e.target.value
        })
    },
    handleAddNew: function() {
        // Note how this.props.addNew() was passed down from
        // the parent class
        this.props.addNew(this.state.newFriend);
        this.setState({
            newFriend: ''
        });
    },
    render: function() {
        return (
            <div>
                <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
                <button onClick={this.handleAddNew}>Add Friend</button>
            </div>
    }
});

var ShowList = React.createClass({
    render: function() {
        // Array.prototype.map() creates a new array,
        // calls the callback function on each item in the array
        // and fills the new array with the result of calling
        // the callback functin on each item
        var listItems = this.props.names.map(function(friend) {
            return <li>{friend}</li>;
        });
        return (
            <div>
                <h3>Friends</h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
});

// Additional Notes
//
// propTypes: allows control over presence or types of certain
// props passed to the child component
//
// getDefaultProps: allows specify a default (or a backup) value
// for certain props just in case those props are never passed
// into the component 
