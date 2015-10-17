var React = require('react/addons');

var Select = React.createClass({
    render: function() {
        var onSelect = this.props.onSelect;
        return (
            <div>
                <div>
                    <img style={{display: 'block', width: 400, margin: '20px auto'}} src='/img/sklejarty.png' alt="Sklejarty" />
                </div>
                <div className='select'>
                    <div onClick={function () { onSelect('/img/kufel-cube.png'); }}>
                        <img src="/img/kufel.png" alt="Kufel" />
                    </div>
                    <div onClick={function () { onSelect('/img/swiatowid-cube.png'); }}>
                        <img src="/img/swiatowid.png" alt="Światowid" />
                    </div>
                    <div onClick={function () { onSelect('/img/woz-cube.png'); }}>
                        <img src="/img/woz.png" alt="Wóz" />
                    </div>
                    <div onClick={function () { onSelect('/img/zegar-cube.png'); }}>
                        <img src="/img/zegar.png" alt="Zegar" />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Select;