const randNumber = require('./randomNumberArray');
const sortNumbers = require('./sortNumbers');
const findMissingNumber = require('./findMissingNumber');

(async () => {
  const numbers = await randNumber();
  console.log(`Create an random array with length ${numbers.length} `);
  const nowTime = Date.now();
  const sortedNumber = sortNumbers(numbers);
  console.log(`sort in ${Date.now() - nowTime} ms`);
  const missingNumber = findMissingNumber(sortedNumber);
  console.log(`Missing number is ${missingNumber}`);
})()