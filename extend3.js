import Animals from "./extend1.js";
// const Animals = require("./extend1");

export default class Developer extends Animals {
  code(thing) {
    console.log(`${this.name} coded ${thing}`);
  }
}
