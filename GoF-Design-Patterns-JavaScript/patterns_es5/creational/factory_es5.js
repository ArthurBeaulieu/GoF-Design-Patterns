/* Factory pattern (ES5)
* The factory pattern allow to build a specific object with a given set of options,
* for objects that are close to each other in their composition. */
function Factory_ES5(component) {
  if (component === 'motherboard') {
    return new ComputerComponent_ES5(component, 150);
  } else if (component === 'gpu') {
    return new ComputerComponent_ES5(component, 300);
  } else if (component === '4kscreen') {
    return new ComputerComponent_ES5(component, 600);
  }
}

function ComputerComponent_ES5(component, price) {
  this.component = component;
  this.price = price;
}
