const calculator = {
  add: function(l, r) {
    console.log(l + r);
  },
  minus: function(l, r) {
    console.log(l - r);
  },
  divide: function(l, r) {
    console.log(l / r);
  },
  power: function(l, r) {
    console.log(l ** r);
  }
}

calculator.add(1, 2);
calculator.minus(1, 2);
calculator.divide(1, 2);
calculator.power(3, 2);
