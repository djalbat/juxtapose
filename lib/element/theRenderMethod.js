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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3RoZVJlbmRlck1ldGhvZC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiVGhlUmVuZGVyTWV0aG9kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZ0JBQVIsRSxDQUEyQjs7QUFFM0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBUTtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUFSO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsS0FGRjtBQTRDRTtBQUFBO0FBQUE7QUFBQTtBQUMrRztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUQvRztBQUFBO0FBQUEsS0E1Q0Y7QUErQ0U7QUFBQTtBQUFBO0FBQUE7QUFDeUM7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FEekM7QUFBQTtBQUNtSTtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQURuSTtBQUFBO0FBRTBEO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRjFEO0FBQUE7QUFFd0g7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGeEg7QUFBQTtBQUFBLEtBL0NGO0FBbURFO0FBQUE7QUFBQTtBQUFBO0FBQzRFO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRDVFO0FBQUE7QUFDaUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURqSTtBQUFBO0FBRTJIO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRjNIO0FBQUE7QUFBQSxLQW5ERjtBQXdERTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyx5QkFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQU0sV0FBVSxXQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQXhERixHQUZGO0FBcUVELENBdEVEOztBQXdFQUMsT0FBT0MsT0FBUCxHQUFpQkYsZUFBakIiLCJmaWxlIjoidGhlUmVuZGVyTWV0aG9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9pbmRleC5qcycpOyAvLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBUaGVSZW5kZXJNZXRob2QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5UaGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cmVuZGVyKCk8L2NvZGU+IG1ldGhvZDwvaDI+XG4gICAgICA8Y29kZSBjbGFzc05hbWU9XCJibG9ja1wiPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSB9ID0gZWFzeXVpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBjbGljayhtZXNzYWdlKSB7XG4gICAgYWxlcnQobWVzc2FnZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQ2xpY2sgbWUuLi5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPVxuXG4gICAgICAgIDxFeGFtcGxlIG1lc3NhZ2U9XCJDbGlja2VkIVwiPlxuICAgICAgICBDbGljayBtZS4uLlxuICAgICAgICA8L0V4YW1wbGU+XG5cbiAgICAgIDtcblxuYm9keS5hcHBlbmQoZXhhbXBsZSk7YH08L2NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBpcyB0aGUgbW9zdCBzdHJhaWdodGZvcndhcmQgd2F5IHRvIGNyZWF0ZSB5b3VyIG93biBlbGVtZW50cywgYW5kIGlzIG1vcmUgb3IgbGVzcyBha2luIHRvIHRoZSB1c2Ugb2YgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnJlbmRlcigpPC9jb2RlPiBtZXRob2QgaW4gUmVhY3QgYW5kIFJlYWN0aW9uLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZSBwYXR0ZXJuIGNvbnNpc3RzIG9mIGEgY2xhc3Mgd2l0aCBhIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnJlbmRlcigpPC9jb2RlPiBtZXRob2QgYW5kIGFuIG9wdGlvbmFsIGNvbnN0cnVjdG9yIHRvIGFzc2lnbiBpdHMgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cHJvcGVydGllczwvY29kZT4gYXJndW1lbnQgdG8gdGhlIGluc3RhbmNlLlxuICAgICAgICBUaGUgaW5zdGFuY2UgbWV0aG9kcyBhcmUgdGhlbiBhdmFpbGFibGUgZnJvbSB3aXRoaW4gdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnJlbmRlcigpPC9jb2RlPiBtZXRob2QgYnkgd2F5IG9mIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj50aGlzPC9jb2RlPiBrZXl3b3JkLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEl0IGlzIGltcG9ydGFudCB0byByZWFsaXNlIHdpdGggdGhpcyBwYXR0ZXJuIHRoYXQgd2hhdCBpcyByZXR1cm5lZCBieSB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cmVuZGVyKCk8L2NvZGU+IG1ldGhvZCB3aWxsIDxlbT5ub3Q8L2VtPiBiZSBhbiBpbnN0YW5jZSBvZiB0aGUgY2xhc3MgeW91IGhhdmUganVzdCBkZWZpbmVkLlxuICAgICAgICBJdCB3aWxsIGJlIGFuIGluc3RhbmNlIG9mIHdoYXRldmVyIGNsYXNzIGlzIHJlZmVyZW5jZWQgYnkgdGhlIEpTWCByZXR1cm5lZCBieSB0aGUgcmVuZGVyKCkgbWV0aG9kLCBvciBhbiBpbnN0YW5jZSBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RWxlbWVudDwvY29kZT4gY2xhc3MgaWYgdGhlIHRhZyBuYW1lIGlzIGxvd2VyIGNhc2UuXG4gICAgICAgIFRoZSB1dGlsaXR5IG9mIHRoaXMgcGF0dGVybiByZWFsbHkgb25seSBsaWVzIGluIHRoZSBmYWN0IHRoYXQgaXQgYWxsb3dzIEpTWCB0byBiZSBlbmNhcHN1bGF0ZWQgdG9nZXRoZXIgd2l0aCBzb21lIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSB0aGF0IGNhbiBiZSBlYXNpbHkgcmVmZXJlbmNlZC5cbiAgICAgIDwvcD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2V4dGVuZGluZ0FuRWFzeVVJQ2xhc3NcIj5OZXh0OiBFeHRlbmRpbmcgYW4gRWFzeVVJIGNsYXNzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0TGVmdFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZWFzeVVJRWxlbWVudHNcIj5QcmV2aW91czogRWFzeVVJIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaGVSZW5kZXJNZXRob2Q7XG4iXX0=