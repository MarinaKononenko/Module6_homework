function isPrime(num) {
    if (num > 1000) {
      console.log("Данные некорректны");
    } else if (num === 0 || num === 1) {
      console.log("Число не является простым");
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          console.log("Число не является простым");
          return;
        }
      }
      console.log("Число является простым");
    }
  }
  
  isPrime(17); // Число является простым
  isPrime(1001); // Данные некорректны
  isPrime(0); // Число не является простым
  isPrime(1); // Число не является простым
  isPrime(20); // Число не является простым