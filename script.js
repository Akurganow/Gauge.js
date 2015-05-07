Element.prototype.gauge = function (options) {
  var list = document.createElement('ul');
  var initAngle = 90;
  var centerAngle = 270 / 6;
  var itemSkew = initAngle - centerAngle;

  list.className = "gauge-list";

  for(var i=0;i<=6;i++) {
    var listItem = document.createElement('li');
    var listItemInner = document.createElement('div');
    var point = document.createElement('div');
    var itemRotate = (i * centerAngle) - (initAngle / 2) - (centerAngle / 2) - 2;
    var innerRotate = -1 * (centerAngle / 2);
    var itemClassName = options.inside ? 'gauge-list-item is-inner' : 'gauge-list-item'

    point.innerHTML = "<span class='gauge-point-value'>"+i+"</span>"
    point.className = "gauge-point";
    point.style.transform = "rotate("+(-1)*itemRotate+"deg)";

    listItemInner.className= "gauge-list-item-inner";
    listItemInner.appendChild(point);
    listItemInner.style.transform = "rotate("+0+"deg) skew("+(-1)*itemSkew+"deg) scale(1) translate(100%, 50%)";


    listItem.className = itemClassName;
    listItem.appendChild(listItemInner);
    listItem.style.transform = "rotate("+itemRotate+"deg) skew("+itemSkew+"deg)";

    list.appendChild(listItem);
  }

  var pointer = document.createElement('div');
  var pointerRotate = 45 + (45 * options.pointer);
  pointer.className = "gauge-pointer";
  pointer.style.transform = "translate(-50%,0) rotate("+pointerRotate+"deg)";

  this.appendChild(list);
  this.appendChild(pointer);
}

function setPointer(value) {
  var pointer = document.querySelector('.gauge-pointer');
  var pointerRotate = 45 + (45 * value);

  pointer.style.transform = "translate(-50%,0) rotate("+pointerRotate+"deg)";
}