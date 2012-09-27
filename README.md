# carl

Probability density based anomaly detection library for node.js

## API

```javascript
var Carl = require('./lib/carl');
var carl = new Carl(); // defaults to 0 mean, 1 variance
carl.train([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Calculates mean and variance from data 
var p = carl.pdf(3); // Value of the probability density function for given x
var ok = carl.isAnomalous(0.5); // Anomaly testing (returns boolean)
```

## License

Licensed under MIT License, Copyright Heikki Verta 2012
