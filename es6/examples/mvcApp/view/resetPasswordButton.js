'use strict';

const easy = require('easy');

const controller = require('../controller');

const { Element } = easy;

class ResetPasswordButton extends Element {
  clickHandler() {
    controller.resetPassword();
  }

  childElements() {
    return 'Reset password';
  }

  initialise() {
    this.onClick(this.clickHandler);
  }

  static fromProperties(properties) {
    const resetPasswordButton = Element.fromProperties(ResetPasswordButton, properties);

    resetPasswordButton.initialise();

    return resetPasswordButton;
  }
}

Object.assign(ResetPasswordButton, {
  tagName: 'button',
  defaultProperties: {
    className: 'resetPassword'
  }
});

module.exports = ResetPasswordButton;
