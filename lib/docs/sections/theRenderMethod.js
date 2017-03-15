'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var TheRenderMethod = function TheRenderMethod() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#extendingAnEasyUIClass' },
        'Extending an EasyUI class'
      ),
      React.createElement(
        Previous,
        { href: '#easyUIElements' },
        'EasyUI elements'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'The ',
      React.createElement(
        InlineCode,
        null,
        'render()'
      ),
      ' method'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nclass Example {\n  constructor(properties) {\n    this.properties = properties;\n  }\n\n  click(message) {\n    alert(message)\n  }\n\n  render() {\n    const { message } = this.properties;\n\n    return (\n\n      <button onClick={() => {\n\n                        this.click(message);\n\n                      }}\n      >\n        Click me...\n      </button>\n\n    );\n  }\n}\n\nconst body = new Body(),\n      example =\n\n        <Example message="Clicked!">\n        Click me...\n        </Example>\n\n      ;\n\nbody.append(example);'
    ),
    React.createElement(
      'p',
      null,
      'This is the most straightforward way to create your own elements, and is more or less akin to the use of the ',
      React.createElement(
        InlineCode,
        null,
        'render()'
      ),
      ' method in React and Reaction.'
    ),
    React.createElement(
      'p',
      null,
      'The pattern consists of a class with a ',
      React.createElement(
        InlineCode,
        null,
        'render()'
      ),
      ' method and an optional constructor to assign its ',
      React.createElement(
        InlineCode,
        null,
        'properties'
      ),
      ' argument to the instance. The instance methods are then available from within the ',
      React.createElement(
        InlineCode,
        null,
        'render()'
      ),
      ' method by way of the ',
      React.createElement(
        InlineCode,
        null,
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
        InlineCode,
        null,
        'render()'
      ),
      ' method, or an instance of the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class if the tag name is lower case. The utility of this pattern only lies in the fact that it allows JSX to be encapsulated together with some additional functionality that can be easily referenced.'
    )
  );
};

module.exports = TheRenderMethod;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL3RoZVJlbmRlck1ldGhvZC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiTmV4dCIsIlByZXZpb3VzIiwiQ29udGVudHMiLCJCbG9ja0NvZGUiLCJJbmxpbmVDb2RlIiwiVGhlUmVuZGVyTWV0aG9kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsa0JBQVI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNRyxXQUFXSCxRQUFRLGFBQVIsQ0FGakI7QUFBQSxJQUdNSSxZQUFZSixRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNSyxhQUFhTCxRQUFRLGVBQVIsQ0FKbkI7O0FBTUEsSUFBTU0sa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLHlCQUFYO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxpQkFBZjtBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBUTtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BQVI7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQWlERTtBQUFBO0FBQUE7QUFBQTtBQUMrRztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRC9HO0FBQUE7QUFBQSxLQWpERjtBQW9ERTtBQUFBO0FBQUE7QUFBQTtBQUN5QztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRHpDO0FBQUE7QUFDNEg7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUQ1SDtBQUFBO0FBRTBEO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGMUQ7QUFBQTtBQUVpSDtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRmpIO0FBQUE7QUFBQSxLQXBERjtBQXdERTtBQUFBO0FBQUE7QUFBQTtBQUN3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRHhEO0FBQUE7QUFFNEY7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUY1RjtBQUFBO0FBRTRKO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGNUo7QUFBQTtBQUFBO0FBeERGLEdBRkY7QUFrRUQsQ0FuRUQ7O0FBcUVBQyxPQUFPQyxPQUFQLEdBQWlCRixlQUFqQiIsImZpbGUiOiJ0aGVSZW5kZXJNZXRob2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcbiAgXG5jb25zdCBUaGVSZW5kZXJNZXRob2QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjZXh0ZW5kaW5nQW5FYXN5VUlDbGFzc1wiPkV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI2Vhc3lVSUVsZW1lbnRzXCI+RWFzeVVJIGVsZW1lbnRzPC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5UaGUgPElubGluZUNvZGU+cmVuZGVyKCk8L0lubGluZUNvZGU+IG1ldGhvZDwvaDI+XG4gICAgICA8QmxvY2tDb2RlPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSB9ID0gZWFzeXVpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBjbGljayhtZXNzYWdlKSB7XG4gICAgYWxlcnQobWVzc2FnZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQ2xpY2sgbWUuLi5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPVxuXG4gICAgICAgIDxFeGFtcGxlIG1lc3NhZ2U9XCJDbGlja2VkIVwiPlxuICAgICAgICBDbGljayBtZS4uLlxuICAgICAgICA8L0V4YW1wbGU+XG5cbiAgICAgIDtcblxuYm9keS5hcHBlbmQoZXhhbXBsZSk7YH08L0Jsb2NrQ29kZT5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGlzIHRoZSBtb3N0IHN0cmFpZ2h0Zm9yd2FyZCB3YXkgdG8gY3JlYXRlIHlvdXIgb3duIGVsZW1lbnRzLCBhbmQgaXMgbW9yZSBvciBsZXNzIGFraW4gdG8gdGhlIHVzZSBvZiB0aGUgPElubGluZUNvZGU+cmVuZGVyKCk8L0lubGluZUNvZGU+IG1ldGhvZCBpbiBSZWFjdCBhbmQgUmVhY3Rpb24uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIHBhdHRlcm4gY29uc2lzdHMgb2YgYSBjbGFzcyB3aXRoIGEgPElubGluZUNvZGU+cmVuZGVyKCk8L0lubGluZUNvZGU+IG1ldGhvZCBhbmQgYW4gb3B0aW9uYWwgY29uc3RydWN0b3IgdG8gYXNzaWduIGl0cyA8SW5saW5lQ29kZT5wcm9wZXJ0aWVzPC9JbmxpbmVDb2RlPiBhcmd1bWVudCB0byB0aGUgaW5zdGFuY2UuXG4gICAgICAgIFRoZSBpbnN0YW5jZSBtZXRob2RzIGFyZSB0aGVuIGF2YWlsYWJsZSBmcm9tIHdpdGhpbiB0aGUgPElubGluZUNvZGU+cmVuZGVyKCk8L0lubGluZUNvZGU+IG1ldGhvZCBieSB3YXkgb2YgdGhlIDxJbmxpbmVDb2RlPnRoaXM8L0lubGluZUNvZGU+IGtleXdvcmQuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSXQgaXMgaW1wb3J0YW50IHRvIHJlYWxpc2UgdGhhdCB3aGF0IGlzIHJldHVybmVkIHdpbGwgPGVtPm5vdDwvZW0+IGJlIGFuIGluc3RhbmNlIG9mIHRoZSBjbGFzcyBqdXN0IGRlZmluZWQuXG4gICAgICAgIEl0IHdpbGwgYmUgYW4gaW5zdGFuY2Ugb2Ygd2hhdGV2ZXIgY2xhc3MgaXMgcmVmZXJlbmNlZCBieSB0aGUgSlNYIHRoYXQgaXMgcmV0dXJuZWQgYnkgdGhlIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2QsIG9yIGFuIGluc3RhbmNlIG9mIHRoZSA8SW5saW5lQ29kZT5FbGVtZW50PC9JbmxpbmVDb2RlPiBjbGFzcyBpZiB0aGUgdGFnIG5hbWUgaXMgbG93ZXIgY2FzZS5cbiAgICAgICAgVGhlIHV0aWxpdHkgb2YgdGhpcyBwYXR0ZXJuIG9ubHkgbGllcyBpbiB0aGUgZmFjdCB0aGF0IGl0IGFsbG93cyBKU1ggdG8gYmUgZW5jYXBzdWxhdGVkIHRvZ2V0aGVyIHdpdGggc29tZSBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgdGhhdCBjYW4gYmUgZWFzaWx5IHJlZmVyZW5jZWQuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhlUmVuZGVyTWV0aG9kO1xuIl19