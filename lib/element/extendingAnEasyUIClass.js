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
    )
  );
};

module.exports = TheRenderMethod;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2V4dGVuZGluZ0FuRWFzeVVJQ2xhc3MuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlRoZVJlbmRlck1ldGhvZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFxQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXJDRjtBQXdDRTtBQUFBO0FBQUE7QUFBQTtBQUNpRDtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQURqRDtBQUFBO0FBRWlCO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRmpCO0FBQUE7QUFFMkc7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGM0c7QUFBQTtBQUFBLEtBeENGO0FBNENFO0FBQUE7QUFBQTtBQUFBO0FBQ2dCO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRGhCO0FBQUE7QUFDNEY7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FENUY7QUFBQTtBQUVXO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRlg7QUFBQTtBQUUyRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUYzRTtBQUFBO0FBR2lDO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BSGpDO0FBQUE7QUFBQSxLQTVDRjtBQWlERTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFVBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQXlDO0FBQUE7QUFBQSxjQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLFdBQXpDO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFdBQVI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQWpERixHQUZGO0FBOERELENBL0REOztBQWlFQUMsT0FBT0MsT0FBUCxHQUFpQkYsZUFBakIiLCJmaWxlIjoiZXh0ZW5kaW5nQW5FYXN5VUlDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgVGhlUmVuZGVyTWV0aG9kID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+RXh0ZW5kaW5nIGFuIEVhc3lVSSBjbGFzczwvaDI+XG4gICAgICA8Y29kZSBjbGFzc05hbWU9XCJibG9ja1wiPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSwgQnV0dG9uIH0gPSBlYXN5dWk7XG5cbmNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBCdXR0b24ge1xuICBjbGljaygpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGFsZXJ0KG1lc3NhZ2UpXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBCdXR0b24uZnJvbVByb3BlcnRpZXMoRXhhbXBsZSwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuRXhhbXBsZS50YWdOYW1lID0gJ2J1dHRvbic7IC8vLyBPcHRpb25hbC5cblxuY29uc3QgZXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICAgIGV4YW1wbGUgPVxuXG4gICAgICAgICAgPEV4YW1wbGUgbWVzc2FnZT1cIkNsaWNrZWQhXCI+XG4gICAgICAgICAgQ2xpY2sgbWUuLi5cbiAgICAgICAgICA8L0V4YW1wbGU+XG5cbiAgICAgICAgO1xuXG4gIGV4YW1wbGUub25DbGljayhmdW5jdGlvbigpIHtcbiAgICBleGFtcGxlLmNsaWNrKCk7XG4gIH0pO1xuXG4gIGJvZHkuYXBwZW5kKGV4YW1wbGUpO1xufTtgfTwvY29kZT5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGlzIHRoZSBwcmVmZXJyZWQgcGF0dGVybiBmb3IgY3JlYXRpbmcgeW91ciBvd24gZWxlbWVudHMgYW5kIGlzIHRoZSB3YXkgdGhhdCBKU1ggc3VwcG9ydCBoYXMgYmVlbiBhZGRlZCB0byB0aGUgRWFzeVVJIGVsZW1lbnRzIHRoZW1zZWx2ZXMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgWW91IGNhbiBleHRlbmQgYW55IEVhc3lVSSBjbGFzcywgaW5jbHVkaW5nIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5FbGVtZW50PC9jb2RlPiBjbGFzcy5cbiAgICAgICAgVXNlIHRoZSBzdGF0aWMgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+ZnJvbVByb3BlcnRpZXMoKTwvY29kZT4gZmFjdG9yeSBtZXRob2QgYW5kIGZyb20gdGhlcmUgaW52b2tlIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5mcm9tUHJvcGVydGllcygpPC9jb2RlPiBtZXRob2Qgb2YgdGhlIGNsYXNzIHlvdSBhcmUgZXh0ZW5kaW5nLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIE5vdGUgdGhhdCB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+b25DbGljaygpPC9jb2RlPiBtZXRob2QgY2FuIGJlIGNhbGxlZCwgYmVjYXVzZSB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RXhhbXBsZTwvY29kZT4gY2xhc3MgaW5oZXJpdHMgXG4gICAgICAgIGZyb20gdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkJ1dHRvbjwvY29kZT4gY2xhc3MsIGJ1dCBhbHNvIHRoYXQgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmNsaWNrKCk8L2NvZGU+IG1ldGhvZCBjYW4gbm93IGJlIGNhbGxlZCwgYmVjYXVzZSB3aGF0IGlzIFxuICAgICAgICByZXR1cm5lZCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RXhhbXBsZTwvY29kZT4gY2xhc3MuICAgICAgXG4gICAgICA8L3A+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmV2aW91c1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdGhlUmVuZGVyTWV0aG9kXCI+UHJldmlvdXM6IFRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxhIGhyZWY9XCIjY29udGVudHNcIj5Db250ZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRoZVJlbmRlck1ldGhvZDtcbiJdfQ==