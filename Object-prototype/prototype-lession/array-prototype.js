var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

var course = courses.map(function(course) {
    return `<h2>${course}</h2>`;
});

// courses.map2():
// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// });





Array.prototype.map2 = function(callback) {
  var arrayLength = this.length;
  var output = [];
  for(var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
}