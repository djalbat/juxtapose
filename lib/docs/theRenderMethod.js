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
      'It is important to realise that what is returned will ',
      React.createElement(
        'em',
        null,
        'not'
      ),
      ' be an instance of the class just defined. It will be an instance of whatever class is referenced by the JSX that is returned by the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'render()'
      ),
      ' method, or an instance of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Element'
      ),
      ' class if the tag name is lower case. The utility of this pattern only lies in the fact that it allows JSX to be encapsulated together with some additional functionality that can be easily referenced.'
    )
  );
};

module.exports = TheRenderMethod;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL3RoZVJlbmRlck1ldGhvZC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiVGhlUmVuZGVyTWV0aG9kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZUFBUjs7QUFFQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLE1BQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyx5QkFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQU0sV0FBVSxVQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFdBQVI7QUFBQTtBQUFBO0FBREY7QUFQRixLQURGO0FBWUU7QUFBQTtBQUFBO0FBQUE7QUFBUTtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUFSO0FBQUE7QUFBQSxLQVpGO0FBYUU7QUFBQTtBQUFBLFFBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsS0FiRjtBQXVERTtBQUFBO0FBQUE7QUFBQTtBQUMrRztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUQvRztBQUFBO0FBQUEsS0F2REY7QUEwREU7QUFBQTtBQUFBO0FBQUE7QUFDeUM7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FEekM7QUFBQTtBQUNtSTtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQURuSTtBQUFBO0FBRTBEO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRjFEO0FBQUE7QUFFd0g7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGeEg7QUFBQTtBQUFBLEtBMURGO0FBOERFO0FBQUE7QUFBQTtBQUFBO0FBQ3dEO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEeEQ7QUFBQTtBQUU0RjtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUY1RjtBQUFBO0FBRW1LO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRm5LO0FBQUE7QUFBQTtBQTlERixHQUZGO0FBd0VELENBekVEOztBQTJFQUMsT0FBT0MsT0FBUCxHQUFpQkYsZUFBakIiLCJmaWxlIjoidGhlUmVuZGVyTWV0aG9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IFRoZVJlbmRlck1ldGhvZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV4dFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZXh0ZW5kaW5nQW5FYXN5VUlDbGFzc1wiPk5leHQ6IEV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJldmlvdXNcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2Vhc3lVSUVsZW1lbnRzXCI+UHJldmlvdXM6IEVhc3lVSSBlbGVtZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjY29udGVudHNcIj5Db250ZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+VGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnJlbmRlcigpPC9jb2RlPiBtZXRob2Q8L2gyPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHkgfSA9IGVhc3l1aTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgY2xpY2sobWVzc2FnZSkge1xuICAgIGFsZXJ0KG1lc3NhZ2UpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGljayhtZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIENsaWNrIG1lLi4uXG4gICAgICA8L2J1dHRvbj5cblxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID1cblxuICAgICAgICA8RXhhbXBsZSBtZXNzYWdlPVwiQ2xpY2tlZCFcIj5cbiAgICAgICAgQ2xpY2sgbWUuLi5cbiAgICAgICAgPC9FeGFtcGxlPlxuXG4gICAgICA7XG5cbmJvZHkuYXBwZW5kKGV4YW1wbGUpO2B9PC9jb2RlPlxuICAgICAgPHA+XG4gICAgICAgIFRoaXMgaXMgdGhlIG1vc3Qgc3RyYWlnaHRmb3J3YXJkIHdheSB0byBjcmVhdGUgeW91ciBvd24gZWxlbWVudHMsIGFuZCBpcyBtb3JlIG9yIGxlc3MgYWtpbiB0byB0aGUgdXNlIG9mIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kIGluIFJlYWN0IGFuZCBSZWFjdGlvbi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgcGF0dGVybiBjb25zaXN0cyBvZiBhIGNsYXNzIHdpdGggYSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kIGFuZCBhbiBvcHRpb25hbCBjb25zdHJ1Y3RvciB0byBhc3NpZ24gaXRzIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnByb3BlcnRpZXM8L2NvZGU+IGFyZ3VtZW50IHRvIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgVGhlIGluc3RhbmNlIG1ldGhvZHMgYXJlIHRoZW4gYXZhaWxhYmxlIGZyb20gd2l0aGluIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kIGJ5IHdheSBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+dGhpczwvY29kZT4ga2V5d29yZC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJdCBpcyBpbXBvcnRhbnQgdG8gcmVhbGlzZSB0aGF0IHdoYXQgaXMgcmV0dXJuZWQgd2lsbCA8ZW0+bm90PC9lbT4gYmUgYW4gaW5zdGFuY2Ugb2YgdGhlIGNsYXNzIGp1c3QgZGVmaW5lZC5cbiAgICAgICAgSXQgd2lsbCBiZSBhbiBpbnN0YW5jZSBvZiB3aGF0ZXZlciBjbGFzcyBpcyByZWZlcmVuY2VkIGJ5IHRoZSBKU1ggdGhhdCBpcyByZXR1cm5lZCBieSB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cmVuZGVyKCk8L2NvZGU+IG1ldGhvZCwgb3IgYW4gaW5zdGFuY2Ugb2YgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkVsZW1lbnQ8L2NvZGU+IGNsYXNzIGlmIHRoZSB0YWcgbmFtZSBpcyBsb3dlciBjYXNlLlxuICAgICAgICBUaGUgdXRpbGl0eSBvZiB0aGlzIHBhdHRlcm4gb25seSBsaWVzIGluIHRoZSBmYWN0IHRoYXQgaXQgYWxsb3dzIEpTWCB0byBiZSBlbmNhcHN1bGF0ZWQgdG9nZXRoZXIgd2l0aCBzb21lIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSB0aGF0IGNhbiBiZSBlYXNpbHkgcmVmZXJlbmNlZC5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaGVSZW5kZXJNZXRob2Q7XG4iXX0=