'use strict';

require('../index.js');

const easyui = require('easyui'),
      { Body, Button } = easyui;

class Example extends Button {
  click() {
    const { message } = this.properties;

    alert(message)
  }

  static fromProperties(properties) {
    return Button.fromProperties(Example, properties);
  }
}

Example.tagName = 'button';

const example = () => {
  const body = new Body(),
        example = <Example message="Clicked!">Click me...</Example>;

  example.onClick(function() {
    example.click();
  });

  body.append(example);
};

module.exports = example;
