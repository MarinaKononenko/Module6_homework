function printNumbers(num1, num2) {
    let currentNum = num1;
    const intervalId = setInterval(() => {
      console.log(currentNum);
      currentNum++;
      if (currentNum > num2) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  printNumbers(5, 15);