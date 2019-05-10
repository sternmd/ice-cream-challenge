// jQuery Solution

$(function() {
  $('.ice-cream-list').each(function() {
    for (var i=0; i < iceCreamFlavors.length; i++) {
      $(this).append("<li class='ice-cream-flavor'>" + iceCreamFlavors[i]+ "</li>");
    }
  })
});
