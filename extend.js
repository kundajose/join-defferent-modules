import Animals from "./extend1.js";
import Domestic from "./extend2.js";
import Developer from "./extend3.js";

// const Animals = require("./extend1");
// const Domestic = require("./extend2");
// const Developer = require("./extend3");

const chris = new Developer("Chris", "Coyier");
// chris.Developer();
console.log(chris);
let fail = new Animals("cow", "dendoo");
// fail.Animals();
console.log(fail.name);
let dog = new Domestic("cat", "goat");
// dog.Domestic();
console.log(dog.name);
console.log(dog.describe());
console.log(fail.describe());
