function setPointer(value, pointer) {
  var list = document.querySelector('.gauge-list');
  var pointer = pointer || document.querySelector('.gauge-pointer');

  if (!!list && !!pointer) {
    window.clearTimeout(window.pointerTimeout);

    var value = value || 4;
    var points = list.dataset.points || document.querySelectorAll('.gauge-list-item').length;
    var angle = list.dataset.angle;
    var initAngle = (360-angle)/2;
    var centerAngle = angle / (points - 1);
    var pointerRotate = initAngle+(centerAngle * value);

    pointer.style.transform = "translate(-50%,0) rotate("+pointerRotate+"deg)";
  }
  else {
    window.pointerTimeout = setTimeout(function(){setPointer(pointer,value)},50);
  }
}

setPointer();

Element.prototype.gauge = function (options) {
  //Defaults
  var points = options.points || 7
  var isInside = options.inside || false
  var angle = options.angle || 270

  var list = document.createElement('ul');
  var initAngle = 24 - ((180-angle)/2);
  var centerAngle = angle / (points - 1);

  list.className = "gauge-list";
  list.dataset.angle = angle;
  list.dataset.points = points;

  for(var i=0; i<points; i++) {
    var listItem = document.createElement('li');
    var listItemWrap = document.createElement('div');
    var listItemInner = document.createElement('div');
    var point = document.createElement('div');
    var itemRotate = (i * centerAngle) - (initAngle) + 4;
    var itemClassName = isInside ? 'gauge-list-item is-inner' : 'gauge-list-item'

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

  var pointerValue = options.pointer || 0
  var pointer = document.createElement('div');
  pointer.className = "gauge-pointer";

  setPointer(pointer,pointerValue);

  this.appendChild(list);
  this.appendChild(pointer);
}

