'use strict';

require('../../index.js'); /// easyui-jsx

var TheRenderMethod = function TheRenderMethod() {
  return React.createElement(
    'section',
    null,
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
      'This is the preferred pattern for creating your own elements and is the way that JSX support has been added to the EasyUI elements themselves.'
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
      'Note that the ',
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
    ),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'floatLeft' },
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
      )
    )
  );
};

module.exports = TheRenderMethod;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2V4dGVuZGluZ0FuRWFzeVVJQ2xhc3MuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlRoZVJlbmRlck1ldGhvZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFxQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXJDRjtBQXdDRTtBQUFBO0FBQUE7QUFBQTtBQUNpRDtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQURqRDtBQUFBO0FBRWlCO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRmpCO0FBQUE7QUFFMkc7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGM0c7QUFBQTtBQUFBLEtBeENGO0FBNENFO0FBQUE7QUFBQTtBQUFBO0FBQ2dCO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRGhCO0FBQUE7QUFDNEY7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FENUY7QUFBQTtBQUVXO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRlg7QUFBQTtBQUUyRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUYzRTtBQUFBO0FBR2lDO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BSGpDO0FBQUE7QUFBQSxLQTVDRjtBQWlERTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFdBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQXlDO0FBQUE7QUFBQSxjQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLFdBQXpDO0FBQUE7QUFBQTtBQURGO0FBREY7QUFqREYsR0FGRjtBQTJERCxDQTVERDs7QUE4REFDLE9BQU9DLE9BQVAsR0FBaUJGLGVBQWpCIiwiZmlsZSI6ImV4dGVuZGluZ0FuRWFzeVVJQ2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2luZGV4LmpzJyk7IC8vLyBlYXN5dWktanN4XG5cbmNvbnN0IFRoZVJlbmRlck1ldGhvZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L2gyPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHksIEJ1dHRvbiB9ID0gZWFzeXVpO1xuXG5jbGFzcyBFeGFtcGxlIGV4dGVuZHMgQnV0dG9uIHtcbiAgY2xpY2soKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBhbGVydChtZXNzYWdlKVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gQnV0dG9uLmZyb21Qcm9wZXJ0aWVzKEV4YW1wbGUsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbkV4YW1wbGUudGFnTmFtZSA9ICdidXR0b24nOyAvLy8gT3B0aW9uYWwuXG5cbmNvbnN0IGV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgICBleGFtcGxlID1cblxuICAgICAgICAgIDxFeGFtcGxlIG1lc3NhZ2U9XCJDbGlja2VkIVwiPlxuICAgICAgICAgIENsaWNrIG1lLi4uXG4gICAgICAgICAgPC9FeGFtcGxlPlxuXG4gICAgICAgIDtcblxuICBleGFtcGxlLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZXhhbXBsZS5jbGljaygpO1xuICB9KTtcblxuICBib2R5LmFwcGVuZChleGFtcGxlKTtcbn07YH08L2NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBpcyB0aGUgcHJlZmVycmVkIHBhdHRlcm4gZm9yIGNyZWF0aW5nIHlvdXIgb3duIGVsZW1lbnRzIGFuZCBpcyB0aGUgd2F5IHRoYXQgSlNYIHN1cHBvcnQgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIEVhc3lVSSBlbGVtZW50cyB0aGVtc2VsdmVzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBjYW4gZXh0ZW5kIGFueSBFYXN5VUkgY2xhc3MsIGluY2x1ZGluZyB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RWxlbWVudDwvY29kZT4gY2xhc3MuXG4gICAgICAgIFVzZSB0aGUgc3RhdGljIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmZyb21Qcm9wZXJ0aWVzKCk8L2NvZGU+IGZhY3RvcnkgbWV0aG9kIGFuZCBmcm9tIHRoZXJlIGludm9rZSB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+ZnJvbVByb3BlcnRpZXMoKTwvY29kZT4gbWV0aG9kIG9mIHRoZSBjbGFzcyB5b3UgYXJlIGV4dGVuZGluZy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBOb3RlIHRoYXQgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPm9uQ2xpY2soKTwvY29kZT4gbWV0aG9kIGNhbiBiZSBjYWxsZWQsIGJlY2F1c2UgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkV4YW1wbGU8L2NvZGU+IGNsYXNzIGluaGVyaXRzIFxuICAgICAgICBmcm9tIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5CdXR0b248L2NvZGU+IGNsYXNzLCBidXQgYWxzbyB0aGF0IHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5jbGljaygpPC9jb2RlPiBtZXRob2QgY2FuIG5vdyBiZSBjYWxsZWQsIGJlY2F1c2Ugd2hhdCBpcyBcbiAgICAgICAgcmV0dXJuZWQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkV4YW1wbGU8L2NvZGU+IGNsYXNzLiAgICAgIFxuICAgICAgPC9wPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiN0aGVSZW5kZXJNZXRob2RcIj5QcmV2aW91czogVGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnJlbmRlcigpPC9jb2RlPiBtZXRob2Q8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmF2PlxuICAgIDwvc2VjdGlvbj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaGVSZW5kZXJNZXRob2Q7XG4iXX0=