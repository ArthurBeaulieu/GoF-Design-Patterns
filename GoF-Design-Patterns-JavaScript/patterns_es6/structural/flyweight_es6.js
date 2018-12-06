class Color_ES6 {
  constructor(name){
    this.name = name
  }
}

class ColorFactory_ES6 {
  constructor() {
    this.colors = {};
  }
  
  create(name) {
    const color = this.colors[name];
    if (color) {
      return color;
    }
      
    this.colors[name] = new Color_ES6(name);
    return this.colors[name];
  }

  display() {
    console.log(this.colors);
  }
}
