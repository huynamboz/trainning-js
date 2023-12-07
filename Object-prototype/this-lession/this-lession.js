const iphone7 = {
  // properties - thuộc tính
  name: 'Iphone 7',
  color: 'black',
  weight: 0.5,
  // methods - phương thức
  takePhoto: function() {
    console.log("take photo", this);
  },

  call() {
    console.log("call", this);
  }
}

function Example () {
  console.log(this);
}
Example();
console.log(iphone7.takePhoto());















function Car(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  // this.run = function() {
  //   console.log("run", this);
  // }
}

const honda = new Car('Honda', 'red', 100);
const bmw = new Car('BMW', 'black', 200);
// console.log(honda.run());

// example with dom button
// console.dir -> to print all properties and methods of an object






