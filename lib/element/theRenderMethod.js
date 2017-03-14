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
        React.createElement(
          'a',
          { href: '#extendingAnEasyUIClass' },
          'Next: Extending an EasyUI class'
        )
      ),
      React.createElement(
        'span',
        { className: 'previous' },
        React.createElement(
          'a',
          { href: '#easyUIElements' },
          'Previous: EasyUI elements'
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
      'The ',
      React.createElement(
        'code',
        { className: 'inline' },
        'render()'
      ),
      ' method'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nclass Example {\n  constructor(properties) {\n    this.properties = properties;\n  }\n\n  click(message) {\n    alert(message)\n  }\n\n  render() {\n    const { message } = this.properties;\n\n    return (\n\n      <button onClick={() => {\n\n                        this.click(message);\n\n                      }}\n      >\n        Click me...\n      </button>\n\n    );\n  }\n}\n\nconst body = new Body(),\n      example =\n\n        <Example message="Clicked!">\n        Click me...\n        </Example>\n\n      ;\n\nbody.append(example);'
    ),
    React.createElement(
      'p',
      null,
      'This is the most straightforward way to create your own elements, and is more or less akin to the use of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'render()'
      ),
      ' method in React and Reaction.'
    ),
    React.createElement(
      'p',
      null,
      'The pattern consists of a class with a ',
      React.createElement(
        'code',
        { className: 'inline' },
        'render()'
      ),
      ' method and an optional constructor to assign its ',
      React.createElement(
        'code',
        { className: 'inline' },
        'properties'
      ),
      ' argument to the instance. The instance methods are then available from within the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'render()'
      ),
      ' method by way of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'this'
      ),
      ' keyword.'
    ),
    React.createElement(
      'p',
      null,
      'It is important to realise with this pattern that what is returned by the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'render()'
      ),
      ' method will ',
      React.createElement(
        'em',
        null,
        'not'
      ),
      ' be an instance of the class you have just defined. It will be an instance of whatever class is referenced by the JSX returned by the render() method, or an instance of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Element'
      ),
      ' class if the tag name is lower case. The utility of this pattern really only lies in the fact that it allows JSX to be encapsulated together with some additional functionality that can be easily referenced.'
    )
  );
};

module.exports = TheRenderMethod;