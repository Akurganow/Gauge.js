# Gauge.js

[Demo](http://akurganow.github.io/Gauge.js/)

### Usage
```javascript
var options = {
    angle: 270,
    inside: false,
    pointer: 0,
    points: 7
}

var container = document.querySelector('#some-container');

container.gauge(options);
```


### Known problems
- Look incorrect if display less than 4 points
- Look incorrect if angle more than 290

### Development
- Clone repository
- Run `npm install`
- Run `gulp`
- Open folder in your favorite editor