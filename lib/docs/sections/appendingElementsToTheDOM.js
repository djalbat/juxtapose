'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var AppendingElementsToTheDOM = function AppendingElementsToTheDOM() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#functionalElements' },
        'Functional elements'
      ),
      React.createElement(
        Previous,
        { href: '#jsxIsGreat' },
        'JSX is great'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Appending elements to the DOM'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Div } = easyui;\n\nconst rootDivDOMElement =\n        document.getElementbyId(\'root\'),\n      rootDivElement =\n        Div.fromDOMElement(rootDivDOMElement);\n\nrootDivElement.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'EasyUI elements created using JSX need to be put in the DOM somehow. The example here is equivalent to the use of the ',
      React.createElement(
        InlineCode,
        null,
        'ReactDOM.render(...)'
      ),
      ' method in React or Reaction. You at least need to do this once, but only once.'
    ),
    React.createElement(
      'p',
      null,
      'If you are not happy using ',
      React.createElement(
        InlineCode,
        null,
        'body'
      ),
      ' DOM element, then create an element that references a root ',
      React.createElement(
        InlineCode,
        null,
        'div'
      ),
      ' element, say, either by passing the requisite CSS selector to the ',
      React.createElement(
        InlineCode,
        null,
        'Div'
      ),
      ' class constructor, or, if you have the DOM element to hand, by using the static ',
      React.createElement(
        InlineCode,
        null,
        'fromHTML()'
      ),
      ' factory method of the ',
      React.createElement(
        InlineCode,
        null,
        'Div'
      ),
      ' class, as in the example here.'
    ),
    React.createElement(
      'p',
      null,
      'All the examples here append to the ',
      React.createElement(
        InlineCode,
        null,
        'body'
      ),
      ' DOM element but in practice it is entirely up to you.'
    )
  );
};

module.exports = AppendingElementsToTheDOM;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2FwcGVuZGluZ0VsZW1lbnRzVG9UaGVET00uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIk5leHQiLCJQcmV2aW91cyIsIkNvbnRlbnRzIiwiQmxvY2tDb2RlIiwiSW5saW5lQ29kZSIsIkFwcGVuZGluZ0VsZW1lbnRzVG9UaGVET00iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFdBQVdGLFFBQVEsYUFBUixDQURqQjtBQUFBLElBRU1HLFdBQVdILFFBQVEsYUFBUixDQUZqQjtBQUFBLElBR01JLFlBQVlKLFFBQVEsY0FBUixDQUhsQjtBQUFBLElBSU1LLGFBQWFMLFFBQVEsZUFBUixDQUpuQjs7QUFNQSxJQUFNTSw0QkFBNEIsU0FBNUJBLHlCQUE0QixHQUFNO0FBQ3RDLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLHFCQUFYO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxhQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQXdCRTtBQUFBO0FBQUE7QUFBQTtBQUUyQztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRjNDO0FBQUE7QUFBQSxLQXhCRjtBQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUNxQjtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRHJCO0FBQUE7QUFDOEc7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUQ5RztBQUFBO0FBRXVDO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGdkM7QUFBQTtBQUdDO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FIRDtBQUFBO0FBRzJEO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FIM0Q7QUFBQTtBQUFBLEtBN0JGO0FBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQzhCO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEOUI7QUFBQTtBQUFBO0FBbENGLEdBRkY7QUEwQ0QsQ0EzQ0Q7O0FBNkNBQyxPQUFPQyxPQUFQLEdBQWlCRix5QkFBakIiLCJmaWxlIjoiYXBwZW5kaW5nRWxlbWVudHNUb1RoZURPTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpLFxuICAgICAgQmxvY2tDb2RlID0gcmVxdWlyZSgnLi4vYmxvY2tDb2RlJyksXG4gICAgICBJbmxpbmVDb2RlID0gcmVxdWlyZSgnLi4vaW5saW5lQ29kZScpO1xuICBcbmNvbnN0IEFwcGVuZGluZ0VsZW1lbnRzVG9UaGVET00gPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjZnVuY3Rpb25hbEVsZW1lbnRzXCI+RnVuY3Rpb25hbCBlbGVtZW50czwvTmV4dD5cbiAgICAgICAgPFByZXZpb3VzIGhyZWY9XCIjanN4SXNHcmVhdFwiPkpTWCBpcyBncmVhdDwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+QXBwZW5kaW5nIGVsZW1lbnRzIHRvIHRoZSBET008L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IERpdiB9ID0gZWFzeXVpO1xuXG5jb25zdCByb290RGl2RE9NRWxlbWVudCA9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRieUlkKCdyb290JyksXG4gICAgICByb290RGl2RWxlbWVudCA9XG4gICAgICAgIERpdi5mcm9tRE9NRWxlbWVudChyb290RGl2RE9NRWxlbWVudCk7XG5cbnJvb3REaXZFbGVtZW50LmFwcGVuZChcblxuICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICBBbiBlYXN5IGV4YW1wbGUuXG4gIDwvZGl2PlxuXG4pO2B9PC9CbG9ja0NvZGU+XG4gICAgICA8cD5cbkVhc3lVSSBlbGVtZW50cyBjcmVhdGVkIHVzaW5nIEpTWCBuZWVkIHRvIGJlIHB1dCBpbiB0aGUgRE9NIHNvbWVob3cuXG5UaGUgZXhhbXBsZSBoZXJlIGlzIGVxdWl2YWxlbnQgdG8gdGhlIHVzZSBvZiB0aGUgPElubGluZUNvZGU+UmVhY3RET00ucmVuZGVyKC4uLik8L0lubGluZUNvZGU+IG1ldGhvZCBpbiBSZWFjdCBvciBSZWFjdGlvbi5cbllvdSBhdCBsZWFzdCBuZWVkIHRvIGRvIHRoaXMgb25jZSwgYnV0IG9ubHkgb25jZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuSWYgeW91IGFyZSBub3QgaGFwcHkgdXNpbmcgPElubGluZUNvZGU+Ym9keTwvSW5saW5lQ29kZT4gRE9NIGVsZW1lbnQsIHRoZW4gY3JlYXRlIGFuIGVsZW1lbnQgdGhhdCByZWZlcmVuY2VzIGEgcm9vdCA8SW5saW5lQ29kZT5kaXY8L0lubGluZUNvZGU+IGVsZW1lbnQsIHNheSwgZWl0aGVyXG5ieSBwYXNzaW5nIHRoZSByZXF1aXNpdGUgQ1NTIHNlbGVjdG9yIHRvIHRoZSA8SW5saW5lQ29kZT5EaXY8L0lubGluZUNvZGU+IGNsYXNzIGNvbnN0cnVjdG9yLCBvciwgaWYgeW91IGhhdmUgdGhlIERPTSBlbGVtZW50IHRvIGhhbmQsIGJ5IHVzaW5nIHRoZVxuc3RhdGljIDxJbmxpbmVDb2RlPmZyb21IVE1MKCk8L0lubGluZUNvZGU+IGZhY3RvcnkgbWV0aG9kIG9mIHRoZSA8SW5saW5lQ29kZT5EaXY8L0lubGluZUNvZGU+IGNsYXNzLCBhcyBpbiB0aGUgZXhhbXBsZSBoZXJlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG5BbGwgdGhlIGV4YW1wbGVzIGhlcmUgYXBwZW5kIHRvIHRoZSA8SW5saW5lQ29kZT5ib2R5PC9JbmxpbmVDb2RlPiBET00gZWxlbWVudCBidXQgaW4gcHJhY3RpY2UgaXQgaXMgZW50aXJlbHkgdXAgdG8geW91LlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcGVuZGluZ0VsZW1lbnRzVG9UaGVET007XG4iXX0=