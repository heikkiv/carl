var Carl = require('../lib/carl');
var should = require('should');

describe('Carl', function() {

  it('should initialize', function() {
    var carl = new Carl();
    should.exist(carl);
  });

  it('should default to 0 mean and 1 variance', function() {
    var carl = new Carl();
    carl.mean.should.equal(0);
    carl.variance.should.equal(1);
    round(carl.pdf(1)).should.eql(0.242);
  });
  
  it('should use mean and variance from constructor parameters', function() {
    var carl = new Carl(7.11852, 6.237794);
    round(carl.pdf(7.526316)).should.eql(0.158);
  });
  
  it('should calculate mean and variance from given data', function() {
    var carl = new Carl();
    carl.train([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    round(carl.pdf(3)).should.eql(0.004);
  });

});

function round(x) {
  return Math.round(x*1000)/1000;
}
