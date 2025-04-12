function multiply(...args) {
    return args.reduce((product, num) => product * num, 1);
  }
  
  console.log(multiply(2, 3, 4));
  console.log(multiply(1, 5, 6, 2));