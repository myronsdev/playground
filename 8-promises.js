const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([2, 3, 5])
    reject('Things went wrong')
  }, 2000)
})

doWorkPromise
  .then((res) => {
    console.log('Success', res)
  })
  .catch((err) => {
    console.log('Error', err)
  })
