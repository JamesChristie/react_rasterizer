var React = require('react');

var SpatialSampler = require('../lib/SpatialSampler');

FILLED_STYLE = 'filled';
EMPTY_STYLE  = 'empty';

var RasterDot = React.createClass({
  getDotColor: function() {
    var isFilled = SpatialSampler.arcExistsAt(
      this.props.xPos, this.props.yPos, this.props.dotCount
    );

    return isFilled ? FILLED_STYLE : EMPTY_STYLE;
  },

  getStyle: function() {
    return {
      height: this.props.dotSize + 'vw',
      width:  this.props.dotSize + 'vw'
    };
  },

  render: function() {
    var dotClassString = 'raster-dot ' + this.getDotColor();

    return (
      <div
        className={dotClassString}
        style={this.getStyle()} />
    );
  }
});

module.exports = RasterDot;
