/* Decorator pattern (ES6)
* The decorator kinda work like a extention. It can dynamically attach responsibillities
* to a class depending on the concrete need. */
class Sweat_ES6 {
  constructor() {
    this.flavor = 'Bonbon';
  }

  getFlavor() {
    return this.flavor;
  }
}

class SweatDecorator_ES6 extends Sweat_ES6 {
  constructor(sweat) {
    super();
    this.sweat = sweat;
  }

  getFlavor() {
    return this.sweat.getFlavor();
  }
}

class ChocolateDecorator_ES6 extends SweatDecorator_ES6 {
  constructor(sweat) {
    super(sweat);
  }

  getFlavor() {
    return super.getFlavor() + ' au chocolat';
  }
}

class OrangeDecorator_ES6 extends SweatDecorator_ES6 {
  constructor(sweat) {
    super(sweat);
  }

  getFlavor() {
    return super.getFlavor() + ' à l\'orange';
  }
}
