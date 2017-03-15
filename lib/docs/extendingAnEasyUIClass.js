'use strict';

require('../easyui-jsx');

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
          { href: '#aGoodExampleThisDocumentation' },
          'Next: A good example, this documentation'
        )
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
        { className: 'contents' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL2V4dGVuZGluZ0FuRWFzeVVJQ2xhc3MuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlRoZVJlbmRlck1ldGhvZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGVBQVI7O0FBRUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxNQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssZ0NBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGtCQUFSO0FBQUE7QUFBeUM7QUFBQTtBQUFBLGNBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsV0FBekM7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFdBQVI7QUFBQTtBQUFBO0FBREY7QUFQRixLQURGO0FBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVpGO0FBYUU7QUFBQTtBQUFBLFFBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsS0FiRjtBQWdERTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaERGO0FBbURFO0FBQUE7QUFBQTtBQUFBO0FBQ2lEO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRGpEO0FBQUE7QUFFaUI7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGakI7QUFBQTtBQUUyRztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUYzRztBQUFBO0FBQUEsS0FuREY7QUF1REU7QUFBQTtBQUFBO0FBQUE7QUFDNkI7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FEN0I7QUFBQTtBQUN5RztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUR6RztBQUFBO0FBRVc7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGWDtBQUFBO0FBRTJFO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRjNFO0FBQUE7QUFHaUM7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FIakM7QUFBQTtBQUFBO0FBdkRGLEdBRkY7QUFpRUQsQ0FsRUQ7O0FBb0VBQyxPQUFPQyxPQUFQLEdBQWlCRixlQUFqQiIsImZpbGUiOiJleHRlbmRpbmdBbkVhc3lVSUNsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IFRoZVJlbmRlck1ldGhvZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV4dFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjYUdvb2RFeGFtcGxlVGhpc0RvY3VtZW50YXRpb25cIj5OZXh0OiBBIGdvb2QgZXhhbXBsZSwgdGhpcyBkb2N1bWVudGF0aW9uPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByZXZpb3VzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiN0aGVSZW5kZXJNZXRob2RcIj5QcmV2aW91czogVGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnJlbmRlcigpPC9jb2RlPiBtZXRob2Q8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudHNcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2NvbnRlbnRzXCI+Q29udGVudHM8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L2gyPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHksIEJ1dHRvbiB9ID0gZWFzeXVpO1xuXG5jbGFzcyBFeGFtcGxlIGV4dGVuZHMgQnV0dG9uIHtcbiAgY2xpY2soKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBhbGVydChtZXNzYWdlKVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gQnV0dG9uLmZyb21Qcm9wZXJ0aWVzKEV4YW1wbGUsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbkV4YW1wbGUudGFnTmFtZSA9ICdidXR0b24nOyAvLy8gT3B0aW9uYWwuXG5cbmNvbnN0IGV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgICBleGFtcGxlID1cblxuICAgICAgICAgIDxFeGFtcGxlIG1lc3NhZ2U9XCJDbGlja2VkIVwiPlxuICAgICAgICAgIENsaWNrIG1lLi4uXG4gICAgICAgICAgPC9FeGFtcGxlPlxuXG4gICAgICAgIDtcblxuICBleGFtcGxlLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZXhhbXBsZS5jbGljaygpO1xuICB9KTtcblxuICBib2R5LmFwcGVuZChleGFtcGxlKTtcbn07YH08L2NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBpcyB0aGUgcHJlZmVycmVkIHdheSBvZiBjcmVhdGluZyB5b3VyIG93biBlbGVtZW50cyBhbmQgaXMgdGhlIHdheSB0aGF0IEpTWCBzdXBwb3J0IGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBFYXN5VUkgZWxlbWVudHMgdGhlbXNlbHZlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgY2FuIGV4dGVuZCBhbnkgRWFzeVVJIGNsYXNzLCBpbmNsdWRpbmcgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkVsZW1lbnQ8L2NvZGU+IGNsYXNzLlxuICAgICAgICBVc2UgdGhlIHN0YXRpYyA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5mcm9tUHJvcGVydGllcygpPC9jb2RlPiBmYWN0b3J5IG1ldGhvZCBhbmQgZnJvbSB0aGVyZSBpbnZva2UgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmZyb21Qcm9wZXJ0aWVzKCk8L2NvZGU+IG1ldGhvZCBvZiB0aGUgY2xhc3MgeW91IGFyZSBleHRlbmRpbmcuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgTm90ZSB0aGF0IG5vdCBvbmx5IGNhbiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+b25DbGljaygpPC9jb2RlPiBtZXRob2QgY2FuIGJlIGNhbGxlZCwgYmVjYXVzZSB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RXhhbXBsZTwvY29kZT4gY2xhc3MgaW5oZXJpdHMgXG4gICAgICAgIGZyb20gdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkJ1dHRvbjwvY29kZT4gY2xhc3MsIGJ1dCBhbHNvIHRoYXQgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmNsaWNrKCk8L2NvZGU+IG1ldGhvZCBjYW4gbm93IGJlIGNhbGxlZCwgYmVjYXVzZSB3aGF0IGlzIFxuICAgICAgICByZXR1cm5lZCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RXhhbXBsZTwvY29kZT4gY2xhc3MuICAgICAgXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRoZVJlbmRlck1ldGhvZDtcbiJdfQ==