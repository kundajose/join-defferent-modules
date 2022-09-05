import Animals from "./extend1.js";
// const Animals = require("./extend1");
export default class Domestic extends Animals {
  #goat;
  constructor(name, dendo, goat) {
    super(name, dendo);
    this.#goat = goat;
  }
  // get name() {
  //   return this.#goat;
  // }
  describe() {
    super.describe();
    console.log(` ${this.#goat} bark`);
  }
}
