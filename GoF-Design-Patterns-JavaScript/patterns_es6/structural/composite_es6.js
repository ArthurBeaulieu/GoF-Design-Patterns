class Component_ES6 {
  constructor() {
    this.name = '';
  }

  show() {
    console.log(this.name);
  }
}

class Composite_ES6 extends Component_ES6 {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  addChild(component) {
    this.children.push(component);
  }

  show() {
    super.show();  
  }  
}

class BodyComponent_ES6 extends Composite_ES6 {
  constructor() {
    super('Body');  
  }

  add(component) {
    super.addChild(component);
  }
}

class DivComponent_ES6 extends Composite_ES6 {
  constructor() {
    super('Div');  
  }

  add(component) {
    super.addChild(component);
  }
}

class ImgComponent_ES6 extends Composite_ES6 {
  constructor() {
    super('Img');  
  }

  add(component) {
    super.addChild(component);
  }
}
