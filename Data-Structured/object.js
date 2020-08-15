// 1. Example.
// const person = {firstName: "Julia", age: 19, hobbies: ["coding", "reading books"]};
// const person = {firstName: "Julia", age: 19, hobbies: ["coding", "reading books"],[]:31}; // it will show syntax error when run.
// 2. Example.
const person = {firstName: "Julia", age: 19, hobbies: ["coding", "reading books"], age: 20, great() {console.log("Hi, I am " + this.firstName);}};
// great us a shorthand.
console.log(person[0]); // result: undefined.
// 1. Example.
console.log(person["firstName"]); // result: Julia.
// 2. Example.
console.log(person.firstName); // result: Julia.

// 3. Example (uncomment bellow code).
// person.lastName = "Veronica";
// console.log(person);

// output:
// {
//     firstName: 'Julia',
//     age: 19,
//     hobbies: [ 'coding', 'reading books' ],
//     lastName: 'Veronica'
//   }

delete person.age;
console.log(person);
// result: { firstName: 'Julia', hobbies: [ 'coding', 'reading books' ] }

person.great(); // result: Hi, I am Julia.