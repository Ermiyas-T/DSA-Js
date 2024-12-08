// let person = { name: "ermiyas tilahun", age: 21, isEducated: true };
//shallow and deep copy
// *shallow copy : the two or more objects share the same memory reference
// let person2 = person; // this two variables have the same reference
// person2.age = 22;
// console.log(person);
// * Deep copy : in contrast of shallow copy there will be two different objects
// having different reference and memory
// let person3 = Object.assign({}, person);
// person3.age = 23;
// let dog = { name: "jack", isAngry: false, hasFur: false };
// console.log(person3);
// let person4 = Object.assign({}, dog);
// console.log(person4);
// let person5 = Object.assign({}, person);
// person.age = 55;
// console.log(person5);

// ******************   Object methods
// ****** freeze and seal
// ### freeze : make the object unable to update(add,update,delete) key values or make any change
// ### seal : makes the object unable to add , delete but the object can update the existing properties

// Object.freeze(person);
// Object.seal(person);
// console.log(Object.isFrozen(person));
// person.newO = "sdflkjsafl";
// delete person.name;
// person.age = 26;
// delete person.isEducated;
// console.log();

// * We can do shallow copy using assign method for nested objects
// * we can also( cloneDeep() ) on lodash libraray to bring the same effect
// but it's external library
// * we can use

/* 



**** How to check if an object has a specific property?
**** How to copy the properties of an object to another?
**** Explain the difference between Object.freeze() and Object.seal()
**** How to iterate through the properties of an object?
**** How to create a deep copy of an object?
**** How to check if two objects are equal?
**** How to dynamically access object properties?
**** How to remove a property from an object?
**** Explain the concept of prototypes and inheritance in Javascript objects.
**** find count of all players.



*/
//1 How to check if an object has a specific property?
// person = { name: "Ermiyas Tilahun", age: 30, address: "adama" };
// console.log(Object.values(person).includes(30));
// console.log(Object.keys(person).includes("name"));

//2 How to copy the properties of an object to another?
// there are two ways  :  1. shallow copy(one reference(memory))  2. deep copy(there are two memeory for the two objects)
// shallow copy
// let cat1 = { category: "cat", name: "kitty", age: 2, color: "black" };
// let kitty2 = kitty;
// kitty2.name = "ky";
// console.log(kitty); // since they share the same reference any update on the either of them will impact both
// kitty2.name = "ky";
// console.log(kitty2);
// =-----------------------
// deep copy
// let cat2 = { category: "cat", name: "kiku", age: 3, color: "white" };
// let cat3 = Object.assign({}, cat1);
// cat3.name = "other";
// console.log(`cat1 : ${cat1}`);
// console.log(`cat2 : ${cat2}`);
// console.log(`cat3 : ${cat3}`);

// 3 Explain the difference between Object.freeze() and Object.seal()
//--> Object.freeze() : make the object unable to add, update, delete any propoerty
//--> where as Object.seal() : allow only updation of existing property nothing else

// 4 How to iterate through the properties of an object?
//   --* Method 1: using for in loop
/**
 let person = { name: "ermiyas", age: 22, school: "WKU" };
for (prop in person) {
  console.log(`${prop} : ${person[prop]}`);
} */
// --* Method 2 : using forEach method
// to use this method the object should become array or like so
// Object.keys(person).forEach((key) => {
//   console.log(person[key]);
// Object.entries(person).forEach((prop) => {
//   console.log(prop[0], prop[1]);
// });

// console.log(typeof person);
// 5 How to create a deep copy of an object?person2 = new person();
// let person2 = Object.assign({}, person);
// console.log(Object.entries(person) === Object.entries(person2));
// 6 How to check if two objects are equal?
//
// let person = { name: "ermi", age: 21, address: "Adama" };
// let person2 = Object.assign({}, person);
// let person3 = { name: "ermiyas" };
// console.log(Object.is(person, person2));

// Object.is checks for the same value of those share the same memory

//Question 1 : find the all player count    !!!!!!! unsolved
// let players = {};
/**
 *
 * @param {Object} data
 * @returns {Object}
 */
// const countPlayers = (data) => {
//   if (data === null) {
//     return {};
//   } else {
//     for (players in data.name) {
//       players;
//     }
//   }
// };
// const data = {
//   id: 1,
//   name: ["P1", "P4"],
//   next: {
//     id: 2,
//     name: ["P3"],
//     next: {
//       id: 3,
//       name: ["P3", "P4", "P5"],
//       next: {
//         id: 4,
//         name: ["P1", "P2", "P4"],
//         next: {
//           id: 5,
//           name: ["P2", "P3", "P5"],
//           next: null,
//         },
//       },
//     },
//   },
// };
// let playersCount = countPlayers(data);
// console.log(playersCount)
