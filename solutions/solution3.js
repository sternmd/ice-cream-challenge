// Vanilla JS Solution

$(function() {
  var list = document.querySelector('.ice-cream-list');

  for(var i=0; i < iceCreamFlavors.length; i++){
    var item = document.createElement('li');
    item.className = 'ice-cream-flavor';
    item.innerHTML = iceCreamFlavors[i];
    list.appendChild(item);
  }
});
