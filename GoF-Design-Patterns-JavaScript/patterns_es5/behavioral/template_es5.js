function Tax_ES5() {}
Tax_ES5.prototype.calc = function(value) {
  if (value >= 1000) {  
    value = this.overThousand(value);
  }

  return this.complementaryFee(value);
};
Tax_ES5.prototype.complementaryFee = function(value) {
  return value + 10;
};


function Tax1_ES5() {}
Tax1_ES5.prototype = Object.create(Tax_ES5.prototype);
Tax1_ES5.prototype.overThousand = function(value) {
  return value * 1.1;
};


function Tax2_ES5() {}
Tax2_ES5.prototype = Object.create(Tax_ES5.prototype);
Tax2_ES5.prototype.overThousand = function(value) {
  return value * 1.2;
};
