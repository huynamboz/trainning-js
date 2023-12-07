function test() {
  console.log(1);
  // setTimeout(function() {
  //   console.log(2);
  // }, 1000);
  console.log(3);
}





//callback hell
setTimeout(function() {
  console.log('1'); //viec 1
    setTimeout(function() {
      console.log('2'); //viec 2
  }, 1000);
}, 1000);