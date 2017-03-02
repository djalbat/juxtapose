'use strict';

require('../index');  // easyui-jsx

const easyui = require('easyUI'),
      { Body, Button } = easyui;

class Example {
  constructor(properties) {
    this.properties = properties;
  }

  click(message) {
    console.log(message)
  }

  render(update) {
    const { message } = this.properties,
          background = 'lightgray',
          style = {
            background: background
          };

    return (

      <p style={style} className="large">
        <Button clickHandler={() => {
                  this.click(message);
                }}>
          Click me!
        </Button>
        <button onClick={() => {
                  this.click('Also clicked!');
                }}
        >
          Also click me...
        </button>
      </p>

    );
  }
}

const example = () => {
  const body = new Body(),
        message = 'Clicked...',
        example =

            <Example message={message} />;


  body.append(example);
};

module.exports = example;
