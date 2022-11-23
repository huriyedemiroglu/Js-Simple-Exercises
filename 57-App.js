// const myAsyncFunction = async () => {
//   try {
//     const a = await Promise.resolve(2);
//     const b = await Promise.reject(a * 2);
//     const c = await Promise.resolve(b + 5);
//     return c;
//   } catch (err) {
//     return err;
//   }
// };

// myAsyncFunction().then(console.log);
const callFirstApi = () => {
  return Promise.resolve(2);
};

const callSecondApi = val => {
  return Promise.reject(val * 2);
};

const callThirdApi = val => {
  return Promise.resolve(val * 2);
};

const OuterPromise = new Promise(resolve => {
  return callFirstApi()
    .then(callSecondApi)
    .then(callThirdApi)
    .then(val => {
      return resolve(val);
    })
    .catch(err => {
      return err;
    })
    .then(val => {
      console.log(val);
    });
});