const power = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
  console.log(power(2, 4)); // 16
  console.log(power(3, 3)); // 27
  console.log(power(5, 0)); // 1