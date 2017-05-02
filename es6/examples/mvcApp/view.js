'use strict';

const easy = require('easy');

const Message = require('./view/message'),
      PasswordForm = require('./view/passwordForm'),
      ResetPasswordButton = require('./view/resetPasswordButton');

const { Element } = easy;

class View extends Element {
  childElements() {
    return([

      <PasswordForm />,
      <ResetPasswordButton />,
      <Message />

    ]);
  }

  parentContext() {
    this.assignContext();
  }

  static fromProperties(properties) {
    return Element.fromProperties(View, properties);
  }
}

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
