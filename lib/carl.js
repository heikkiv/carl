var gauss = require('gauss');
var gaussian = require('gaussian');

var epsilon = 0.05;

var Carl = module.exports = function(mean, variance, epsilon) {
  this.mean = mean || 0;
  this.variance = variance || 1;
  this.distribution = gaussian(this.mean, this.variance);
  this.epsilon = epsilon;
};

Carl.prototype.train = function(data, callback) {
  var numbers = new gauss.Vector(data);
  var me = this;
  numbers.mean(function(mean) {
    me.mean = mean;
    numbers.variance(function(variance) {
      me.variance = variance;
    });
  });
};

Carl.prototype.pdf = function(x) {
  var z = (x - this.mean) / Math.sqrt(this.variance);
  return this.distribution.pdf(x);
};

Carl.prototype.isSignificant = function(x) {
  var p = this.pdf(x);
  return p > epsilon;
};
