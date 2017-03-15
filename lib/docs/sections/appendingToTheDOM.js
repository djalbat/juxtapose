'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var GettingStarted = function GettingStarted() {
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
        'Previous: JSX is great'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Appending to the DOM'
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

module.exports = GettingStarted;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2FwcGVuZGluZ1RvVGhlRE9NLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJOZXh0IiwiUHJldmlvdXMiLCJDb250ZW50cyIsIkJsb2NrQ29kZSIsIklubGluZUNvZGUiLCJHZXR0aW5nU3RhcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGtCQUFSOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTUksWUFBWUosUUFBUSxjQUFSLENBSGxCO0FBQUEsSUFJTUssYUFBYUwsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU1NLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sTUFBSyxxQkFBWDtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLE1BQUssYUFBZjtBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFFMkM7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUYzQztBQUFBO0FBQUEsS0F4QkY7QUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFDcUI7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQURyQjtBQUFBO0FBQzhHO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEOUc7QUFBQTtBQUV1QztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRnZDO0FBQUE7QUFHQztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BSEQ7QUFBQTtBQUcyRDtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BSDNEO0FBQUE7QUFBQSxLQTdCRjtBQWtDRTtBQUFBO0FBQUE7QUFBQTtBQUM4QjtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRDlCO0FBQUE7QUFBQTtBQWxDRixHQUZGO0FBMENELENBM0NEOztBQTZDQUMsT0FBT0MsT0FBUCxHQUFpQkYsY0FBakIiLCJmaWxlIjoiYXBwZW5kaW5nVG9UaGVET00uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcbiAgXG5jb25zdCBHZXR0aW5nU3RhcnRlZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPE5leHQgaHJlZj1cIiNmdW5jdGlvbmFsRWxlbWVudHNcIj5GdW5jdGlvbmFsIGVsZW1lbnRzPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNqc3hJc0dyZWF0XCI+UHJldmlvdXM6IEpTWCBpcyBncmVhdDwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+QXBwZW5kaW5nIHRvIHRoZSBET008L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IERpdiB9ID0gZWFzeXVpO1xuXG5jb25zdCByb290RGl2RE9NRWxlbWVudCA9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRieUlkKCdyb290JyksXG4gICAgICByb290RGl2RWxlbWVudCA9XG4gICAgICAgIERpdi5mcm9tRE9NRWxlbWVudChyb290RGl2RE9NRWxlbWVudCk7XG5cbnJvb3REaXZFbGVtZW50LmFwcGVuZChcblxuICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICBBbiBlYXN5IGV4YW1wbGUuXG4gIDwvZGl2PlxuXG4pO2B9PC9CbG9ja0NvZGU+XG4gICAgICA8cD5cbkVhc3lVSSBlbGVtZW50cyBjcmVhdGVkIHVzaW5nIEpTWCBuZWVkIHRvIGJlIHB1dCBpbiB0aGUgRE9NIHNvbWVob3cuXG5UaGUgZXhhbXBsZSBoZXJlIGlzIGVxdWl2YWxlbnQgdG8gdGhlIHVzZSBvZiB0aGUgPElubGluZUNvZGU+UmVhY3RET00ucmVuZGVyKC4uLik8L0lubGluZUNvZGU+IG1ldGhvZCBpbiBSZWFjdCBvciBSZWFjdGlvbi5cbllvdSBhdCBsZWFzdCBuZWVkIHRvIGRvIHRoaXMgb25jZSwgYnV0IG9ubHkgb25jZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuSWYgeW91IGFyZSBub3QgaGFwcHkgdXNpbmcgPElubGluZUNvZGU+Ym9keTwvSW5saW5lQ29kZT4gRE9NIGVsZW1lbnQsIHRoZW4gY3JlYXRlIGFuIGVsZW1lbnQgdGhhdCByZWZlcmVuY2VzIGEgcm9vdCA8SW5saW5lQ29kZT5kaXY8L0lubGluZUNvZGU+IGVsZW1lbnQsIHNheSwgZWl0aGVyXG5ieSBwYXNzaW5nIHRoZSByZXF1aXNpdGUgQ1NTIHNlbGVjdG9yIHRvIHRoZSA8SW5saW5lQ29kZT5EaXY8L0lubGluZUNvZGU+IGNsYXNzIGNvbnN0cnVjdG9yLCBvciwgaWYgeW91IGhhdmUgdGhlIERPTSBlbGVtZW50IHRvIGhhbmQsIGJ5IHVzaW5nIHRoZVxuc3RhdGljIDxJbmxpbmVDb2RlPmZyb21IVE1MKCk8L0lubGluZUNvZGU+IGZhY3RvcnkgbWV0aG9kIG9mIHRoZSA8SW5saW5lQ29kZT5EaXY8L0lubGluZUNvZGU+IGNsYXNzLCBhcyBpbiB0aGUgZXhhbXBsZSBoZXJlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG5BbGwgdGhlIGV4YW1wbGVzIGhlcmUgYXBwZW5kIHRvIHRoZSA8SW5saW5lQ29kZT5ib2R5PC9JbmxpbmVDb2RlPiBET00gZWxlbWVudCBidXQgaW4gcHJhY3RpY2UgaXQgaXMgZW50aXJlbHkgdXAgdG8geW91LlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdldHRpbmdTdGFydGVkO1xuIl19