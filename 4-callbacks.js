const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my error', undefined)
    callback(undefined, [1, 2, 4])
  }, 2000)
}

doWorkCallback((err, res) => {
  if (err) {
    return console.log(err)
  }

  console.log(res)
})

// setTimeout(() => {
//   console.log('two seconds are up')
// }, 2000)

// const names = ['Myron', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//   return name.length <= 4
// })

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     }

//     callback(data)
//   }, 2000)
// }

// geocode('philadelphia', (data) => {
//   console.log(data)
// })

// const add = (num1, num2, callback) => {
//   setTimeout(() => {
//     callback(num1 + num2)
//   }, 2000)
// }

// add(1, 4, (sum) => {
//   console.log(sum) // Should print: 5
// })
