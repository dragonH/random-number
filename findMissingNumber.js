module.exports = (numbers) => {
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i + 1] !== numbers[i] + 1) {
      return numbers[i] + 1;
    }
  }
}