/* eslint-disable no-unused-vars */
const asyncForEach = require('.');
const array = [1, 2, 3, 4, 5];

const sleep = duration => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
};

// wrap in an async function to wait for the loop to finish
(async () => {
  await asyncForEach(array, async (el) => {
    console.log(`Sleeping for ${el} seconds...`);
    await sleep(el * 1000);
  });
  console.log('Done!');
})();
