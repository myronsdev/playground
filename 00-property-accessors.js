const pet = {
  name: '',
  age: null,
  goodBoy: null
}

const fields = ['name', 'age', 'goodBoy']

const data = {
  name: 'Riley Boy',
  age: 8,
  goodBoy: true
}

fields.forEach((field) => (pet[field] = data[field]))

console.log(pet)
