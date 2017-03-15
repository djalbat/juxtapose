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
        'Extending an EasyUI class'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'The example of this documentation'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL3RoZUV4YW1wbGVPZlRoaXNEb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJOZXh0IiwiUHJldmlvdXMiLCJDb250ZW50cyIsIkJsb2NrQ29kZSIsIklubGluZUNvZGUiLCJBR29vZEV4YW1wbGVUaGlzRG9jdW1lbnRhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGtCQUFSOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTUksWUFBWUosUUFBUSxjQUFSLENBSGxCO0FBQUEsSUFJTUssYUFBYUwsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU1NLGdDQUFnQyxTQUFoQ0EsNkJBQWdDLEdBQU07QUFDMUMsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQUssa0JBQVg7QUFBQTtBQUFrQztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLFNBQWxDO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyx5QkFBZjtBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUEwQ0U7QUFBQTtBQUFBO0FBQUE7QUFDTTtBQUFBO0FBQUEsVUFBRyxNQUFLLCtEQUFSO0FBQUE7QUFBQSxPQUROO0FBQUE7QUFBQSxLQTFDRjtBQThDRTtBQUFBO0FBQUE7QUFBQTtBQUNtRztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRG5HO0FBQUE7QUFFbUM7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUZuQztBQUFBO0FBRXVFO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGdkU7QUFBQTtBQUFBO0FBOUNGLEdBRkY7QUF1REQsQ0F4REQ7O0FBMERBQyxPQUFPQyxPQUFQLEdBQWlCRiw2QkFBakIiLCJmaWxlIjoidGhlRXhhbXBsZU9mVGhpc0RvY3VtZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcbiAgXG5jb25zdCBBR29vZEV4YW1wbGVUaGlzRG9jdW1lbnRhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPE5leHQgaHJlZj1cIiN0aGVFbGVtZW50Q2xhc3NcIj5UaGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3M8L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI2V4dGVuZGluZ0FuRWFzeVVJQ2xhc3NcIj5FeHRlbmRpbmcgYW4gRWFzeVVJIGNsYXNzPC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5UaGUgZXhhbXBsZSBvZiB0aGlzIGRvY3VtZW50YXRpb248L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YGNvbnN0IGluc2VydFNlY3Rpb25zID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyksXG4gICAgICAgIGhlYWRlciA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoaGVhZGVyRE9NRWxlbWVudCk7XG5cbiAgZm9yRWFjaFNlY3Rpb24oKHNlY3Rpb24pID0+IHtcbiAgICBzZWN0aW9uLmluc2VydEFmdGVyKGhlYWRlcik7XG4gIH0pO1xufTtcblxuY29uc3QgcmV2ZWFsU2VjdGlvbiA9ICgpID0+IHtcbiAgZm9yRWFjaFNlY3Rpb24oKHNlY3Rpb24pID0+IHtcbiAgICBzZWN0aW9uLmhpZGUoKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGZyYWdtZW50VG9TZWN0aW9uTWFwW2ZyYWdtZW50XVxuICAgICAgICAgICAgICAgICAgICB8fCBpbnRyb2R1Y3Rpb247XG5cbiAgc2VjdGlvbi5zaG93KCk7XG59O1xuXG5jb25zdCBmb3JFYWNoU2VjdGlvbiA9IChjYWxsYmFjaykgPT4ge1xuICBjb25zdCBmcmFnbWVudHMgPSBPYmplY3Qua2V5cyhmcmFnbWVudFRvU2VjdGlvbk1hcCk7XG5cbiAgZnJhZ21lbnRzLmZvckVhY2goKGZyYWdtZW50KSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGZyYWdtZW50VG9TZWN0aW9uTWFwW2ZyYWdtZW50XTtcblxuICAgIGNhbGxiYWNrKHNlY3Rpb24pO1xuICB9KTtcbn07XG5cbmluc2VydFNlY3Rpb25zKCk7XG5cbmZyYWdtZW50Lm9uQ2hhbmdlKHJldmVhbFNlY3Rpb24pO1xuXG5yZXZlYWxTZWN0aW9uKCk7YH08L0Jsb2NrQ29kZT5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L0Vhc3lVSS1KU1gvYmxvYi9tYXN0ZXIvZXM2L2RvY3MuanNcIj5kb2NzLmpzPC9hPiBmaWxlIHNob3dzIGhvdyBlYXN5IGl0IGlzIHRvIHB1dCB0b2dldGhlciBhIGJhc2ljIHNpbmdsZSBwYWdlIHdlYiBhcHBsaWNhdGlvbi5cbiAgICAgICAgVGhlIGFwcHJvYWNoIHdpbGwgbm90IHNjYWxlIGluZGVmaW5pdGVseSwgc29vbmVyIG9yIGxhdGVyIHRoZSBzZWN0aW9ucyB3b3VsZCBoYXZlIHRvIGJlIGdlbmVyYXRlZCBmcm9tIGEgZGF0YSBzb3VyY2UgcmF0aGVyIHRoYW4gYmUgaGFyZC1jb2RlZC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBOb25ldGhlbGVzcywgaXQgc2VydmVzIHRvIGhpZ2hsaWdodCBhIGtleSBwb2ludCwgd2hpY2ggaXMgdGhhdCBhbGwgZWxlbWVudHMgYXJlIGluc3RhbmNlcyBvZiB0aGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3MsIG9yIGEgY2xhc3MgdGhhdCBleHRlbmRzIGl0LlxuICAgICAgICBJbiB0aGlzIGNhc2UgdGhpcyBtZWFucyB0aGF0IHRoZSA8SW5saW5lQ29kZT5zaG93KCk8L0lubGluZUNvZGU+IGFuZCA8SW5saW5lQ29kZT5oaWRlKCk8L0lubGluZUNvZGU+IG1ldGhvZHMgY2FuIGJlZW4gdXNlZCB0byByZXZlYWwgdGhlIHJlbGV2YW50IHNlY3Rpb24gd2hlbmV2ZXIgdGhlIGhhc2ggZnJhZ21lbnQgY2hhbmdlcy5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQUdvb2RFeGFtcGxlVGhpc0RvY3VtZW50YXRpb247XG4iXX0=