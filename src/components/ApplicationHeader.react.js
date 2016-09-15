var React = require('react');

var ApplicationHeader = React.createClass({
  render: function() {
    return (
      <div className='application-header'>
        <h1>React Rasterization Example</h1>
        <h2>
          Dot Count: {Math.pow(this.props.dotCount, 2)}
          &nbsp;
          (Limit {Math.pow(this.props.dotLimit, 2)})
        </h2>
      </div>
    );
  }
});

module.exports = ApplicationHeader;
