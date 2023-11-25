class Validator {
  static required(val) {
    if (val && val.length > 0) {
      return false;
    }

    return true;
  }
}

module.exports = Validator;
