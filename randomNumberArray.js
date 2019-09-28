module.exports = () => {
  return new Promise((resolve, reject) => {
    try {
      const numbers = new Set();
      for (let i = 1; i <= 1000000; i += 1) {
        while (1) {
          const number = Math.ceil(Math.random() * (Math.pow(2, 32) - 1));
          if (!numbers.has(number)) {
            numbers.add(number);
            break;
          }    
        }
      }
      resolve([...numbers]);
    } catch (err) {
      reject(err);
    }
  });
}
