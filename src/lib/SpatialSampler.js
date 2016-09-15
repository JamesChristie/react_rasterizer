var UPPER_LIMIT  = 10;
var SAMPLE_RATIO = 0.1;

var GRAPH_FUNCTION = function(xPos) {
  return (Math.sin(xPos) * 5) + 5;
};

var SpatialSampler = {
  // NOTE (james.aaron.christie@gmail.com) This is powerfully slow,
  // but it's a straightforward enough sampling of values to try and
  // brute force detect if the arc of the used function passes through
  // the space bounded for the given x/y positions. It should always
  // produce n+1 samples, where n is the count of segments of the
  // length determind by the ratio of the length of an entire
  // segment to the chosen sample diff ratio.
  arcExistsAt: function(xPos, yPos, segmentCount) {
    var segmentLength = UPPER_LIMIT / segmentCount;
    var sampleDelta   = segmentLength * SAMPLE_RATIO;

    var lowerX = xPos * segmentLength;
    var upperX = lowerX + segmentLength;

    var lowerY = yPos * segmentLength;
    var upperY = lowerY + segmentLength;

    var samples = [];

    for (var samplePos=lowerX; samplePos<=upperX; samplePos+=sampleDelta) {
      samples.push(GRAPH_FUNCTION(samplePos));
    }

    return samples.some(function(resultY) {
      return lowerY <= resultY && resultY <= upperY;
    });
  }
};

module.exports = SpatialSampler;
