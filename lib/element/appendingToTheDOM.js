'use strict';

require('../../index.js'); /// easyui-jsx

var GettingStarted = function GettingStarted() {
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
          { href: '#functionalElements' },
          'Next: Functional elements'
        )
      ),
      React.createElement(
        'span',
        { className: 'previous' },
        React.createElement(
          'a',
          { href: '#jsxIsGreat' },
          'Previous: JSX is great'
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
      'Appending to the DOM'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Div } = easyui;\n\nconst rootDivDOMElement =\n        document.getElementbyId(\'root\'),\n      rootDivElement =\n        Div.fromDOMElement(rootDivDOMElement);\n\nrootDivElement.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'EasyUI elements created using JSX need to be put in the DOM somehow. The example here is equivalent to the use of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'ReactDOM.render(...)'
      ),
      ' method in React or Reaction. You at least need to do this once, but only once.'
    ),
    React.createElement(
      'p',
      null,
      'If you are not happy using ',
      React.createElement(
        'code',
        { className: 'inline' },
        'body'
      ),
      ' DOM element, then create an element that references a root ',
      React.createElement(
        'code',
        { className: 'inline' },
        'div'
      ),
      ' element, say, either by passing the requisite CSS selector to the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Div'
      ),
      ' class constructor, or, if you have the DOM element to hand, by using the static ',
      React.createElement(
        'code',
        { className: 'inline' },
        'fromHTML()'
      ),
      ' factory method of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Div'
      ),
      ' class, as in the example here.'
    ),
    React.createElement(
      'p',
      null,
      'All the examples here append to the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'body'
      ),
      ' DOM element but in practice it is entirely up to you.'
    )
  );
};

module.exports = GettingStarted;