function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i] === 0) {
        zeroCount++;
      } else if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  console.log(`Количество чётных элементов: ${evenCount}`);
  console.log(`Количество нечётных элементов: ${oddCount}`);
  console.log(`Количество нулевых элементов: ${zeroCount}`);
}

const array = [1, 2, 3, 0, null, 'hello', undefined, 4];
countEvenOdd(array);