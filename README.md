# Gauge.js

[Demo](http://akurganow.github.io/Gauge.js/)

### Usage
```javascript
var container = document.querySelector('#some-container');

var options = {
    container: container, //or just '#some-container'
    angle: 270,
    inside: false,
    value: 4,
    points: 7
}

gauge = new Gauge(options);

//Now you can set or get value
console.log(gauge.value) //4

gauge.value = 6;
console.log(gauge.value) //6
```


### Known problems
- Look incorrect if display less than 4 points
- Look incorrect if angle more than 290

### Development
- Clone repository
- Run `npm install`
- Run `gulp`
- Open folder in your favorite editor