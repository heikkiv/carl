# carl

Probability density based anomaly detection library for node.js

## API

```javascript
var Carl = require('./lib/carl');
var carl = new Carl(); // defaults to 0 mean, 1 variance
carl.train([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Calculates mean and variance from data 
carl.pdf(3) // Value of the probability density function for given x
```
