var React = require('react');

var DpiButtons = React.createClass({
  render: function() {
    return (
      <div className='dpi-buttons'>
        <div className='dpi-button dpi-down' onClick={this.props.onClickDown}>
          Reduce DPI
        </div>
        <div className='dpi-button dpi-up' onClick={this.props.onClickUp}>
          Increase DPI
        </div>
      </div>
    );
  }
});

module.exports = DpiButtons;
