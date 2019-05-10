// ES6/jQuery Solution!

$(function() {
  iceCreamFlavors.forEach((flavor) => {
    $('ul').append(`<li class="ice-cream-flavor">${flavor}</li>`);
  })
});
