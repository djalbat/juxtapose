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

  initialise() {
    this.assignContext();
  }

  static fromProperties(properties) {
    const view = Element.fromProperties(View, properties);

    view.initialise();

    return view;
  }
}

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
