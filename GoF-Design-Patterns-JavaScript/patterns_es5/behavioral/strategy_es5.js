function ShoppingCart_ES5(discount) {
  this.discount = discount;
  this.amount = 0;
}

ShoppingCart_ES5.prototype.setAmount = function(amount) {
  this.amount = amount;
};

ShoppingCart_ES5.prototype.checkout = function() {
  return this.discount(this.amount);
};

function GuestStrategy_ES5(amount) {
  return amount;
}

function RegularStrategy_ES5(amount) {
  return amount * 0.9;
}

function PremiumStrategy_ES5(amount) {
  return amount * 0.8;
}
