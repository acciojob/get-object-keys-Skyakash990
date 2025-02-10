//your JS code here. If required.

const student = {
  name: "John",
};

function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys(student)); // Output: ["name"]

// Additional tests
const student2 = { name: "John", age: 25, city: "New York" };
console.log(getKeys(student2)); // Output: ["name", "age", "city"]

