'use strict';

require('../../index.js'); /// easyui-jsx

var TheRenderMethod = function TheRenderMethod() {
  return React.createElement(
    'section',
    null,
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
    ),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'floatRight' },
        React.createElement(
          'a',
          { href: '#extendingAnEasyUIClass' },
          'Next: Extending an EasyUI class'
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
      ),
      React.createElement(
        'span',
        { className: 'floatLeft' },
        React.createElement(
          'a',
          { href: '#easyUIElements' },
          'Previous: EasyUI elements'
        )
      )
    )
  );
};

module.exports = TheRenderMethod;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3RoZVJlbmRlck1ldGhvZC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiVGhlUmVuZGVyTWV0aG9kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZ0JBQVIsRSxDQUEyQjs7QUFFM0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBUTtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUFSO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsS0FGRjtBQTRDRTtBQUFBO0FBQUE7QUFBQTtBQUMrRztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUQvRztBQUFBO0FBQUEsS0E1Q0Y7QUErQ0U7QUFBQTtBQUFBO0FBQUE7QUFDeUM7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FEekM7QUFBQTtBQUNtSTtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQURuSTtBQUFBO0FBRTBEO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRjFEO0FBQUE7QUFFd0g7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGeEg7QUFBQTtBQUFBLEtBL0NGO0FBbURFO0FBQUE7QUFBQTtBQUFBO0FBQzRFO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRDVFO0FBQUE7QUFDaUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURqSTtBQUFBO0FBRTJIO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRjNIO0FBQUE7QUFBQSxLQW5ERjtBQXdERTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyx5QkFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxXQUFSO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFdBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxpQkFBUjtBQUFBO0FBQUE7QUFERjtBQVBGO0FBeERGLEdBRkY7QUF3RUQsQ0F6RUQ7O0FBMkVBQyxPQUFPQyxPQUFQLEdBQWlCRixlQUFqQiIsImZpbGUiOiJ0aGVSZW5kZXJNZXRob2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2luZGV4LmpzJyk7IC8vLyBlYXN5dWktanN4XG5cbmNvbnN0IFRoZVJlbmRlck1ldGhvZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kPC9oMj5cbiAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImJsb2NrXCI+e2ByZXF1aXJlKCdlYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBCb2R5IH0gPSBlYXN5dWk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIGNsaWNrKG1lc3NhZ2UpIHtcbiAgICBhbGVydChtZXNzYWdlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2sobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBDbGljayBtZS4uLlxuICAgICAgPC9idXR0b24+XG5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9XG5cbiAgICAgICAgPEV4YW1wbGUgbWVzc2FnZT1cIkNsaWNrZWQhXCI+XG4gICAgICAgIENsaWNrIG1lLi4uXG4gICAgICAgIDwvRXhhbXBsZT5cblxuICAgICAgO1xuXG5ib2R5LmFwcGVuZChleGFtcGxlKTtgfTwvY29kZT5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGlzIHRoZSBtb3N0IHN0cmFpZ2h0Zm9yd2FyZCB3YXkgdG8gY3JlYXRlIHlvdXIgb3duIGVsZW1lbnRzLCBhbmQgaXMgbW9yZSBvciBsZXNzIGFraW4gdG8gdGhlIHVzZSBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cmVuZGVyKCk8L2NvZGU+IG1ldGhvZCBpbiBSZWFjdCBhbmQgUmVhY3Rpb24uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIHBhdHRlcm4gY29uc2lzdHMgb2YgYSBjbGFzcyB3aXRoIGEgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cmVuZGVyKCk8L2NvZGU+IG1ldGhvZCBhbmQgYW4gb3B0aW9uYWwgY29uc3RydWN0b3IgdG8gYXNzaWduIGl0cyA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5wcm9wZXJ0aWVzPC9jb2RlPiBhcmd1bWVudCB0byB0aGUgaW5zdGFuY2UuXG4gICAgICAgIFRoZSBpbnN0YW5jZSBtZXRob2RzIGFyZSB0aGVuIGF2YWlsYWJsZSBmcm9tIHdpdGhpbiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cmVuZGVyKCk8L2NvZGU+IG1ldGhvZCBieSB3YXkgb2YgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnRoaXM8L2NvZGU+IGtleXdvcmQuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSXQgaXMgaW1wb3J0YW50IHRvIHJlYWxpc2Ugd2l0aCB0aGlzIHBhdHRlcm4gdGhhdCB3aGF0IGlzIHJldHVybmVkIGJ5IHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kIHdpbGwgPGVtPm5vdDwvZW0+IGJlIGFuIGluc3RhbmNlIG9mIHRoZSBjbGFzcyB5b3UgaGF2ZSBqdXN0IGRlZmluZWQuXG4gICAgICAgIEl0IHdpbGwgYmUgYW4gaW5zdGFuY2Ugb2Ygd2hhdGV2ZXIgY2xhc3MgaXMgcmVmZXJlbmNlZCBieSB0aGUgSlNYIHJldHVybmVkIGJ5IHRoZSByZW5kZXIoKSBtZXRob2QsIG9yIGFuIGluc3RhbmNlIG9mIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5FbGVtZW50PC9jb2RlPiBjbGFzcyBpZiB0aGUgdGFnIG5hbWUgaXMgbG93ZXIgY2FzZS5cbiAgICAgICAgVGhlIHV0aWxpdHkgb2YgdGhpcyBwYXR0ZXJuIHJlYWxseSBvbmx5IGxpZXMgaW4gdGhlIGZhY3QgdGhhdCBpdCBhbGxvd3MgSlNYIHRvIGJlIGVuY2Fwc3VsYXRlZCB0b2dldGhlciB3aXRoIHNvbWUgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IHRoYXQgY2FuIGJlIGVhc2lseSByZWZlcmVuY2VkLlxuICAgICAgPC9wPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZXh0ZW5kaW5nQW5FYXN5VUlDbGFzc1wiPk5leHQ6IEV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGEgaHJlZj1cIiNjb250ZW50c1wiPkNvbnRlbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0TGVmdFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZWFzeVVJRWxlbWVudHNcIj5QcmV2aW91czogRWFzeVVJIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaGVSZW5kZXJNZXRob2Q7XG4iXX0=