'use strict';

const easy = require('easy');

const controller = require('../controller');

const { Element } = easy;

class ResetPasswordButton extends Element {
  constructor(selector) {
    super(selector);

    this.onClick(this.clickHandler);
  }

  clickHandler() {
    controller.resetPassword();
  }

  childElements() {
    return 'Reset password';
  }

  static fromProperties(properties) {
    return Element.fromProperties(ResetPasswordButton, properties);
  }
}

Object.assign(ResetPasswordButton, {
  tagName: 'button'
});

module.exports = ResetPasswordButton;
