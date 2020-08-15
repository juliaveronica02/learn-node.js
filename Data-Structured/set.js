// declare id variable.
const ids = new Set();

ids.add("abc");
ids.add(1);
ids.add(1);

for (const elements of ids) {
    console.log(elements);
    // result we only see one one not who ones.
    // when run we only see: abc, 1.
    // we don't see a second one.
}
console.log(ids[1]); // result is undefined because that's not a syntax that works.
// If we want to call the value we using has because we have to think about sets and we only want to know this set have a value or not.
// Example bellow:
console.log(ids.has("abc")); // The output will return "true" on terminal.

// Bellow is the code to delete set value from ids variables.
ids.delete("abc");
console.log("delete abc",ids); // Result: delete abc Set { 1 } (the abc value now already missing).

// set is a great choice if we need lists of data but don't want duplicate values.

// run: node set.js.