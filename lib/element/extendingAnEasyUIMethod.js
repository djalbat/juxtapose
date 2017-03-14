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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2V4dGVuZGluZ0FuRWFzeVVJTWV0aG9kLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJUaGVSZW5kZXJNZXRob2QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxnQkFBUixFLENBQTJCOztBQUUzQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFRO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BQVI7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQSxLQUZGO0FBNENFO0FBQUE7QUFBQTtBQUFBO0FBQytHO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRC9HO0FBQUE7QUFBQSxLQTVDRjtBQStDRTtBQUFBO0FBQUE7QUFBQTtBQUN5QztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUR6QztBQUFBO0FBQ21JO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRG5JO0FBQUE7QUFFMEQ7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGMUQ7QUFBQTtBQUV3SDtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUZ4SDtBQUFBO0FBQUEsS0EvQ0Y7QUFtREU7QUFBQTtBQUFBO0FBQUE7QUFDNEU7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FENUU7QUFBQTtBQUNpSTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGpJO0FBQUE7QUFFMkg7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGM0g7QUFBQTtBQUFBLEtBbkRGO0FBd0RFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsWUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHlCQUFSO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFdBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxpQkFBUjtBQUFBO0FBQUE7QUFERjtBQUpGO0FBeERGLEdBRkY7QUFxRUQsQ0F0RUQ7O0FBd0VBQyxPQUFPQyxPQUFQLEdBQWlCRixlQUFqQiIsImZpbGUiOiJleHRlbmRpbmdBbkVhc3lVSU1ldGhvZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgVGhlUmVuZGVyTWV0aG9kID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+VGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnJlbmRlcigpPC9jb2RlPiBtZXRob2Q8L2gyPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHkgfSA9IGVhc3l1aTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgY2xpY2sobWVzc2FnZSkge1xuICAgIGFsZXJ0KG1lc3NhZ2UpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGljayhtZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIENsaWNrIG1lLi4uXG4gICAgICA8L2J1dHRvbj5cblxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID1cblxuICAgICAgICA8RXhhbXBsZSBtZXNzYWdlPVwiQ2xpY2tlZCFcIj5cbiAgICAgICAgQ2xpY2sgbWUuLi5cbiAgICAgICAgPC9FeGFtcGxlPlxuXG4gICAgICA7XG5cbmJvZHkuYXBwZW5kKGV4YW1wbGUpO2B9PC9jb2RlPlxuICAgICAgPHA+XG4gICAgICAgIFRoaXMgaXMgdGhlIG1vc3Qgc3RyYWlnaHRmb3J3YXJkIHdheSB0byBjcmVhdGUgeW91ciBvd24gZWxlbWVudHMsIGFuZCBpcyBtb3JlIG9yIGxlc3MgYWtpbiB0byB0aGUgdXNlIG9mIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kIGluIFJlYWN0IGFuZCBSZWFjdGlvbi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgcGF0dGVybiBjb25zaXN0cyBvZiBhIGNsYXNzIHdpdGggYSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kIGFuZCBhbiBvcHRpb25hbCBjb25zdHJ1Y3RvciB0byBhc3NpZ24gaXRzIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnByb3BlcnRpZXM8L2NvZGU+IGFyZ3VtZW50IHRvIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgVGhlIGluc3RhbmNlIG1ldGhvZHMgYXJlIHRoZW4gYXZhaWxhYmxlIGZyb20gd2l0aGluIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kIGJ5IHdheSBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+dGhpczwvY29kZT4ga2V5d29yZC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJdCBpcyBpbXBvcnRhbnQgdG8gcmVhbGlzZSB3aXRoIHRoaXMgcGF0dGVybiB0aGF0IHdoYXQgaXMgcmV0dXJuZWQgYnkgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnJlbmRlcigpPC9jb2RlPiBtZXRob2Qgd2lsbCA8ZW0+bm90PC9lbT4gYmUgYW4gaW5zdGFuY2Ugb2YgdGhlIGNsYXNzIHlvdSBoYXZlIGp1c3QgZGVmaW5lZC5cbiAgICAgICAgSXQgd2lsbCBiZSBhbiBpbnN0YW5jZSBvZiB3aGF0ZXZlciBjbGFzcyBpcyByZWZlcmVuY2VkIGJ5IHRoZSBKU1ggcmV0dXJuZWQgYnkgdGhlIHJlbmRlcigpIG1ldGhvZCwgb3IgYW4gaW5zdGFuY2Ugb2YgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkVsZW1lbnQ8L2NvZGU+IGNsYXNzIGlmIHRoZSB0YWcgbmFtZSBpcyBsb3dlciBjYXNlLlxuICAgICAgICBUaGUgdXRpbGl0eSBvZiB0aGlzIHBhdHRlcm4gcmVhbGx5IG9ubHkgbGllcyBpbiB0aGUgZmFjdCB0aGF0IGl0IGFsbG93cyBKU1ggdG8gYmUgZW5jYXBzdWxhdGVkIHRvZ2V0aGVyIHdpdGggc29tZSBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgdGhhdCBjYW4gYmUgZWFzaWx5IHJlZmVyZW5jZWQuXG4gICAgICA8L3A+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdFJpZ2h0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNleHRlbmRpbmdBbkVhc3lVSUNsYXNzXCI+TmV4dDogRXh0ZW5kaW5nIGFuIEVhc3lVSSBjbGFzczwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2Vhc3lVSUVsZW1lbnRzXCI+UHJldmlvdXM6IEVhc3lVSSBlbGVtZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhlUmVuZGVyTWV0aG9kO1xuIl19