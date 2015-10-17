var React = require('react/addons');
var $ = require('jquery');
var classnames = require('classnames');


var Cube = React.createClass({
    componentDidMount: function () {
        var canvas = React.findDOMNode(this.refs.canvas);
        var $canvas = $(canvas);
        var offset = $canvas.offset(); // Offset from the corner of the page.
        this.left = offset.left;
        this.top = offset.top;
        this.ctx = canvas.getContext('2d');
    },
    getInitialState: function () {
        return {
            penDown: false,
            penSize: 10,
            penColor: 'red'
        }
    },
    render: function() {
        return (
            <div className='builder'>
                <div className='cube' ref='container'>
                    <canvas id="canvas" ref='canvas' width='566' height='900'
                        onMouseDown={this.penDown}
                        onMouseMove={(function (e) { this.onMove(e); }).bind(this)}
                        onMouseUp={this.penUp}
                        onMouseLeave={this.penUp}></canvas>
                    <img src={this.props.cube} />
                </div>
                <div className='controls'>
                    <div>
                        <button onClick={this.props.onClose}>Wstecz</button>
                    </div>
                    <hr />
                    <div className='penColors'>
                        <div className={classnames('wrapper', {active: this.state.penColor == 'red'})}
                            onClick={(function () {this.setState({penColor: 'red'})}).bind(this)}>
                            <div className='color' style={{backgroundColor: 'red'}}>
                            </div>
                        </div>
                        <div className={classnames('wrapper', {active: this.state.penColor == 'green'})}
                             onClick={(function () {this.setState({penColor: 'green'})}).bind(this)}>
                            <div className='color' style={{backgroundColor: 'green'}}>
                            </div>
                        </div>
                        <div className={classnames('wrapper', {active: this.state.penColor == 'blue'})}
                             onClick={(function () {this.setState({penColor: 'blue'})}).bind(this)}>
                            <div className='color' style={{backgroundColor: 'blue'}}>
                            </div>
                        </div>
                        <div className={classnames('wrapper', {active: this.state.penColor == 'orange'})}
                             onClick={(function () {this.setState({penColor: 'orange'})}).bind(this)}>
                            <div className='color' style={{backgroundColor: 'orange'}}>
                            </div>
                        </div>
                        <div className={classnames('wrapper', {active: this.state.penColor == 'gray'})}
                             onClick={(function () {this.setState({penColor: 'gray'})}).bind(this)}>
                            <div className='color' style={{backgroundColor: 'gray'}}>
                            </div>
                        </div>
                        <div className={classnames('wrapper', {active: this.state.penColor == 'hotpink'})}
                             onClick={(function () {this.setState({penColor: 'hotpink'})}).bind(this)}>
                            <div className='color' style={{backgroundColor: 'hotpink'}}>
                            </div>
                        </div>
                        <div className={classnames('wrapper', {active: this.state.penColor == 'darkgray'})}
                             onClick={(function () {this.setState({penColor: 'darkgray'})}).bind(this)}>
                            <div className='color' style={{backgroundColor: 'darkgray'}}>
                            </div>
                        </div>
                        <div className={classnames('wrapper', {active: this.state.penColor == 'white'})}
                             onClick={(function () {this.setState({penColor: 'white'})}).bind(this)}>
                            <div className='color' style={{backgroundColor: 'white'}}>
                            </div>
                        </div>

                        <div className={classnames('wrapper', {active: this.state.penSize == 10})}
                             onClick={(function () {this.setState({penSize: 10})}).bind(this)}>
                            <div className='size' style={{width: 10, height: 10, margin: 20, borderRadius: 5}}>
                            </div>
                        </div>
                        <div className={classnames('wrapper', {active: this.state.penSize == 20})}
                             onClick={(function () {this.setState({penSize: 20})}).bind(this)}>
                            <div className='size' style={{width: 20, height: 20, margin: 15, borderRadius: 10}}>
                            </div>
                        </div>
                        <div className={classnames('wrapper', {active: this.state.penSize == 30})}
                             onClick={(function () {this.setState({penSize: 30})}).bind(this)}>
                            <div className='size' style={{width: 30, height: 30, margin: 10, borderRadius: 15}}>
                            </div>
                        </div>
                        <div className={classnames('wrapper', {active: this.state.penSize == 40})}
                             onClick={(function () {this.setState({penSize: 40})}).bind(this)}>
                            <div className='size' style={{width: 40, height: 40, margin: 5, borderRadius: 20}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    penDown: function () {
        this.setState({penDown: true});
    },
    penUp: function () {
        this.setState({penDown: false});
    },
    onMove: function (e) {
        if (this.state.penDown) {
            var x = e.clientX - this.left;
            var y = e.clientY - this.top;
            this.draw(x, y);
        }
    },
    draw: function (x, y) {
        var radius = this.state.penSize/2;
        this.ctx.beginPath();
        this.ctx.arc(x-radius/4, y-radius/4, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.state.penColor;
        this.ctx.fill();
    }
});

module.exports = Cube;