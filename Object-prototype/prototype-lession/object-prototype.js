/*
  Object prototype - basic

  1. Prototype là gì?
*/

//Tạo ra 1 mẫu khởi tạo, cũng là tạo ra 1 prototype object
function infPerson(_age, _name, _address){ //ham tao, object constructor, function constructor 
  this.age = _age;
  this.name = _name;
  this.address = _address;
}

// infPerson.class = 'abc'
//Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
// infPerson.prototype.height = 0;

//Tạo ra 1 instance của Person
//Có cả 3 thuộc tính của mẫu khởi tạo Person
var person = new infPerson(10, "Khoa", "Da Nang");
var person2 = new infPerson(20, "Khoa", "Da Nang");

console.log(person);
console.log(person2);

// nếu các bạn muốn infPerson.prototype.height nhận được các giá trị bạn truyền vào khi khởi tạo các đối
// tượng thì phải dùng từ khóa this này nhá, còn các bạn thêm như này thì nó sẽ không nhậ được

//Xem đối tượng prototype của instance vừa tạo
person.__proto__;


const obj = {
  nameVal: 'Khoa',
  age: 20,
  get name() {
    return this.nameVal;
  },
  set name(value) {
    this.nameVal = value;
  }
}