const should = require('should');
const randNumber = require('../randomNumberArray');
const mySort = require('../sortNumbers');
const findMissingNumber = require('../findMissingNumber');

describe('Random number test', () => {
  let randNumbersArray = [];
  let sortedRandNumbersArray = [];
  let missingNumber = 0;
  it('Should return an array with length 1000000', async () => {
    randNumbersArray = await randNumber();
    return should(randNumbersArray.length).eql(1000000);
  });
  it('Should sort array in 1000 ms', () => {
    const startTime = Date.now();
    sortedRandNumbersArray = mySort(randNumbersArray);
    return should(Date.now() - startTime).lessThan(1000);
  });
  for (let i = 1; i <= 10; i += 1) {
    const positions = [Math.ceil(Math.random() * 1000000), Math.ceil(Math.random() * 1000000)]
      .sort((a, b) => a - b);
    it(`${positions[0]}th element should less than ${positions[1]}th element in sortedRandNumbersArray`, () => {
      return should(sortedRandNumbersArray[positions[0]]).lessThan(sortedRandNumbersArray[positions[1]]);
    });
  }
  for (let i = 1; i <= 10; i += 1) {
    const positions = [Math.ceil(Math.random() * 1000000), Math.ceil(Math.random() * 1000000)]
      .sort((a, b) => b - a);
    it(`${positions[0]}th element should greater than ${positions[1]}th element in sortedRandNumbersArray`, () => {
      return should(sortedRandNumbersArray[positions[0]]).greaterThan(sortedRandNumbersArray[positions[1]]);
    });
  }
  it('Missing number should not exist in array', () => {
    missingNumber = findMissingNumber(sortedRandNumbersArray);
    return should(sortedRandNumbersArray.indexOf(missingNumber)).equal(-1)
  });
});