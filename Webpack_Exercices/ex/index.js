const pen = {
  description: 'Blue pen',
  price: 1.10,
  off: 0.05
}

function clone(obj) {
  return { ...obj }
}

const myPen = clone(pen)
myPen.description = 'Black pen'
console.log(myPen)