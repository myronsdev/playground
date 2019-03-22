// const square = function(x) {
//   return x * x
// }

// const square = (x) => {
//   return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

const event = {
  name: 'Birthday Party',
  guessList: ['Myron', 'Andrew', 'Mike'],
  printGuestList() {
    console.log(`Guess list for ` + this.name)
    this.guessList.forEach((guest) => {
      console.log(guest + ` is attending ` + this.name)
    })
  }
}

event.printGuestList()
