'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var AGoodExampleThisDocumentation = function AGoodExampleThisDocumentation() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#theElementClass' },
        'The ',
        React.createElement(
          InlineCode,
          null,
          'Element'
        ),
        ' class'
      ),
      React.createElement(
        Previous,
        { href: '#extendingAnEasyUIClass' },
        'Previous: Extending an EasyUI class'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'A good example, this documentation'
    ),
    React.createElement(
      BlockCode,
      null,
      'const insertSections = () => {\n  const headerDOMElement = document.querySelector(\'header\'),\n        header = Element.fromDOMElement(headerDOMElement);\n\n  forEachSection((section) => {\n    section.insertAfter(header);\n  });\n};\n\nconst revealSection = () => {\n  forEachSection((section) => {\n    section.hide();\n  });\n\n  const section = fragmentToSectionMap[fragment]\n                    || introduction;\n\n  section.show();\n};\n\nconst forEachSection = (callback) => {\n  const fragments = Object.keys(fragmentToSectionMap);\n\n  fragments.forEach((fragment) => {\n    const section = fragmentToSectionMap[fragment];\n\n    callback(section);\n  });\n};\n\ninsertSections();\n\nfragment.onChange(revealSection);\n\nrevealSection();'
    ),
    React.createElement(
      'p',
      null,
      'The ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI-JSX/blob/master/es6/docs.js' },
        'docs.js'
      ),
      ' file shows how easy it is to put together a basic single page web application. The approach will not scale indefinitely, sooner or later the sections would have to be generated from a data source rather than be hard-coded.'
    ),
    React.createElement(
      'p',
      null,
      'Nonetheless, it serves to highlight a key point, which is that all elements are instances of the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class, or a class that extends it. In this case this means that the ',
      React.createElement(
        InlineCode,
        null,
        'show()'
      ),
      ' and ',
      React.createElement(
        InlineCode,
        null,
        'hide()'
      ),
      ' methods can been used to reveal the relevant section whenever the hash fragment changes.'
    )
  );
};

module.exports = AGoodExampleThisDocumentation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL3RoaXNEb2N1bWVudGF0aW9uQXNBbkV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIk5leHQiLCJQcmV2aW91cyIsIkNvbnRlbnRzIiwiQmxvY2tDb2RlIiwiSW5saW5lQ29kZSIsIkFHb29kRXhhbXBsZVRoaXNEb2N1bWVudGF0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsa0JBQVI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNRyxXQUFXSCxRQUFRLGFBQVIsQ0FGakI7QUFBQSxJQUdNSSxZQUFZSixRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNSyxhQUFhTCxRQUFRLGVBQVIsQ0FKbkI7O0FBTUEsSUFBTU0sZ0NBQWdDLFNBQWhDQSw2QkFBZ0MsR0FBTTtBQUMxQyxTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sTUFBSyxrQkFBWDtBQUFBO0FBQWtDO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUEsU0FBbEM7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxNQUFLLHlCQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQTBDRTtBQUFBO0FBQUE7QUFBQTtBQUNNO0FBQUE7QUFBQSxVQUFHLE1BQUssK0RBQVI7QUFBQTtBQUFBLE9BRE47QUFBQTtBQUFBLEtBMUNGO0FBOENFO0FBQUE7QUFBQTtBQUFBO0FBQ21HO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEbkc7QUFBQTtBQUVtQztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRm5DO0FBQUE7QUFFdUU7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUZ2RTtBQUFBO0FBQUE7QUE5Q0YsR0FGRjtBQXVERCxDQXhERDs7QUEwREFDLE9BQU9DLE9BQVAsR0FBaUJGLDZCQUFqQiIsImZpbGUiOiJ0aGlzRG9jdW1lbnRhdGlvbkFzQW5FeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IE5leHQgPSByZXF1aXJlKCcuLi9uZXh0JyksXG4gICAgICBQcmV2aW91cyA9IHJlcXVpcmUoJy4uL3ByZXZpb3VzJyksXG4gICAgICBDb250ZW50cyA9IHJlcXVpcmUoJy4uL2NvbnRlbnRzJyksXG4gICAgICBCbG9ja0NvZGUgPSByZXF1aXJlKCcuLi9ibG9ja0NvZGUnKSxcbiAgICAgIElubGluZUNvZGUgPSByZXF1aXJlKCcuLi9pbmxpbmVDb2RlJyk7XG4gIFxuY29uc3QgQUdvb2RFeGFtcGxlVGhpc0RvY3VtZW50YXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjdGhlRWxlbWVudENsYXNzXCI+VGhlIDxJbmxpbmVDb2RlPkVsZW1lbnQ8L0lubGluZUNvZGU+IGNsYXNzPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNleHRlbmRpbmdBbkVhc3lVSUNsYXNzXCI+UHJldmlvdXM6IEV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkEgZ29vZCBleGFtcGxlLCB0aGlzIGRvY3VtZW50YXRpb248L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YGNvbnN0IGluc2VydFNlY3Rpb25zID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyksXG4gICAgICAgIGhlYWRlciA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoaGVhZGVyRE9NRWxlbWVudCk7XG5cbiAgZm9yRWFjaFNlY3Rpb24oKHNlY3Rpb24pID0+IHtcbiAgICBzZWN0aW9uLmluc2VydEFmdGVyKGhlYWRlcik7XG4gIH0pO1xufTtcblxuY29uc3QgcmV2ZWFsU2VjdGlvbiA9ICgpID0+IHtcbiAgZm9yRWFjaFNlY3Rpb24oKHNlY3Rpb24pID0+IHtcbiAgICBzZWN0aW9uLmhpZGUoKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGZyYWdtZW50VG9TZWN0aW9uTWFwW2ZyYWdtZW50XVxuICAgICAgICAgICAgICAgICAgICB8fCBpbnRyb2R1Y3Rpb247XG5cbiAgc2VjdGlvbi5zaG93KCk7XG59O1xuXG5jb25zdCBmb3JFYWNoU2VjdGlvbiA9IChjYWxsYmFjaykgPT4ge1xuICBjb25zdCBmcmFnbWVudHMgPSBPYmplY3Qua2V5cyhmcmFnbWVudFRvU2VjdGlvbk1hcCk7XG5cbiAgZnJhZ21lbnRzLmZvckVhY2goKGZyYWdtZW50KSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGZyYWdtZW50VG9TZWN0aW9uTWFwW2ZyYWdtZW50XTtcblxuICAgIGNhbGxiYWNrKHNlY3Rpb24pO1xuICB9KTtcbn07XG5cbmluc2VydFNlY3Rpb25zKCk7XG5cbmZyYWdtZW50Lm9uQ2hhbmdlKHJldmVhbFNlY3Rpb24pO1xuXG5yZXZlYWxTZWN0aW9uKCk7YH08L0Jsb2NrQ29kZT5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L0Vhc3lVSS1KU1gvYmxvYi9tYXN0ZXIvZXM2L2RvY3MuanNcIj5kb2NzLmpzPC9hPiBmaWxlIHNob3dzIGhvdyBlYXN5IGl0IGlzIHRvIHB1dCB0b2dldGhlciBhIGJhc2ljIHNpbmdsZSBwYWdlIHdlYiBhcHBsaWNhdGlvbi5cbiAgICAgICAgVGhlIGFwcHJvYWNoIHdpbGwgbm90IHNjYWxlIGluZGVmaW5pdGVseSwgc29vbmVyIG9yIGxhdGVyIHRoZSBzZWN0aW9ucyB3b3VsZCBoYXZlIHRvIGJlIGdlbmVyYXRlZCBmcm9tIGEgZGF0YSBzb3VyY2UgcmF0aGVyIHRoYW4gYmUgaGFyZC1jb2RlZC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBOb25ldGhlbGVzcywgaXQgc2VydmVzIHRvIGhpZ2hsaWdodCBhIGtleSBwb2ludCwgd2hpY2ggaXMgdGhhdCBhbGwgZWxlbWVudHMgYXJlIGluc3RhbmNlcyBvZiB0aGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3MsIG9yIGEgY2xhc3MgdGhhdCBleHRlbmRzIGl0LlxuICAgICAgICBJbiB0aGlzIGNhc2UgdGhpcyBtZWFucyB0aGF0IHRoZSA8SW5saW5lQ29kZT5zaG93KCk8L0lubGluZUNvZGU+IGFuZCA8SW5saW5lQ29kZT5oaWRlKCk8L0lubGluZUNvZGU+IG1ldGhvZHMgY2FuIGJlZW4gdXNlZCB0byByZXZlYWwgdGhlIHJlbGV2YW50IHNlY3Rpb24gd2hlbmV2ZXIgdGhlIGhhc2ggZnJhZ21lbnQgY2hhbmdlcy5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQUdvb2RFeGFtcGxlVGhpc0RvY3VtZW50YXRpb247XG4iXX0=