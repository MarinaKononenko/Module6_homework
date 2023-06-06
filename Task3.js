function getSumFunc(num1) {
    return function(num2) {
      return num1 + num2;
    }
  }
  
  const sum = getSumFunc(5); // создаем функцию, которая будет складывать 5 с другим числом
  console.log(sum(3)); // 8
  console.log(sum(7)); // 12