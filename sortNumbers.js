module.exports = function mySort(numbers) {
  if (numbers.length <= 1) {
    return numbers;
  }
  const lessArr = [];
  const greaterArr = [];
  const target = numbers[numbers.length - 1];
  for (let i = 0; i < numbers.length - 1; ++i) {
    const num = numbers[i];
    num < target
      ? lessArr.push(num)
      :greaterArr.push(num);;
  }
  return [...mySort(lessArr), target, ...mySort(greaterArr)];
}