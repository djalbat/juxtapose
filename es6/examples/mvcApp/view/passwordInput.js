'use strict';

const easy = require('easy');

const { InputElement } = easy;

class PasswordInput extends InputElement {
  getPassword() {
    const value = this.getValue(),
          password = value; ///

    return password;
  }

  clearPassword() {
    const password = '',
          value = password; ///

    this.setValue(value);
  }

  parentContext() {
	  const getPassword = this.getPassword.bind(this),
				  clearPassword = this.clearPassword.bind(this);

    return ({
      getPassword,
      clearPassword
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(PasswordInput, properties); }
}

Object.assign(PasswordInput, {
  tagName: 'input',
  defaultProperties: {
    type: 'password'
  }
});

module.exports = PasswordInput;
