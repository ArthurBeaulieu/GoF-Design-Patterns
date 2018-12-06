/* Factory pattern (ES6)
* The factory pattern allow to build a specific object with a given set of options,
* for objects that are close to each other in their composition. */
class Factory_ES6 {
  create(component) {
    if (component === 'motherboard') {
      return new ComputerComponent_ES6(component, 150);
    } else if (component === 'gpu') {
      return new ComputerComponent_ES6(component, 300);
    } else if (component === '4kscreen') {
      return new ComputerComponent_ES6(component, 600);
    }
  }
}

class ComputerComponent_ES6 {
  constructor(component, price) {
    this.component = component;
    this.price = price;
  }
}
