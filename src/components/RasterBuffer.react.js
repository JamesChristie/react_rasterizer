var React = require('react');

var RasterDot = require('./RasterDot.react');

var STYLE_WIDTH = 40;

var RasterBuffer = React.createClass({
  buildDotList: function() {
    var dotList = [];

    // NOTE (james.aaron.christie@gmail.com) This is going to
    // contain some implicit magic to make the visuals make
    // better intuitive sense. The cartesian origin is going
    // to be in the lower-left of the rendered space, but the
    // coordinates supplied to this function will have an
    // origin in the upper left corner. Given that, the y
    // coordinate will be reflected within the positive render
    // space.
    for (dotX=0; dotX<this.props.dotCount; dotX++) {
      for (dotY=0; dotY<this.props.dotCount; dotY++) {
        dotList.push({
          xPos: dotX,
          yPos: this.props.dotCount - dotY - 1
        });
      }
    }

    return dotList;
  },

  getStyle: function() {
    return {
      width: STYLE_WIDTH + 'vw',
      WebkitColumnCount: this.props.dotCount,
      WebkitColumnGap: '0px',
      MoxColumnCount: this.props.dotCount,
      MoxColumnGap: '0px',
      columnCount: this.props.dotCount,
      columnGap: '0px'
    };
  },

  getDotSize: function() {
    return (STYLE_WIDTH / this.props.dotCount);
  },

  render: function() {
    var dotSize = this.getDotSize();

    var renderedDotList = this.buildDotList().map(function(dot, index) {
      return (
        <RasterDot
          dotSize={dotSize}
          dotCount={this.props.dotCount}
          xPos={dot.xPos}
          yPos={dot.yPos}
          key={index} />
      );
    }.bind(this));

    return (
      <div className='raster-container' style={this.getStyle()}>
        {renderedDotList}
      </div>
    );
  }
});

module.exports = RasterBuffer;
