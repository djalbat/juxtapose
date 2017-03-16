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
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nclass Example {\n  constructor(properties) {\n    this.properties = properties;\n  }\n\n  click(message) {\n    alert(message)\n  }\n\n  render() {\n    const { message } = this.properties;\n\n    return (\n\n      <button onClick={() => {\n\n                        this.click(message);\n\n                      }}\n      >\n      Click me...\n      </button>\n\n    );\n  }\n}\n\nconst body = new Body(),\n      example =\n\n        <Example message="Clicked!">\n        Click me...\n        </Example>\n\n      ;\n\nbody.append(example);'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL3RoZVJlbmRlck1ldGhvZC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiTmV4dCIsIlByZXZpb3VzIiwiQ29udGVudHMiLCJCbG9ja0NvZGUiLCJJbmxpbmVDb2RlIiwiVGhlUmVuZGVyTWV0aG9kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsa0JBQVI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNRyxXQUFXSCxRQUFRLGFBQVIsQ0FGakI7QUFBQSxJQUdNSSxZQUFZSixRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNSyxhQUFhTCxRQUFRLGVBQVIsQ0FKbkI7O0FBTUEsSUFBTU0sa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLHlCQUFYO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxpQkFBZjtBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBUTtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BQVI7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQWlERTtBQUFBO0FBQUE7QUFBQTtBQUMrRztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRC9HO0FBQUE7QUFBQSxLQWpERjtBQW9ERTtBQUFBO0FBQUE7QUFBQTtBQUN5QztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRHpDO0FBQUE7QUFDNEg7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUQ1SDtBQUFBO0FBRTBEO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGMUQ7QUFBQTtBQUVpSDtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRmpIO0FBQUE7QUFBQSxLQXBERjtBQXdERTtBQUFBO0FBQUE7QUFBQTtBQUN3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRHhEO0FBQUE7QUFFNEY7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUY1RjtBQUFBO0FBRTRKO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGNUo7QUFBQTtBQUFBO0FBeERGLEdBRkY7QUFrRUQsQ0FuRUQ7O0FBcUVBQyxPQUFPQyxPQUFQLEdBQWlCRixlQUFqQiIsImZpbGUiOiJ0aGVSZW5kZXJNZXRob2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcbiAgXG5jb25zdCBUaGVSZW5kZXJNZXRob2QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjZXh0ZW5kaW5nQW5FYXN5VUlDbGFzc1wiPkV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI2Vhc3lVSUVsZW1lbnRzXCI+RWFzeVVJIGVsZW1lbnRzPC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5UaGUgPElubGluZUNvZGU+cmVuZGVyKCk8L0lubGluZUNvZGU+IG1ldGhvZDwvaDI+XG4gICAgICA8QmxvY2tDb2RlPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSB9ID0gZWFzeXVpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBjbGljayhtZXNzYWdlKSB7XG4gICAgYWxlcnQobWVzc2FnZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgIENsaWNrIG1lLi4uXG4gICAgICA8L2J1dHRvbj5cblxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID1cblxuICAgICAgICA8RXhhbXBsZSBtZXNzYWdlPVwiQ2xpY2tlZCFcIj5cbiAgICAgICAgQ2xpY2sgbWUuLi5cbiAgICAgICAgPC9FeGFtcGxlPlxuXG4gICAgICA7XG5cbmJvZHkuYXBwZW5kKGV4YW1wbGUpO2B9PC9CbG9ja0NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBpcyB0aGUgbW9zdCBzdHJhaWdodGZvcndhcmQgd2F5IHRvIGNyZWF0ZSB5b3VyIG93biBlbGVtZW50cywgYW5kIGlzIG1vcmUgb3IgbGVzcyBha2luIHRvIHRoZSB1c2Ugb2YgdGhlIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2QgaW4gUmVhY3QgYW5kIFJlYWN0aW9uLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZSBwYXR0ZXJuIGNvbnNpc3RzIG9mIGEgY2xhc3Mgd2l0aCBhIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2QgYW5kIGFuIG9wdGlvbmFsIGNvbnN0cnVjdG9yIHRvIGFzc2lnbiBpdHMgPElubGluZUNvZGU+cHJvcGVydGllczwvSW5saW5lQ29kZT4gYXJndW1lbnQgdG8gdGhlIGluc3RhbmNlLlxuICAgICAgICBUaGUgaW5zdGFuY2UgbWV0aG9kcyBhcmUgdGhlbiBhdmFpbGFibGUgZnJvbSB3aXRoaW4gdGhlIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2QgYnkgd2F5IG9mIHRoZSA8SW5saW5lQ29kZT50aGlzPC9JbmxpbmVDb2RlPiBrZXl3b3JkLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEl0IGlzIGltcG9ydGFudCB0byByZWFsaXNlIHRoYXQgd2hhdCBpcyByZXR1cm5lZCB3aWxsIDxlbT5ub3Q8L2VtPiBiZSBhbiBpbnN0YW5jZSBvZiB0aGUgY2xhc3MganVzdCBkZWZpbmVkLlxuICAgICAgICBJdCB3aWxsIGJlIGFuIGluc3RhbmNlIG9mIHdoYXRldmVyIGNsYXNzIGlzIHJlZmVyZW5jZWQgYnkgdGhlIEpTWCB0aGF0IGlzIHJldHVybmVkIGJ5IHRoZSA8SW5saW5lQ29kZT5yZW5kZXIoKTwvSW5saW5lQ29kZT4gbWV0aG9kLCBvciBhbiBpbnN0YW5jZSBvZiB0aGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3MgaWYgdGhlIHRhZyBuYW1lIGlzIGxvd2VyIGNhc2UuXG4gICAgICAgIFRoZSB1dGlsaXR5IG9mIHRoaXMgcGF0dGVybiBvbmx5IGxpZXMgaW4gdGhlIGZhY3QgdGhhdCBpdCBhbGxvd3MgSlNYIHRvIGJlIGVuY2Fwc3VsYXRlZCB0b2dldGhlciB3aXRoIHNvbWUgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IHRoYXQgY2FuIGJlIGVhc2lseSByZWZlcmVuY2VkLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRoZVJlbmRlck1ldGhvZDtcbiJdfQ==