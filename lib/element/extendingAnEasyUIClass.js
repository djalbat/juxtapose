'use strict';

require('../../index.js'); /// easyui-jsx

var TheRenderMethod = function TheRenderMethod() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'next' },
        'Next'
      ),
      React.createElement(
        'span',
        { className: 'previous' },
        React.createElement(
          'a',
          { href: '#theRenderMethod' },
          'Previous: The ',
          React.createElement(
            'code',
            { className: 'inline' },
            'render()'
          ),
          ' method'
        )
      ),
      React.createElement(
        'span',
        null,
        React.createElement(
          'a',
          { href: '#contents' },
          'Contents'
        )
      )
    ),
    React.createElement(
      'h2',
      null,
      'Extending an EasyUI class'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body, Button } = easyui;\n\nclass Example extends Button {\n  click() {\n    const { message } = this.properties;\n\n    alert(message)\n  }\n\n  static fromProperties(properties) {\n    return Button.fromProperties(Example, properties);\n  }\n}\n\nExample.tagName = \'button\'; /// Optional.\n\nconst example = () => {\n  const body = new Body(),\n        example =\n\n          <Example message="Clicked!">\n          Click me...\n          </Example>\n\n        ;\n\n  example.onClick(function() {\n    example.click();\n  });\n\n  body.append(example);\n};'
    ),
    React.createElement(
      'p',
      null,
      'This is the preferred way of creating your own elements and is the way that JSX support has been added to the EasyUI elements themselves.'
    ),
    React.createElement(
      'p',
      null,
      'You can extend any EasyUI class, including the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Element'
      ),
      ' class. Use the static ',
      React.createElement(
        'code',
        { className: 'inline' },
        'fromProperties()'
      ),
      ' factory method and from there invoke the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'fromProperties()'
      ),
      ' method of the class you are extending.'
    ),
    React.createElement(
      'p',
      null,
      'Note that not only can the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'onClick()'
      ),
      ' method can be called, because the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Example'
      ),
      ' class inherits from the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Button'
      ),
      ' class, but also that the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'click()'
      ),
      ' method can now be called, because what is returned is an instance of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Example'
      ),
      ' class.'
    )
  );
};

module.exports = TheRenderMethod;