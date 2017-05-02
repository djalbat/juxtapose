'use strict';

const easy = require('easy');

const controller = require('../controller'),
      PasswordInput = require('./passwordInput'),
      ValidationError = require('./validationError');

const { Element, Button } = easy;

class PasswordForm extends Element {
  validateAndSubmitForm() {
    const passwordValid = this.validateForm();

    if (!passwordValid) {
      this.showValidationError('The password is invalid');
    } else {
      this.submitForm();
    }
  }

  validateForm() {
    const password = this.getPassword(),
          passwordValid = isPasswordValid(password);

    return passwordValid;
  }

  submitForm() {
    const password = this.getPassword();

    controller.setPassword(password);

    this.clearPassword();
  }

  parentContext() {
    this.assignContext();
  }

  childElements() {
    return([

      <PasswordInput />,
      <ValidationError/>,
      <Button className="submit"
              onClick={() => {
                const preventDefault = true;

                this.validateAndSubmitForm();

                return preventDefault;
              }}
      >
      Submit
      </Button>

    ]);
  }

  static fromProperties(properties) {
    return Element.fromProperties(PasswordForm, properties);
  }
}

Object.assign(PasswordForm, {
  tagName: 'form',
  defaultProperties: {
    className: 'password'
  }
});

module.exports = PasswordForm;

function isPasswordValid(password) {
  const passwordValid = (password !== '');  ///

  return passwordValid;
}
