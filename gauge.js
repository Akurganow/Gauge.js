function Gauge(options) {
  this.angle = options.angle || 270;
  this.points = options.points || 7;
  this.isInside = options.inside || false
  this.initAngle = 24 - ((180-this.angle)/2);
  this.centerAngle = this.angle / (points - 1);
  this.pointerInitAngle = (360-this.angle)/2;

  var value = options.value || 0;

  var pointer = document.createElement('div');
  pointer.className = "gauge-pointer";
  pointer.style.transform = "translate(-50%,0) rotate("+this.pointerInitAngle+"deg)";

  var list = document.createElement('ul');
  list.className = "gauge-list";

  if (typeof options.container === 'string') {
    var container = document.querySelector(options.container);
  }
  else {
    var container = options.container;
  }

  Object.defineProperty(this, 'value', {
    set: function(val){
      value = val;

      var pointerRotate = this.pointerInitAngle+(this.centerAngle * value);

      pointer.style.transform = "translate(-50%,0) rotate("+pointerRotate+"deg)";
    },

    get: function(){
      return value;
    }
  });

  for(var i=0; i<points; i++) {
    var listItem = document.createElement('li');
    var listItemWrap = document.createElement('div');
    var listItemInner = document.createElement('div');
    var point = document.createElement('div');
    var itemRotate = (i * this.centerAngle) - (this.initAngle) + 4;
    var itemClassName = this.isInside ? 'gauge-list-item is-inner' : 'gauge-list-item'

    point.innerHTML = "<span class='gauge-point-value'>"+i+"</span>"
    point.className = "gauge-point";
    point.style.transform = "rotate("+((-1)*itemRotate)+"deg)";

    listItemInner.className = "gauge-list-item-inner";
    listItemInner.appendChild(point);
    listItemInner.style.transform = "rotate(-4deg) scale(1) translate(-50%, -50%)";

    listItemWrap.className = "gauge-list-item-wrap"
    listItemWrap.appendChild(listItemInner);

    listItem.className = itemClassName;
    listItem.appendChild(listItemWrap);
    listItem.style.transform = "rotate("+itemRotate+"deg) translate(-50%, -50%)";

    list.appendChild(listItem);
  }

  container.appendChild(list);
  container.appendChild(pointer);

  this.value = value;
}
