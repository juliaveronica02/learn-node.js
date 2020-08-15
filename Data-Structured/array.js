const names = ["Max", "Bob", "Gary", "Julie", "Max"];
// Index starts at zero(0).
console.log("names: ", names[1]);
console.log(names.length); // output: 5 because all list inside array have 5 names.
// output: names : Bob.

// 2. Example to print all list inside array.
for (const varNames of names) {
    console.log("variable_names: ", varNames);
}

// run: ctrl+ ~ (visual studio terminal shortcut), cd Data-Structured, node array.js.