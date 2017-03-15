'use strict';

require('../easyui-jsx');

var ASimpleForm = function ASimpleForm() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'previous' },
        React.createElement(
          'a',
          { href: '#theElementClass' },
          'Previous: The ',
          React.createElement(
            'code',
            { className: 'inline' },
            'Element'
          ),
          ' class'
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
      'Appending to the DOM'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Div } = easyui;\n\nconst rootDivDOMElement =\n        document.getElementbyId(\'root\'),\n      rootDivElement =\n        Div.fromDOMElement(rootDivDOMElement);\n\nrootDivElement.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'EasyUI elements created using JSX need to be put in the DOM somehow. The example here is equivalent to the use of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'ReactDOM.render(...)'
      ),
      ' method in React or Reaction. You at least need to do this once, but only once.'
    ),
    React.createElement(
      'p',
      null,
      'If you are not happy using ',
      React.createElement(
        'code',
        { className: 'inline' },
        'body'
      ),
      ' DOM element, then create an element that references a root ',
      React.createElement(
        'code',
        { className: 'inline' },
        'div'
      ),
      ' element, say, either by passing the requisite CSS selector to the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Div'
      ),
      ' class constructor, or, if you have the DOM element to hand, by using the static ',
      React.createElement(
        'code',
        { className: 'inline' },
        'fromHTML()'
      ),
      ' factory method of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Div'
      ),
      ' class, as in the example here.'
    ),
    React.createElement(
      'p',
      null,
      'All the examples here append to the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'body'
      ),
      ' DOM element but in practice it is entirely up to you.'
    )
  );
};

module.exports = ASimpleForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL2FTaW1wbGVGb3JtLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJBU2ltcGxlRm9ybSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGVBQVI7O0FBRUEsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFVBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQXlDO0FBQUE7QUFBQSxjQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLFdBQXpDO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFVBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxXQUFSO0FBQUE7QUFBQTtBQURGO0FBSkYsS0FERjtBQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FURjtBQVVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBVkY7QUEyQkU7QUFBQTtBQUFBO0FBQUE7QUFFMkM7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGM0M7QUFBQTtBQUFBLEtBM0JGO0FBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQ3FCO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRHJCO0FBQUE7QUFDcUg7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FEckg7QUFBQTtBQUV1QztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUZ2QztBQUFBO0FBR0M7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FIRDtBQUFBO0FBR2tFO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BSGxFO0FBQUE7QUFBQSxLQWhDRjtBQXFDRTtBQUFBO0FBQUE7QUFBQTtBQUM4QjtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUQ5QjtBQUFBO0FBQUE7QUFyQ0YsR0FGRjtBQTZDRCxDQTlDRDs7QUFnREFDLE9BQU9DLE9BQVAsR0FBaUJGLFdBQWpCIiwiZmlsZSI6ImFTaW1wbGVGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IEFTaW1wbGVGb3JtID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmV2aW91c1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdGhlRWxlbWVudENsYXNzXCI+UHJldmlvdXM6IFRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5FbGVtZW50PC9jb2RlPiBjbGFzczwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjY29udGVudHNcIj5Db250ZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+QXBwZW5kaW5nIHRvIHRoZSBET008L2gyPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IERpdiB9ID0gZWFzeXVpO1xuXG5jb25zdCByb290RGl2RE9NRWxlbWVudCA9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRieUlkKCdyb290JyksXG4gICAgICByb290RGl2RWxlbWVudCA9XG4gICAgICAgIERpdi5mcm9tRE9NRWxlbWVudChyb290RGl2RE9NRWxlbWVudCk7XG5cbnJvb3REaXZFbGVtZW50LmFwcGVuZChcblxuICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICBBbiBlYXN5IGV4YW1wbGUuXG4gIDwvZGl2PlxuXG4pO2B9PC9jb2RlPlxuICAgICAgPHA+XG5FYXN5VUkgZWxlbWVudHMgY3JlYXRlZCB1c2luZyBKU1ggbmVlZCB0byBiZSBwdXQgaW4gdGhlIERPTSBzb21laG93LlxuVGhlIGV4YW1wbGUgaGVyZSBpcyBlcXVpdmFsZW50IHRvIHRoZSB1c2Ugb2YgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPlJlYWN0RE9NLnJlbmRlciguLi4pPC9jb2RlPiBtZXRob2QgaW4gUmVhY3Qgb3IgUmVhY3Rpb24uXG5Zb3UgYXQgbGVhc3QgbmVlZCB0byBkbyB0aGlzIG9uY2UsIGJ1dCBvbmx5IG9uY2UuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbklmIHlvdSBhcmUgbm90IGhhcHB5IHVzaW5nIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmJvZHk8L2NvZGU+IERPTSBlbGVtZW50LCB0aGVuIGNyZWF0ZSBhbiBlbGVtZW50IHRoYXQgcmVmZXJlbmNlcyBhIHJvb3QgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+ZGl2PC9jb2RlPiBlbGVtZW50LCBzYXksIGVpdGhlclxuYnkgcGFzc2luZyB0aGUgcmVxdWlzaXRlIENTUyBzZWxlY3RvciB0byB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RGl2PC9jb2RlPiBjbGFzcyBjb25zdHJ1Y3Rvciwgb3IsIGlmIHlvdSBoYXZlIHRoZSBET00gZWxlbWVudCB0byBoYW5kLCBieSB1c2luZyB0aGVcbnN0YXRpYyA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5mcm9tSFRNTCgpPC9jb2RlPiBmYWN0b3J5IG1ldGhvZCBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RGl2PC9jb2RlPiBjbGFzcywgYXMgaW4gdGhlIGV4YW1wbGUgaGVyZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuQWxsIHRoZSBleGFtcGxlcyBoZXJlIGFwcGVuZCB0byB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+Ym9keTwvY29kZT4gRE9NIGVsZW1lbnQgYnV0IGluIHByYWN0aWNlIGl0IGlzIGVudGlyZWx5IHVwIHRvIHlvdS5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBU2ltcGxlRm9ybTtcbiJdfQ==