var React = require('react/addons');

var Select = require('./Select.jsx');
var Cube = require('./Cube.jsx');


var App = React.createClass({
    getInitialState: function () {
        return {cube: null}
    },
    render: function() {
        return (
            <div className='container'>
                {!this.state.cube ? <Select onSelect={this.onSelect} /> : <Cube cube={this.state.cube} onClose={this.onClose} />}
            </div>
        );
    },
    onSelect: function (src) {
        this.setState({cube: src});
    },
    onClose: function () {
        this.setState({cube: null});
    }
});

module.exports = App;