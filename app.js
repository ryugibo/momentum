const calculator = {
  plus: function(l, r) {
    return l + r;
  },
  minus: function(l, r) {
    return l - r;
  },
  times: function(l, r) {
    return l * r;
  },
  divide: function(l, r) {
    return l / r;
  },
  power: function(l, r) {
    return l ** r;
  }
}

const plusResult = calculator.plus(1, 2);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(4, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
