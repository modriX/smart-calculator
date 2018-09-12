class SmartCalculator {
  constructor(initialValue) {
    this.str = initialValue.toString();
  }

  add(number) {
    this.str += ' + ' + number.toString();
    return this;
  }
  
  subtract(number) {
    this.str += ' - ' + number.toString();
    return this;
  }

  multiply(number) {
    this.str += ' * ' + number.toString();
    return this;
  }

  devide(number) {
    this.str += ' / ' + number.toString();
    return this;
  }

  pow(number) {
    this.str += ' ** ' + number.toString();
    return this;
  }

  toString() {
    return eval(this.str);
  }
}

module.exports = SmartCalculator;
