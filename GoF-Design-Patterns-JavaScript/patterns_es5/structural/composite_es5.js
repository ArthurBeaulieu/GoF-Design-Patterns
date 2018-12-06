function Component_ES5() {
  this.name = '';
}

Component_ES5.prototype.show = function() {
  console.log(this.name);
}

function Composite_ES5(name) {
  this.children = [];
}

Composite_ES5.prototype = Object.create(Component_ES5.prototype);
Composite_ES5.prototype.addChild = function(component) {
  this.children.push(component);
}

function BodyComponent_ES5() {
  this.name = 'Body';
}

BodyComponent_ES5.prototype = Object.create(Composite_ES5.prototype);
BodyComponent_ES5.prototype.add = function(component) {
  this.addChild(component)
};

function DivComponent_ES5() {
  this.name = 'Div';
}

DivComponent_ES5.prototype = Object.create(Composite_ES5.prototype);
DivComponent_ES5.prototype.add = function(component) {
  this.addChild(component)
};

function ImgComponent_ES5() {
  this.name = 'Body';
}

ImgComponent_ES5.prototype = Object.create(Composite_ES5.prototype);
ImgComponent_ES5.prototype.add = function(component) {
  this.addChild(component)
};
