/**
 * Asynchronously loops through an array by leveraging the power of async/await.
 *
 * @param {array} array The array to loop through.
 * @param {function} callback The loop function to call. Takes up to three parameters: `element`, `index`, `array`.
 *
 * @see https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
 */
module.exports = async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
