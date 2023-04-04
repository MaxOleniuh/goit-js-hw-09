function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});
promise
  .then(data => {
    console.log(promise);
    console.log('Success');
  })
  .then(result => {
    console.log('Result');
  })
  .catch(err => {
    console.log(promise);
    console.log('Error');
  })
  .finally(end => {
    console.log('The end!');
    // preloader stop
  });
