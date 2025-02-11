//your JS code here. If required.

const student = {
  name: "John",
};

Object.prototype.getKeys=function(){
	
  return Object.keys(this);
}
// const student2 = { name: "John", age: 25, city: "New York" };

// function getKeys(obj) {
// }

console.log(student.getKeys()); // Output: ["name"]

// Additional tests

