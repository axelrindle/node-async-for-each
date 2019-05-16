# node-async-for-each
> Asynchronous for/each loops with async/await in Node.JS

## Usage
```js
const asyncForEach = require('@axelrindle/async-for-each');
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
```

## Credits
Credit goes to [Sebastien Chopin](https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404) for providing an excellent tutorial.

## License
[MIT](LICENSE)
