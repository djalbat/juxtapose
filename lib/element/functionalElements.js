'use strict';

require('../../index.js'); /// easyui-jsx

var FunctionalElements = function FunctionalElements() {
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
          { href: '#easyUIElements' },
          'Next: EasyUI elements'
        )
      ),
      React.createElement(
        'span',
        { className: 'previous' },
        React.createElement(
          'a',
          { href: '#appendingToTheDOM' },
          'Previous: Appending to the DOM'
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
      'Functional elements'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst Div = (properties) => {\n  const { className } = properties,\n        { childElements } = properties;\n\n  return (\n\n    <div className={className}>\n    {childElements}\n    </div>\n\n  );\n};\n\nconst body = new Body();\n\nbody.append(\n\n  <Div className="example">\n  An easy example.\n  </Div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'JSX can be returned from functions. These functions are passed the attributes of the JSX that references them as a ',
      React.createElement(
        'code',
        { className: 'inline' },
        'properties'
      ),
      ' argument. The ',
      React.createElement(
        'code',
        { className: 'inline' },
        'childElements'
      ),
      ' property of that argument gives access to child elements.'
    ),
    React.createElement(
      'p',
      null,
      'In EasyUI-JSX parlance, in relation to React or Reaction:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'code',
          { className: 'inline' },
          'props'
        ),
        ' becomes ',
        React.createElement(
          'code',
          { className: 'inline' },
          'properties'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'code',
          { className: 'inline' },
          'children'
        ),
        ' becomes ',
        React.createElement(
          'code',
          { className: 'inline' },
          'childElements'
        )
      )
    )
  );
};

module.exports = FunctionalElements;