var React = require('react');

var ApplicationHeader = require('./ApplicationHeader.react');
var RasterBuffer      = require('./RasterBuffer.react');
var DpiButtons        = require('./DpiButtons.react');

var DEFAULT_DOT_COUNT = 1;
var MAX_DOT_COUNT     = 45;

var ApplicationContainer = React.createClass({
  getInitialState: function() {
    return { dotCount: DEFAULT_DOT_COUNT };
  },

  increaseDots: function() {
    var requestedSize = this.state.dotCount + 1;

    if (requestedSize <= MAX_DOT_COUNT) {
      this.setState({ dotCount: requestedSize });
    }
  },

  decreaseDots: function() {
    var requestedSize = this.state.dotCount - 1;

    if (requestedSize > 0) {
      this.setState({ dotCount: requestedSize });
    }
  },

  render: function() {
    return (
      <div className='react-raster-container'>
        <ApplicationHeader
          dotCount={this.state.dotCount}
          dotLimit={MAX_DOT_COUNT} />
        <DpiButtons
          onClickUp={this.increaseDots}
          onClickDown={this.decreaseDots} />
        <RasterBuffer dotCount={this.state.dotCount} />
      </div>
    );
  }
});

module.exports = ApplicationContainer;
