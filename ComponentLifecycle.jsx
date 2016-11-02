var HelloUser = React.createClass({
    getInitialState: function() {
        name: 'Zachary Yee'
    }
    componentWillMount: function() {
        alert('In componentWillMount');
    },
    componentDidMount: function() {
        alert('In componentDidMount');
    },
    componentWillReceiveProps: function() {
        alert('In componentWillReceiveProps');
    },
    componentWillUnmount: function() {
        alert('In componentWillUnmount');
    },
    render: function() {
        return (
            <div>
                Hello, {this.state.name}
            </div>
        )
    }
});
