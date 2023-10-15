import NumberValidator from './NumberSchema.js';
import ArrayValidator from './ArraySchema.js';
import ObjectValidator from './ObjectSchema.js';

export default class Validator {
  static number() {
    return new NumberValidator();
  }

  static array() {
    return new ArrayValidator();
  }

  static object() {
    return new ObjectValidator();
  }
}
