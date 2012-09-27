var gauss = require('gauss');
var gaussian = require('gaussian');

var Carl = module.exports = function(mean, variance) {
  this.mean = mean || 0;
  this.variance = variance || 1;
  this.distribution = gaussian(this.mean, this.variance);
};

Carl.prototype.train = function(data, callback) {
  var numbers = new gauss.Vector(data);
  var me = this;
  numbers.mean(function(mean) {
    me.mean = mean;
    numbers.variance(function(variance) {
      me.variance = variance;
      me.distribution = gaussian(mean, variance);
    });
  });
};

Carl.prototype.pdf = function(x) {
  return this.distribution.pdf(x);
};
