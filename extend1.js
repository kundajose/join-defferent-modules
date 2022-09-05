export default class Animals {
  constructor(name, dendo) {
    this._dendo = dendo;
    this._name = name;
  }
  get name() {
    return this._name;
    this._dendo = dendo;
  }
  describe() {
    console.log(` ${this._name} and ${this._dendo} make sounds`);
  }
}
