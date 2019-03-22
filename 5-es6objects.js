// object property shorthand

// const name = 'Myron'
// const userAge = 32

// const user = {
//   name,
//   age: userAge,
//   location: 'Wichita'
// }

// console.log(user)

// object destructuring

const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const { label: productLabel, stock = 100 } = product
// console.log(stock)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)
