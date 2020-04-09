const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return items.reduce(reducer);
  };
  
  toThePowerOf(2, 3); //? 8
  toThePowerOf(3, 3); //? 27
  toThePowerOf(4, 2); //? 16
  toThePowerOf(10, 10); //? 100
  10 ** 10; //? 1.00000000E+100