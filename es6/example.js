'use strict';

require('../index');  /// easyui-jsx

const easyui = require('easyUI'),
      { Body, Button } = easyui;

class Example {
  click() {
    console.log('clicked!')
  }

  render() {
    return (

      <p>
        <Button clickHandler={() => {
                  this.click();
                }}>
          Click me!
        </Button>
      </p>

    );
  }
}

const example = () => {
  const body = new Body(),
        example =

            <Example />;


  body.append(example);
};

module.exports = example;
