var ShopFacade_ES5 = {
  calc: function(price) {
    price = Discount_ES5(price);
    price = Fees_ES5(price);
    price += Shipping_ES5();
    return price;
  }
};

function Discount_ES5(value) {
  return value * 0.9;
}

function Shipping_ES5() {
  return 5;
}

function Fees_ES5(value) {
  return value * 1.05;
}