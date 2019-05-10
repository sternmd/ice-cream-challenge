// Bonus functional ES6 Solution

let iceCream = document.querySelector('.ice-cream-list');

const flavors = (arr) => {
  let list = '';

  arr.forEach((flavor) => {
    list += `<li class="ice-cream-flavor">${flavor}</li>`;
    iceCream.innerHTML = (list);
  })
}

if (iceCreamFlavors) {
  flavors(iceCreamFlavors);
};
