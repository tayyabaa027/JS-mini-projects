const user = {
    age:12
}; // New object

Object.defineProperty(user, "name", {
  value: "Tayyaba",
  writable: false,
  enumerable: true,
  configurable: false
});
Object.defineProperty(user,"age",{
    writable:false
});

console.log(Object.getOwnPropertyDescriptor(user,"age"));
age=14;
console.log(user);