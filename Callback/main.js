// callback là gì
function myFunction (param) {
  // console.log(typeof param)
  if (typeof param === 'function') {
    param(123)
  }
}

function myCallback (value) {
  console.log('im a callback', value)
}
// myCallback(123)
myFunction(myCallback)