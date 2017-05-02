'use strict';

const easy = require('easy');

const { Element } = easy;

class Message extends Element {
  showMessage(message) {
    const html = message; ///

    this.html(html);
  }

  parentContext() {
    return ({
      showMessage: this.showMessage.bind(this)
    });
  }

  static fromProperties(properties) {
    return Element.fromProperties(Message, properties);
  }
}

Object.assign(Message, {
  tagName: 'p',
  defaultProperties: {
    className: 'message'
  }
});

module.exports = Message;
