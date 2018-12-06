function Sum_ES5(left, right) {
  this.left = left;
  this.right = right;
}

Sum_ES5.prototype.interpret = function() {
  return this.left.interpret() + this.right.interpret();
}

function Substract_ES5(left, right) {  
  this.left = left;
  this.right = right;
}

Substract_ES5.prototype.interpret = function() {
  return this.left.interpret() - this.right.interpret();
}

function Num_ES5(val) {  
  this.val = val;
}

Num_ES5.prototype.interpret = function() {
  return this.val;
}
