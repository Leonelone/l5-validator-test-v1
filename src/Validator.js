import NumberValidator from "./NumberSchema.js";
import ArrayValidator from "./ArraySchema.js";
import ObjectValidator from "./ObjectSchema.js";

export default class Validator {
  number() {
    return new NumberValidator();
  }

  array() {
    return new ArrayValidator();
  }

  object() {
    return new ObjectValidator();
  }
};
